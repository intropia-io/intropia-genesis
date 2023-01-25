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
              href="https://intropia.notion.site/privacy-policy-information-2254728e540d40b982f91157adf82b40#ebab9472c39049ff923ab1665ff6ce5c"
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
            TR3BUTOR
            <br className="md:hidden" /> GENESIS NFT
          </h1>
          <p className="text-base md:text-xl">
            Join the community of innovators, builders and connectors <br />
            shaping the future of civilization
          </p>
          <div className="buttons pt-8">
            <a
              id="genesis-landing-mint"
              target={"_blank"}
              rel="noreferrer"
              href="https://galxe.com/tr3butor/campaign/GCtvJUwXUU"
              className="rounded-md flex justify-center gap-3"
            >
              <img src="/Crystal.svg" alt="crystal" />
              mint genesis nft
            </a>

            <div className="flex pt-5">
              <a
                id="genesis-landing-cta"
                target={"_blank"}
                rel="noreferrer"
                href="https://bit.ly/3XVyOnp"
                style={{ padding: "20px", fontSize: "14px" }}
                className="rounded-md flex justify-center gap-3"
              >
                <img src="/DetailsText.svg" alt="crystal" />
                prove your worth to mint for free
              </a>
            </div>
            <div className="flex gap-5 pt-5">
              <a
                target={"_blank"}
                rel="noreferrer"
                id="genesis-landing-announce"
                href="https://medium.com/@intropia/tr3butor-genesis-nft-kickstarts-community-ownership-access-to-revolutionary-web3-talent-platform-b4c8a1ce4c83"
                className="rounded-md flex justify-center gap-3"
              >
                <img src="/Medium.svg" alt="crystal" /> announcement
              </a>
              <a
                id="genesis-landing-discord"
                target={"_blank"}
                rel="noreferrer"
                href="https://discord.gg/intropia"
                className="rounded-md flex justify-center gap-3"
              >
                <img src="/Discord.svg" alt="crystal" /> Join discord
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
