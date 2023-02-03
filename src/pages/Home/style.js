import styled, { css } from "styled-components";
import boostBackground from "../../assets/images/bg-boost-desktop.svg";
import boostBackgroundMobile from "../../assets/images/bg-boost-mobile.svg";

export const Main = styled.main`
  //background: cornsilk;
`;

export const Wrap = styled.div`
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
            @media screen and (max-width: 740px) {
              align-items: center;
            }
          }
        `}
`;

export const Section1 = styled.section`
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
    display: flex;
    align-items: center;
    position: relative;
    height: 100%;
    left: 8vw;
  }

  @media screen and (max-width: 740px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 1.5rem;
    padding: 0 var(--siteSpacing);
    text-align: center;

    & p {
      margin-top: 1rem;
    }

    & #imag {
      height: auto;
      width: 130vw;
      max-width: 733px;
      left: 25vw;
    }
  }
`;

export const GetStartedButton = styled.button`
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

export const Section2 = styled.section`
  margin-top: clamp(30px, 4.72vw, 68px);
  @media screen and (max-width: 740px) {
    margin-top: 5rem;
  }
`;

export const Section3 = styled.section`
  padding: 0 var(--siteSpacing);
  //height: 500px;
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

  @media screen and (max-width: 730px) {
    padding-top: 5rem;
    gap: 4.5rem;
  }
`;

export const Section4 = styled.section`
  height: 250px;
  background: teal;
  display: grid;
  place-items: center;
  padding: 0 var(--siteSpacing);
  text-align: center;

  background: hsl(257, 27%, 26%);

  background-image: ${(props) =>
    props.isMobile
      ? `url(${boostBackgroundMobile})`
      : `url(${boostBackground})`};
  background-size: 100% 100%;
  background-repeat: no-repeat;

  & h2 {
    font-size: clamp(30px, 2.78vw, 40px);
    line-height: 1.15em;
    letter-spacing: -1px;
    margin: 0;
    color: white;
  }
`;
