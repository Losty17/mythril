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
        "h-[120px] w-[180px] bg-mythril-100 text-mythril-900 m-2 rounded-lg shadow-md",
        className
      )}
      id={id}
    >
      {character.name} - {character.id}
    </div>
  );
};

export default CharacterCard;
