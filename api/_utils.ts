import _ from "lodash";

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

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const images: string[] = [
  "https://www.cakesnladders.co.nz/wp-content/uploads/2020/02/DnD-TPK-Banner.jpg",
  "https://i.pinimg.com/originals/f9/33/51/f933516fde1e9a79facad698161e2122.jpg",
  "https://pbs.twimg.com/media/DjS-BciXcAU-7C2.jpg",
  "https://i.pinimg.com/originals/6b/71/52/6b71526762f9e72b7f8bcb2b2b1d22fa.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp/cf495d8714383.560c21464bdb4.jpg",
  "http://wallpaperstock.net/castles-ruins--lake-fantasy_wallpapers_40851_1680x1050.jpg",
];

const races: string[] = [
  "Human",
  "Half-elf",
  "Elf",
  "Dwarf",
  "Dragonborn",
  "Drow",
  "Variant Human",
  "Aasimar",
  "Aaracokra",
  "Kenku",
];

const classes: string[] = [
  "Wizard",
  "Fighter",
  "Warlock",
  "Barbarian",
  "Druid",
  "Bard",
  "Sorcerer",
  "Cleric",
  "Paladin",
  "Monk",
  "Rogue",
  "Ranger",
];

export const getRandomCharList = (size: number): Character[] =>
  Array(size)
    .fill({
      id: "0a67b-8asdz-12312-adas8",
      name: "Yulia Draconia",
      description: "Lorem Ipsum dolor sit",
      race: "Half-Dragonborn",
      class: "Wizard",
      level: "7",
      image: "https://i.imgur.com/gik61z5.jpg",
      cover: "",
      updatedAt: new Date(),
      createdAt: new Date(),
    })
    .map((i) => {
      return {
        ...i,
        cover: _.sample(images),
        race: _.sample(races),
        class: _.sample(classes),
        level: getRandomInt(1, 20),
      };
    });

export const getRandomChar = (): Character => ({
  id: "0a67b-8asdz-12312-adas8",
  name: "Yulia Draconia",
  description: "Lorem Ipsum dolor sit",
  race: _.sample(races) || "",
  class: _.sample(classes) || "",
  level: getRandomInt(1, 20),
  image: "https://i.imgur.com/gik61z5.jpg",
  cover: _.sample(images) || "",
  updatedAt: new Date(),
  createdAt: new Date(),
});
