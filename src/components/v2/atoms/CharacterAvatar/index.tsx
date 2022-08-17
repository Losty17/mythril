import { Avatar, Box, CircularProgress } from "@mui/material";
import CharacterAvatarProps from "./props";

const CharacterAvatar: React.FC<CharacterAvatarProps> = ({
  character,
  size,
  sx,
}) => {
  return (
    <Box
      component="div"
      sx={{
        width: size,
        height: size,
        position: "relative",
        ...sx,
      }}
    >
      <Avatar
        src={character.image}
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          scale: ".98",
        }}
      />
      <CircularProgress
        variant="determinate"
        value={100}
        size="100%"
        thickness={0.6}
        color="info"
        sx={{
          color: "#eee",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <CircularProgress
        variant="determinate"
        value={character.level * 5}
        size="100%"
        thickness={0.6}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          rotate: "135deg",
          color: "#57B194",
        }}
      />
      <Box
        sx={{
          border: "2px solid #57B194",
          boxSizing: "content-box",
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          textAlign: "center",
          lineHeight: "32px",
          background: "white",
          position: "absolute",
          right: 20,
          bottom: 20,
        }}
      >
        {character.level}
      </Box>
    </Box>
  );
};

export default CharacterAvatar;
