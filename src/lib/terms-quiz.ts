import type { TennisTerm } from "@/data/tennis-terms";

/**
 * Terms quiz generated from the tennis dictionary: show a definition, pick the
 * term. Deterministic per seed so a round can be replayed and tested.
 */
export const TERMS_QUIZ_VERSION = "tf-terms-quiz-v1-20260929";
export const TERMS_PER_ROUND = 10;
const OPTION_COUNT = 4;
const MASK = "○○";

export type TermQuestion = {
  termId: string;
  prompt: string;
  options: string[];
  answer: string;
  example: string | null;
  difficulty: TennisTerm["difficulty"];
};

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

function shuffle<T>(items: readonly T[], random: () => number): T[] {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(random() * (index + 1));
    [copy[index], copy[swap]] = [copy[swap], copy[index]];
  }
  return copy;
}

export function getTermNames(term: TennisTerm): string[] {
  const korean = term.term.split(" (")[0].trim();
  const english = term.term.match(/\(([^)]+)\)/)?.[1]?.trim();
  const names = [korean, korean.replace(/\s+/g, "")];
  if (english) names.push(english);
  return [...new Set(names.filter((name) => name.length > 0))];
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Hides the term's own name so the definition does not reveal the answer. */
export function maskTermName(text: string, term: TennisTerm): string {
  return getTermNames(term)
    .sort((a, b) => b.length - a.length)
    .reduce((masked, name) => masked.replace(new RegExp(escapeRegExp(name), "gi"), MASK), text);
}

function pickDistractors(terms: readonly TennisTerm[], term: TennisTerm, random: () => number): string[] {
  const others = terms.filter((candidate) => candidate.id !== term.id);
  const sameCategory = shuffle(others.filter((candidate) => candidate.category === term.category), random);
  const rest = shuffle(others.filter((candidate) => candidate.category !== term.category), random);
  return [...sameCategory, ...rest].slice(0, OPTION_COUNT - 1).map((candidate) => candidate.term);
}

export function buildTermsRound(terms: readonly TennisTerm[], seed: number, count: number = TERMS_PER_ROUND): TermQuestion[] {
  const random = createRandom(seed);
  return shuffle(terms, random)
    .slice(0, Math.min(count, terms.length))
    .map((term) => {
      const example = term.examples[0] ? maskTermName(term.examples[0], term) : null;
      return {
        termId: term.id,
        prompt: maskTermName(term.definition, term),
        options: shuffle([term.term, ...pickDistractors(terms, term, random)], random),
        answer: term.term,
        example,
        difficulty: term.difficulty,
      };
    });
}

export function gradeTermsRound(questions: TermQuestion[], answers: (string | null)[]): { correct: number; total: number } {
  return {
    correct: questions.filter((question, index) => answers[index] === question.answer).length,
    total: questions.length,
  };
}
