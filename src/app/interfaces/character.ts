// ─── Wand sub-object ────────────────────────────────────────────────────────
export interface Wand {
  wood: string;
  core: string;
  length: number | null;
}

// ─── Main Character interface ────────────────────────────────────────────────
export interface Character {
  id: string;
  name: string;
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string | null;
  yearOfBirth: number | null;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: Wand;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternateActors: string[];
  alive: boolean;
  image: string;
}
