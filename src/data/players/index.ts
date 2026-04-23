import { MALE_PLAYERS } from "./male";
import { FEMALE_PLAYERS } from "./female";
import { NEW_30_PLAYERS } from "./new-30";

export const PLAYERS_DB = {
  ...MALE_PLAYERS,
  ...FEMALE_PLAYERS,
  ...NEW_30_PLAYERS,
};
