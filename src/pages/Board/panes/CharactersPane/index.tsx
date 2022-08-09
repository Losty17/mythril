import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useEffect, useRef, useState } from "react";
import { BoardContainer, CharacterCard } from "../../../../components";
import { useAppSelector } from "../../../../hooks";
import { Character } from "../../../../types";

const defaultCharacters: Character[] = [
  {
    id: 0,
    name: "Character 1",
    description: "Description 1",
    image: "",
    updatedAt: "",
    createdAt: "",
  },
  {
    id: 1,
    name: "Character 2",
    description: "Description 2",
    image: "",
    updatedAt: "",
    createdAt: "",
  },
  {
    id: 2,
    name: "Character 3",
    description: "Description 3",
    image: "",
    updatedAt: "",
    createdAt: "",
  },
  {
    id: 3,
    name: "Character 3",
    description: "Description 3",
    image: "",
    updatedAt: "",
    createdAt: "",
  },
  {
    id: 4,
    name: "Character 3",
    description: "Description 3",
    image: "",
    updatedAt: "",
    createdAt: "",
  },
  {
    id: 5,
    name: "Character 3",
    description: "Description 3",
    image: "",
    updatedAt: "",
    createdAt: "",
  },
  {
    id: 6,
    name: "Character 3",
    description: "Description 3",
    image: "",
    updatedAt: "",
    createdAt: "",
  },
  {
    id: 7,
    name: "Character 3",
    description: "Description 3",
    image: "",
    updatedAt: "",
    createdAt: "",
  },
  {
    id: 8,
    name: "Character 3",
    description: "Description 3",
    image: "",
    updatedAt: "",
    createdAt: "",
  },
];

const CharactersPane = () => {
  const [characters, setCharacters] = useState(defaultCharacters);
  const containerRef = useRef<HTMLDivElement>(null);
  const user = useAppSelector((state) => state.user.value);

  useEffect(() => {
    console.log(containerRef);
  }, [containerRef]);

  return (
    <BoardContainer ref={containerRef} className="w-fit flex h-fit">
      <div className="w-full inline-flex flex-wrap h-full justify-self-center ">
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            id={`character${character.id}`}
            character={character}
          />
        ))}
      </div>
    </BoardContainer>
  );
};

export default CharactersPane;
