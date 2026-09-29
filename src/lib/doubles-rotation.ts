/**
 * Doubles rotation for club sessions: spreads sit-outs evenly and avoids
 * repeating the same partner. Deterministic for a given seed so a schedule
 * can be regenerated and shared.
 */
export const ROTATION_LIMITS = {
  minPlayers: 4,
  maxPlayers: 24,
  minCourts: 1,
  maxCourts: 6,
  minRounds: 1,
  maxRounds: 12,
  maxNameLength: 20,
} as const;

const PLAYERS_PER_COURT = 4;
const SEARCH_ATTEMPTS_PER_ROUND = 300;
const PARTNER_REPEAT_PENALTY = 100;
const OPPONENT_REPEAT_PENALTY = 3;
export const ROTATION_MODEL_VERSION = "tf-doubles-rotation-v1-20260929";

export type RotationMatch = { court: number; teamA: [string, string]; teamB: [string, string] };
export type RotationRound = { round: number; matches: RotationMatch[]; resting: string[] };
export type PlayerSummary = { name: string; games: number; rests: number; distinctPartners: number };
export type RotationResult = {
  rounds: RotationRound[];
  players: PlayerSummary[];
  repeatedPartnerPairs: number;
  courtsUsed: number;
};
export type RotationInput = { names: string[]; courts: number; rounds: number; seed: number };
export type RotationError = { error: string };

export function parsePlayerNames(raw: string): string[] {
  return raw
    .split(/[\n,]/)
    .map((name) => name.trim().slice(0, ROTATION_LIMITS.maxNameLength))
    .filter(Boolean);
}

function createRandom(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(items: T[], random: () => number): T[] {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(random() * (index + 1));
    [copy[index], copy[swap]] = [copy[swap], copy[index]];
  }
  return copy;
}

function pairKey(a: number, b: number): string {
  return a < b ? `${a}-${b}` : `${b}-${a}`;
}

export function validateRotationInput(input: RotationInput): string | null {
  const { names, courts, rounds } = input;
  if (names.length < ROTATION_LIMITS.minPlayers) return `참가자는 최소 ${ROTATION_LIMITS.minPlayers}명이 필요합니다.`;
  if (names.length > ROTATION_LIMITS.maxPlayers) return `참가자는 최대 ${ROTATION_LIMITS.maxPlayers}명까지 입력할 수 있습니다.`;
  if (new Set(names).size !== names.length) return "같은 이름이 두 번 이상 있습니다. 이름을 구분해 주세요.";
  if (!Number.isInteger(courts) || courts < ROTATION_LIMITS.minCourts || courts > ROTATION_LIMITS.maxCourts) {
    return `코트 수는 ${ROTATION_LIMITS.minCourts}~${ROTATION_LIMITS.maxCourts} 사이의 정수로 입력하세요.`;
  }
  if (!Number.isInteger(rounds) || rounds < ROTATION_LIMITS.minRounds || rounds > ROTATION_LIMITS.maxRounds) {
    return `라운드 수는 ${ROTATION_LIMITS.minRounds}~${ROTATION_LIMITS.maxRounds} 사이의 정수로 입력하세요.`;
  }
  return null;
}

type History = { games: number[]; rests: number[]; partners: Map<string, number>; opponents: Map<string, number> };

function chooseResting(playerCount: number, restCount: number, history: History, random: () => number): Set<number> {
  const order = shuffle([...Array(playerCount).keys()], random);
  // Rest the players who have played the most and rested the least.
  order.sort((a, b) => (history.rests[a] - history.rests[b]) || (history.games[b] - history.games[a]));
  return new Set(order.slice(0, restCount));
}

function scoreArrangement(order: number[], history: History): number {
  let cost = 0;
  for (let start = 0; start < order.length; start += PLAYERS_PER_COURT) {
    const [a, b, c, d] = order.slice(start, start + PLAYERS_PER_COURT);
    cost += PARTNER_REPEAT_PENALTY * ((history.partners.get(pairKey(a, b)) ?? 0) + (history.partners.get(pairKey(c, d)) ?? 0));
    for (const [x, y] of [[a, c], [a, d], [b, c], [b, d]]) {
      cost += OPPONENT_REPEAT_PENALTY * (history.opponents.get(pairKey(x, y)) ?? 0);
    }
  }
  return cost;
}

function increment(map: Map<string, number>, key: string): void {
  map.set(key, (map.get(key) ?? 0) + 1);
}

function recordRound(order: number[], history: History): void {
  for (let start = 0; start < order.length; start += PLAYERS_PER_COURT) {
    const [a, b, c, d] = order.slice(start, start + PLAYERS_PER_COURT);
    increment(history.partners, pairKey(a, b));
    increment(history.partners, pairKey(c, d));
    for (const [x, y] of [[a, c], [a, d], [b, c], [b, d]]) increment(history.opponents, pairKey(x, y));
    for (const player of [a, b, c, d]) history.games[player] += 1;
  }
}

export function generateRotation(input: RotationInput): RotationResult | RotationError {
  const validationError = validateRotationInput(input);
  if (validationError) return { error: validationError };

  const { names, rounds, seed } = input;
  const courtsUsed = Math.min(input.courts, Math.floor(names.length / PLAYERS_PER_COURT));
  const playingCount = courtsUsed * PLAYERS_PER_COURT;
  const random = createRandom(seed);
  const history: History = {
    games: names.map(() => 0),
    rests: names.map(() => 0),
    partners: new Map(),
    opponents: new Map(),
  };

  const schedule: RotationRound[] = [];
  for (let round = 1; round <= rounds; round += 1) {
    const resting = chooseResting(names.length, names.length - playingCount, history, random);
    const playing = [...names.keys()].filter((index) => !resting.has(index));
    let best = playing;
    let bestCost = Number.POSITIVE_INFINITY;
    for (let attempt = 0; attempt < SEARCH_ATTEMPTS_PER_ROUND && bestCost > 0; attempt += 1) {
      const candidate = shuffle(playing, random);
      const cost = scoreArrangement(candidate, history);
      if (cost < bestCost) {
        best = candidate;
        bestCost = cost;
      }
    }
    recordRound(best, history);
    resting.forEach((index) => { history.rests[index] += 1; });
    const matches: RotationMatch[] = [];
    for (let court = 0; court < courtsUsed; court += 1) {
      const [a, b, c, d] = best.slice(court * PLAYERS_PER_COURT, (court + 1) * PLAYERS_PER_COURT);
      matches.push({ court: court + 1, teamA: [names[a], names[b]], teamB: [names[c], names[d]] });
    }
    schedule.push({ round, matches, resting: [...resting].sort((x, y) => x - y).map((index) => names[index]) });
  }

  const players: PlayerSummary[] = names.map((name, index) => ({
    name,
    games: history.games[index],
    rests: history.rests[index],
    distinctPartners: [...history.partners.keys()].filter((key) => key.split("-").map(Number).includes(index)).length,
  }));
  const repeatedPartnerPairs = [...history.partners.values()].filter((count) => count > 1).length;
  return { rounds: schedule, players, repeatedPartnerPairs, courtsUsed };
}

export function formatRotationText(result: RotationResult): string {
  const lines = result.rounds.flatMap((round) => [
    `[${round.round}라운드]`,
    ...round.matches.map((match) => `코트 ${match.court}: ${match.teamA.join("·")} vs ${match.teamB.join("·")}`),
    ...(round.resting.length ? [`휴식: ${round.resting.join(", ")}`] : []),
    "",
  ]);
  return lines.join("\n").trim();
}
