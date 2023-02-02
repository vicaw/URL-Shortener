import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { ReactComponent as WorkingSVG } from "../assets/images/illustration-working.svg";
import workingSVG from "../assets/images/illustration-working.svg";
import Shortener from "../components/Shortener";
import InfoCardList from "../components/InfoCardList";
import formBackground from "../assets/images/bg-boost-desktop.svg";

const Main = styled.main`
  //background: cornsilk;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${(props) =>
    props.center
      ? css`
          & {
            align-items: center;
          }
        `
      : css`
          & {
            align-items: flex-start;
          }
        `}
`;

const Section1 = styled.section`
  display: grid;
  align-items: center;
  padding-left: var(--siteSpacing);
  grid-template-columns: 45% auto;
  overflow: hidden;
  margin-top: clamp(30px, 4.72vw, 68px);

  & h1 {
    font-size: clamp(3rem, 5.55vw, 5rem);
    line-height: 1.15em;
    letter-spacing: -0.18rem;
    margin: 0;
    color: hsl(255, 11%, 22%);
  }

  & p {
    margin: 0;
    font-size: clamp(1.2rem, 1.459vw, 1.3rem);
    color: hsl(257, 7%, 63%);
  }

  & #imag {
    //background-image: url(${workingSVG});
    //background-size: 100% 100%;
    //background-repeat: no-repeat;
    //height: 482px;
    display: flex;
    align-items: center;
    position: relative;
    left: 5vw;
    //justify-content: flex-end;
  }
`;

const GetStartedButton = styled.button`
  all: unset;
  color: white;
  margin-top: 39px;
  background: hsl(180, 66%, 49%);
  font-weight: 600;
  padding: 13px 45px;
  border-radius: 35px;
  text-shadow: 0 0 4px #00000059;
  cursor: pointer;
  transition: background 0.3s linear;

  &:hover {
    background: #9be3e2;
  }
`;

const Section2 = styled.section`
  margin-top: clamp(30px, 4.72vw, 68px);
`;

const Section3 = styled.section`
  padding: 0 var(--siteSpacing);
  height: 500px;
  background: #f0f1f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: clamp(30px, 8.61vw, 124px);
  gap: clamp(30px, 4.72vw, 68px);
  padding-bottom: 180px;

  & h2 {
    font-size: clamp(35px, 2.78vw, 40px);
    line-height: 1.15em;
    text-align: center;
    letter-spacing: -1px;
    margin: 0;
    color: hsl(255, 11%, 22%);
  }

  & p {
    max-width: 46ch;
    text-align: center;
    margin-top: 20px;
    color: hsl(257, 7%, 63%);
  }
`;

const Section4 = styled.section`
  height: 250px;
  background: teal;
  display: grid;
  place-items: center;

  background: hsl(257, 27%, 26%);

  background-image: url(${formBackground});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  & h2 {
    font-size: clamp(35px, 2.78vw, 40px);
    line-height: 1.15em;
    letter-spacing: -1px;
    margin: 0;
    color: white;
  }
`;

const Home = () => {
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

      <Section4>
        <Wrap center>
          <h2>Boost your links today</h2>
          <GetStartedButton>Get Started</GetStartedButton>
        </Wrap>
      </Section4>
    </Main>
  );
};

export default Home;
