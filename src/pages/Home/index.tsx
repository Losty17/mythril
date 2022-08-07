import { Container, Footer, HorizontalDivider, Navbar } from "../../components";
import Waves from "../../components/Waves";
import Cape from "./Cape";
import HomeProps from "./props";

const items = [
  {
    title: "Flexibility",
    text: "you can customize any aspect of your tables inside Mythril",
  },
  {
    title: "Resistance",
    text: "very reliable database to store your DM notes with safety",
  },
  {
    title: "Consistency",
    text: "access 24/7 with almost zero delay",
  },
  {
    title: "Accessibility",
    text: "100% online, no need for any downloads",
  },
  {
    title: "Free",
    text: "enjoy every single aspect for no cost*",
  },
];

const Home: React.FC<HomeProps> = ({ user }) => {
  return (
    <>
      <Navbar user={user} />
      <Cape />
      <Waves height={30} amplitude={20} speed={2} paused />
      <div
        className="flex bg-mythril-700 h-[500px] w-full mt-[145px]"
        id="video"
      >
        <div className="m-auto flex flex-row space-x-10 text-white">
          <iframe
            className="rounded-md"
            width="512"
            height="288"
            src="https://www.youtube.com/embed/OdWcX3TegHY"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
          <div className="text-2.5xl w-[512px] h-fit my-auto text-center">
            <p>Enjoy your games like you never did</p>
            <HorizontalDivider />
            <ul className="list-disc font-light text-justify text-sm m-auto mt-5 ml-9 leading-6">
              {items.map(({ title, text }, i) => (
                <li key={i}>
                  <b className="text-mythril-100">{title} -</b> {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Waves
        height={30}
        amplitude={20}
        speed={12}
        paused
        style={{
          transform: "rotate(180deg) scaleX(-1)",
          marginTop: "-5px",
        }}
      />
      <Container className="h-screen"></Container>
      <Container id="pricing"></Container>
      <Footer />
    </>
  );
};

export default Home;
