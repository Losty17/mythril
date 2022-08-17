import { SxProps } from "@mui/material";
import { Character } from "../../../../types";

export default interface CharacterAvatarProps {
  character: Character;
  size: string;
  sx?: SxProps;
}
