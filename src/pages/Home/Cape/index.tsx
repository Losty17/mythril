import { ArrowButton } from "../../../components";
import scrollTo from "../../../utils/scrollTo";

const Cape = () => {
  const handleScroll = () => {
    scrollTo("video");
  };

  return (
    <div className="flex sm:h-[300px] md:h-[470px] lg:h-[470px] 2xl:h-[870px]">
      <div className="flex m-auto">
        <div className="my-auto mx-16 text-mythril-700 text-center">
          <p className="text-6xl tracking-wider font-display">MYTHRIL BOARD</p>
          <p className="font-sans text-lg tracking-normal max-w-[390px] -mt-2 leading-5">
            The most resistant and flexible virtual tabletop for your D&#38;D 5e
            games
          </p>
          <ArrowButton
            label="Learn More"
            size="sm"
            className="mt-4 mx-auto"
            onClick={handleScroll}
          />
        </div>
        <div className="my-auto font-display text-mythril-700 text-6xl tracking-wider text-center">
          <img src="/cape.png" width="480px" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Cape;
