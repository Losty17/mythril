import { useEffect, useRef, useState } from "react";
import { BoardContainer, CharacterCard } from "../../../../components";
import { useAppSelector } from "../../../../hooks";
import { Character } from "../../../../types";

const defaultCharacters: Character[] = Array(42).fill({
  id: "0a67b-8asdz-12312-adas8",
  name: "Yulia Draconia",
  description: "Lorem Ipsum dolor sit",
  race: "Half-Dragonborn",
  class: "Wizard",
  level: "7",
  image: "https://i.imgur.com/gik61z5.jpg",
  updatedAt: new Date(),
  createdAt: new Date(),
});

const CharactersPane = () => {
  const [characters, setCharacters] = useState(defaultCharacters);
  const containerRef = useRef<HTMLDivElement>(null);
  const user = useAppSelector((state) => state.user.value);

  useEffect(() => {
    console.log(containerRef);
  }, [containerRef]);

  return (
    <BoardContainer ref={containerRef} className="flex w-full justify-center">
      <div className="inline-flex flex-wrap gap-4 h-full justify-center">
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
