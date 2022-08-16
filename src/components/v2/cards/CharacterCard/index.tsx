import {
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Typography,
  CardActionArea,
} from "@mui/material";
import CharacterCardProps from "./props";

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const cardSizes = {
    minWidth: {
      xxl: "18%",
      lg: "30%",
      md: "48%",
      xs: "100%",
    },
    transition: "ease-out 150ms",
    "&:hover": {
      transform: "scale(1.03)",
    },
  };

  const avatarStyle = {
    transform: "translateY(32px)",
    margin: "0 auto",
    height: "80px",
    width: "80px",
    border: "2px solid white",
    boxSizing: "content-box",
  };

  return (
    <Card sx={cardSizes} style={{ height: "192px" }} elevation={8}>
      <CardActionArea sx={{ height: "100%" }} disableRipple>
        <CardMedia
          component="span"
          sx={{
            background: `url(${character.cover})`,
            backgroundSize: "cover",
            height: "80px",
          }}
        >
          <Avatar src={character.image} sx={avatarStyle} />
        </CardMedia>
        <CardContent sx={{ marginTop: "16px", textAlign: "center" }}>
          <Typography variant="h6">{character.name}</Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontSize: "12px", lineHeight: "10px" }}
          >
            {character.race}
          </Typography>
          <Typography variant="subtitle2" sx={{ fontSize: "12px" }}>
            {character.class} Lvl. {character.level}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CharacterCard;
