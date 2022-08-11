import { Link } from "react-router-dom";
import { classNames } from "../../utils";
import Divider from "../Divider";
import CharacterCardProps from "./props";

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  id,
  className,
}) => {
  return (
    <Link
      className={classNames(
        "h-48 sm:w-60 w-11/12 bg-mythril-500 text-mythril-900 rounded-md shadow-2xl flex flex-col justify-between gap-1 hover:scale-105 transition duration-300 cursor-pointer select-none border-2 border-mythril-700",
        className
      )}
      id={id}
      to={`/app/characters/${character.id}`}
    >
      <div className="h-full flex flex-col justify-between">
        <div className="h-2/5">
          <div className="h-full bg-[url('https://www.cakesnladders.co.nz/wp-content/uploads/2020/02/DnD-TPK-Banner.jpg')] bg-contain border-b-2 border-mythril-700 rounded-t-md">
            <img
              src={character.image}
              className="rounded-full border-2 box-content border-mythril-700 h-full mx-auto translate-y-7"
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
    // <Link
    //   className={classNames(
    //     "h-44 sm:w-60 w-11/12 bg-mythril-500 text-mythril-900 rounded-md shadow-2xl flex flex-col justify-between gap-1 hover:scale-105 transition duration-300 cursor-pointer select-none",
    //     className
    //   )}
    //   id={id}
    //   to={`/app/characters/${character.id}`}
    // >
    //   <div className="h-2/5">
    //     <div className="flex gap-2.5 h-full justify-start m-2">
    //       <img
    //         src={character.image}
    //         className="rounded-full border-2 border-mythril-700 h-full"
    //       />
    //       <span className="flex flex-col justify-center">
    //         <span className="text-lg leading-none">{character.name}</span>
    //         <div className="w-full h-0.5 bg-mythril-900 rounded-md my-1" />
    //         <span className="text-xs">
    //           {character.class} Lvl. {character.level}
    //         </span>
    //       </span>
    //     </div>
    //     <span className="ml-3 text-sm ">{character.description}</span>
    //   </div>
    //   <span className="text-xt text-mythril-300 self-end m-1">
    //     {character.updatedAt.toLocaleString()}
    //   </span>
    // </Link>
  );
};

export default CharacterCard;
