import { classNames } from "../../utils";
import Divider from "../Divider";
import CharacterCardProps from "./props";

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  id,
  className,
}) => {
  return (
    <div
      className={classNames(
        "h-44 w-60 bg-mythril-300 text-mythril-900 rounded-md shadow-2xl flex flex-col gap-1 hover:scale-105 transition duration-300 cursor-pointer select-none",
        className
      )}
      id={id}
    >
      <div className="flex gap-2.5 h-2/5 justify-start m-2">
        <img
          src={character.image}
          className="rounded-full border-2 border-mythril-700 h-full"
        />
        <span className="flex flex-col justify-center">
          <span className="text-lg">{character.name}</span>
          <Divider className="bg-mythril-900 m-0 mt-0 mb-1 w-full" />
          <span className="text-xs">
            {character.class} Lvl. {character.level}
          </span>
        </span>
      </div>
      <span className="ml-3 text-sm ">{character.description}</span>
    </div>
  );
};

export default CharacterCard;
