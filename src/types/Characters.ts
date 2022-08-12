interface Character {
  id: number;
  name: string;
  description: string;
  race: string;
  class: string;
  level: string;
  image: string;
  cover: string;
  createdAt: Date;
  updatedAt: Date;
}

export type { Character };
