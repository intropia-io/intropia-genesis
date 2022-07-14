import Tilt from "react-parallax-tilt";
import "./App.scss";
import { Footer } from "./components/menu/footer";
import TickerText from "./components/ticker-text/ticker-text";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col h-screen flex-1 ">
        <TickerText />
        <div className="container m-auto text-center flex flex-col items-center pl-4 pr-4 ">
          <div className="pt-8 flex flex-col items-center">
            <img width={130} src="/logo.svg" alt="logo" />
            <a
              href="https://tr3butor.notion.site/privacy-policy-information-2254728e540d40b982f91157adf82b40#ebab9472c39049ff923ab1665ff6ce5c"
              target="_blank"
              className="opacity-50 text-xs pt-2 pb-4"
              rel="noreferrer"
            >
              Scrolling next screens you agree with <u>Cookie policy</u>.
            </a>
          </div>
          <Tilt
            className="parallax-effect-img"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={800}
            glareEnable={true}
            glarePosition="bottom"
            glareBorderRadius="30px"
            glareMaxOpacity={0.45}
            transitionSpeed={1500}
            gyroscope={true}
            style={{
              height: 375,
              width: 252,
              background: "url(/card.png) center no-repeat",
              transformStyle: "preserve-3d",
            }}
          >
            <img className="inner-element" src="/gen-logo.png" alt="gen logo" />
          </Tilt>
          <h1 className="font-extrabold pb-4 pt-6 text-4xl md:text-6xl">
            TR3BUTOR GENESIS NFTs
          </h1>
          <p className="text-base md:text-xl">
            Join the community of innovators, builders and talents
            <br />
            shaping the future of civilization
          </p>
          <div className="buttons pt-8">
            <button
              onClick={() => window.open("https://bit.ly/3aEJ68w", "_blank")}
              className="rounded-md flex justify-center gap-3"
            >
              <img src="/Crystal.svg" alt="crystal" />
              prove your worth to mint for free
            </button>
            <div className="flex gap-5 pt-5">
              {/*<button onClick={()=> window.open("https://bit.ly/3aEJ68w", "_blank")} className="rounded-md flex justify-center gap-3">
                <img src="/Medium.svg" alt="crystal" /> announcement
          </button>*/}
              <button
                onClick={() =>
                  window.open("https://discord.gg/tr3butor", "_blank")
                }
                className="rounded-md flex justify-center gap-3"
              >
                <img src="/Discord.svg" alt="crystal" /> Join discord
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
