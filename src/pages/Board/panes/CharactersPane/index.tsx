import { useEffect, useRef, useState } from "react";
import { BoardContainer, CharacterCard } from "../../../../components";
import { useAppSelector } from "../../../../hooks";
import { Character } from "../../../../types";

const defaultCharacters: Character[] = Array(7).fill({
  name: "Lilith",
  description: "Lorem Ipsum dolor sit",
  class: "Wizard",
  level: "7",
  image: "/girl.webp",
  updatedAt: "",
  createdAt: "",
});

const CharactersPane = () => {
  const [characters, setCharacters] = useState(defaultCharacters);
  const containerRef = useRef<HTMLDivElement>(null);
  const user = useAppSelector((state) => state.user.value);

  useEffect(() => {
    console.log(containerRef);
  }, [containerRef]);

  return (
    <BoardContainer ref={containerRef} className="w-fit flex h-fit">
      <div className="w-full inline-flex flex-wrap gap-4 h-full">
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
