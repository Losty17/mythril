import { Form } from "@unform/web";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import {
  BoardContainer,
  // CharacterCard,
  FloatingLabelInput,
  LoadingAnimation,
} from "../../../../components";
import { Button } from "../../../../components/buttons";
import CharacterCard from "../../../../components/v2/cards/CharacterCard";
import { useAppSelector } from "../../../../hooks";
import { Character } from "../../../../types";
import { normalize } from "../../../../utils";

const CharacterList = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const user = useAppSelector((state) => state.user.value);
  const [lastRow, setLastRow] = useState(0);
  const { data, error } = useSWR("/api/characterlist", async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    const charlist: Character[] = data.data;

    setCharacters(charlist);
    return charlist;
  });

  const filteredCharacters = query
    ? characters.filter((c) => normalize(c.race).includes(normalize(query)))
    : characters;

  useEffect(() => {
    try {
      const grid = Array.from(
        (document.getElementById("characters") as HTMLElement).children
      );
      const baseOffset = (grid[0] as HTMLElement).offsetTop;
      const breakIndex = grid.findIndex(
        (item) => (item as HTMLElement).offsetTop > baseOffset
      );
      const numPerRow = breakIndex === -1 ? grid.length : breakIndex;
      const mod = filteredCharacters.length % numPerRow;
      setLastRow(mod > 0 ? numPerRow - mod : 0);
    } catch (err) {
      setLastRow(0);
    }
  }, [query]);

  if (!data) return <LoadingAnimation />;

  return (
    <BoardContainer
      ref={containerRef}
      className="flex flex-col w-[80%] pt-10 mx-auto"
    >
      <div className="flex justify-between">
        <Form ref={null} onSubmit={() => {}} className="w-1/4 max-w-lg">
          <FloatingLabelInput
            name="search"
            placeholder="Search"
            type="text"
            onChange={(evt) => setQuery(evt.currentTarget.value)}
          />
        </Form>
        <div>
          <Button label="+ Add" />
        </div>
      </div>
      <div
        className="flex flex-wrap gap-4 h-full justify-between"
        id="characters"
      >
        {filteredCharacters.map((character, i) => (
          <CharacterCard
            key={i}
            // id={`character${character.id}`}
            character={character}
          />
        ))}
        {Array(lastRow)
          .fill(undefined)
          .map((u, i) => (
            <div
              key={i}
              className="h-48 sm:w-60 2xl:w-[18%] lg:w-[30%] md:w-[48%] w-full "
            ></div>
          ))}
      </div>
    </BoardContainer>
  );
};

export default CharacterList;
