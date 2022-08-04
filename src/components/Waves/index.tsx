import Wave from "react-wavify";
import WavesProps from "./props";

const Waves: React.FC<WavesProps> = ({
  height,
  amplitude,
  speed,
  paused,
  style,
}) => {
  const wavePos: React.CSSProperties = {
    position: "absolute",
    transform: "scaleX(150%) translate(-16.65%)",
    ...style,
  };
  return (
    <>
      <Wave
        style={wavePos}
        fill="#57b19466"
        paused={paused}
        options={{
          height,
          amplitude,
          speed,
          points: 3,
        }}
      />
      <Wave
        style={wavePos}
        fill="#1a7987b3"
        paused={paused}
        options={{
          height: height + 5,
          amplitude: amplitude + 0.5,
          speed,
          points: 4,
        }}
      />
      <Wave
        style={wavePos}
        fill="#004272ff"
        paused={paused}
        options={{
          height: height + 10,
          amplitude: amplitude + 1,
          speed,
          points: 5,
        }}
      />
    </>
  );
};

export default Waves;
