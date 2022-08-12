import { SearchIcon } from "@heroicons/react/solid";
import { Form } from "@unform/web";
import _ from "lodash";
import { useRef, useState } from "react";
import {
  BoardContainer,
  CharacterCard,
  FloatingLabelInput,
} from "../../../../components";
import { Button } from "../../../../components/buttons";
import { useAppSelector } from "../../../../hooks";
import { Character } from "../../../../types";
import { getRandomInt } from "../../../../utils";

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
  "Aaracocka",
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

const defaultCharacters: Character[] = Array(40)
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

const CharactersPane = () => {
  const [characters, setCharacters] = useState(defaultCharacters);
  const containerRef = useRef<HTMLDivElement>(null);
  const user = useAppSelector((state) => state.user.value);

  return (
    <BoardContainer
      ref={containerRef}
      className="flex flex-col w-[80%] pt-10 mx-auto"
    >
      <div className="flex justify-between">
        <Form ref={null} onSubmit={() => {}} className="flex">
          <FloatingLabelInput
            name="search"
            placeholder="Search"
            type="text"
            className="w-1/2 max-w-lg"
          />
        </Form>
        <div>
          <Button label="Add character" />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 h-full justify-start">
        {defaultCharacters.map((character, i) => (
          <CharacterCard
            key={i}
            id={`character${character.id}`}
            character={character}
          />
        ))}
      </div>
    </BoardContainer>
  );
};

export default CharactersPane;
