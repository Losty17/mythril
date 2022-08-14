import { useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import {
  BoardContainer,
  Divider,
  LoadingAnimation,
} from "../../../../components";
import { Character } from "../../../../types";
import { HomeIcon } from "@heroicons/react/solid";

const CharacterPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character>();
  const { error } = useSWR(`/api/character?id=${id}`, async (url) => {
    const res = await fetch(url);
    const data: Character = await res.json();

    setCharacter(data);
  });

  if (error) return <div>Oops! Could not find that character :(</div>;
  if (!character) return <LoadingAnimation />;
  else
    return (
      <BoardContainer className="h-full">
        <div className="flex flex-col w-1/6 text-center mx-6">
          <img
            src={character.image}
            alt=""
            className="rounded-full border-2 border-mythril-500 mb-3"
          />
          <span className="text-2xl">{character.name}</span>
          <span>{character.race}</span>
          <span>
            {character.class} Lvl. {character.level}
          </span>
        </div>
        <Divider vertical className="mx-0 mr-6 bg-mythril-500" />
        <div className="w-full">
          <div className="flex flex-row h-8 gap-12 text-mythril-500 border-b-2 border-mythril-500">
            <HomeIcon />
            <HomeIcon />
            <HomeIcon />
            <HomeIcon />
          </div>
        </div>
      </BoardContainer>
    );
};

export default CharacterPage;
