import React from "react";
import { ReactComponent as WorkingSVG } from "../../assets/images/illustration-working.svg";
import Shortener from "../../components/Shortener";
import InfoCardList from "../../components/InfoCardList";
import { useMediaQuery } from "react-responsive";

import {
  Main,
  Wrap,
  GetStartedButton,
  Section1,
  Section2,
  Section3,
  Section4,
} from "./style";

const Home = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 730px)" });

  return (
    <Main>
      <Section1>
        <Wrap>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <GetStartedButton>Get Started</GetStartedButton>
        </Wrap>

        <div id="imag">
          <WorkingSVG />
        </div>
      </Section1>

      <Section2>
        <Shortener />
      </Section2>

      <Section3>
        <div>
          <h2>Advanced Statistics</h2>
          <p>
            Track how your link are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <InfoCardList />
      </Section3>

      <Section4 isMobile={isMobile}>
        <Wrap center>
          <h2>Boost your links today</h2>
          <GetStartedButton>Get Started</GetStartedButton>
        </Wrap>
      </Section4>
    </Main>
  );
};

export default Home;
