import { Box, Divider, Typography } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { BoardContainer, LoadingAnimation } from "../../../../components";
import CharacterAvatar from "../../../../components/v2/atoms/CharacterAvatar";
import { Character } from "../../../../types";

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
      <div className="h-full">
        <Box
          sx={{
            width: "314px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CharacterAvatar
            character={character}
            size="250px"
            sx={{ margin: "32px", marginBottom: "16px" }}
          />
          <Typography variant="h5">{character.name}</Typography>
          <Typography variant="subtitle2" color="gray">
            {character.race} · {character.class}
          </Typography>
          <Divider
            sx={{ width: "40%", marginTop: "16px" }}
            color="black"
            variant="middle"
          />
        </Box>
      </div>
    );
};

export default CharacterPage;
