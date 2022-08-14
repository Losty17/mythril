interface Character {
  id: string;
  name: string;
  description: string;
  race: string;
  class: string;
  level: number;
  image: string;
  cover: string;
  createdAt: Date;
  updatedAt: Date;
}

export type { Character };
