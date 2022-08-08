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
];

const CharactersPane = () => {
  const [characters, setCharacters] = useState(defaultCharacters);
  const containerRef = useRef<HTMLDivElement>(null);
  const user = useAppSelector((state) => state.user.value);

  useEffect(() => {
    console.log(containerRef);
  }, [containerRef]);

  const containerOffset = containerRef.current?.offsetLeft || 0;

  return (
    <BoardContainer
      ref={containerRef}
      className="w-fit overflow-x-visible h-full"
    >
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          id={`character${character.id}`}
          character={character}
        />
      ))}
      <div className="absolute top-0 right-0 h-full w-12 text-mythril-500">
        <div className="h-full flex justify-center">
          <ChevronRightIcon
            className="h-12 w-12 my-auto cursor-pointer"
            onClick={() => {
              const el = document.getElementById("character5");

              el?.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest",
              });
              console.log(containerRef);
            }}
          />
        </div>
      </div>
      {containerOffset > 60 && (
        <div className="absolute top-0 left-[60px] h-full w-12 text-mythril-500">
          <div className="h-full flex justify-center">
            <ChevronLeftIcon
              className="h-12 w-12 my-auto cursor-pointer"
              onClick={() => {
                const el = document.getElementById("character0");

                el?.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                  inline: "nearest",
                });
              }}
            />
          </div>
        </div>
      )}
    </BoardContainer>
  );
};

export default CharactersPane;
