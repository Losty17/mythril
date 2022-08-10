import { classNames } from "../../utils";
import CharacterCardProps from "./props";

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  id,
  className,
}) => {
  return (
    <div
      className={classNames(
        "h-44 w-60 bg-mythril-300 text-mythril-900 rounded-md shadow-2xl",
        className
      )}
      id={id}
    >
      {character.name} - {character.id}
    </div>
  );
};

export default CharacterCard;
