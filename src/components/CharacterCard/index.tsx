import CharacterCardProps from "./props";

const CharacterCard: React.FC<CharacterCardProps> = ({ character, id }) => {
  return (
    <div
      className="h-[580px] w-80 bg-mythril-100 text-mythril-900 mr-16 rounded-lg shadow-md"
      id={id}
    >
      {character.name} - {character.id}
    </div>
  );
};

export default CharacterCard;
