import { InformationCircleIcon, StarIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
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
        "h-48 2xl:w-[18%] lg:w-[30%] md:w-[48%] w-full text-mythril-900 rounded-md shadow-2xl flex flex-col justify-between hover:scale-105 transition duration-300 cursor-pointer select-none",
        className
      )}
      id={id}
    >
      <div
        className="h-0 w-full text-white z-[1] flex justify-start gap-1"
        onClick={(evt) => evt.stopPropagation()}
      >
        <InformationCircleIcon className="h-5 float-left mt-1 ml-1" />
        <StarIcon className="h-5 float-left mt-1 text-white" />
      </div>
      <Link
        className="h-full flex flex-col justify-between"
        to={`/app/characters/${character.id}`}
      >
        <div className="h-2/5">
          <div
            style={{
              backgroundImage: `url("${character.cover}")`,
            }}
            className="h-full rounded-t-md bg-cover"
          >
            <img
              src={character.image}
              className="rounded-full border-2 box-content border-white h-full mx-auto translate-y-7"
              alt=""
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
      </Link>
    </div>
  );
};

export default CharacterCard;
