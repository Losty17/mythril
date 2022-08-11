import { Link } from "react-router-dom";
import { classNames } from "../../utils";
import CharacterCardProps from "./props";

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  id,
  className,
}) => {
  return (
    <Link
      className={classNames(
        "h-48 sm:w-60 w-11/12 text-mythril-900 rounded-md shadow-2xl flex flex-col justify-between gap-1 hover:scale-105 transition duration-300 cursor-pointer select-none",
        className
      )}
      id={id}
      to={`/app/characters/${character.id}`}
    >
      <div className="h-full flex flex-col justify-between">
        <div className="h-2/5">
          <div className="h-full bg-[url('https://www.cakesnladders.co.nz/wp-content/uploads/2020/02/DnD-TPK-Banner.jpg')] bg-cover rounded-t-md">
            <img
              src={character.image}
              className="rounded-full border-2 box-content border-white h-full mx-auto translate-y-7"
            />
          </div>
          <div className="flex flex-col text-center mt-8">
            <span className="text-xl mx-auto overflow-ellipsis whitespace-nowrap overflow-hidden max-w-[80%]">
              {character.name}
            </span>
            <div className="text-xs text-mythril-900/70">
              <p>{character.race}</p>
              <p>
                {character.class} Lvl. {character.level}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
