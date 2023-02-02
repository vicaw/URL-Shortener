import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  height: clamp(267px, 100%, 1000px);
  // max-height: 267px;
  padding: clamp(0px, 0.35vw, 5px) clamp(0px, 2.29vw, 33px);
  background: white;
  box-sizing: border-box;
  border-radius: 7px;
  box-shadow: inset 0 0 2px 0 #0000001f;
  align-items: flex-start;
  position: relative;
  z-index: 2;
  transform-style: preserve-3d;

  transform: translateY(calc(44px * ${({ index }) => index}));

  h3 {
    margin: 76px 0 0;
    color: hsl(255, 11%, 22%);
  }
  p {
    font-size: 15px;
    text-align: start !important;
  }

  @media screen and (max-width: 1140px) {
    h3,
    p {
      letter-spacing: -1px;
    }
  }

  ${(props) =>
    props.center
      ? css`
          z-index: 1;
          &::after {
            content: "";
            width: 100px;
            height: 8px;
            z-index: -1;
            right: 0;
            bottom: 55%;
            transform: translateX(100%);
            position: absolute;
            background: hsl(180, 66%, 49%);
          }

          &::before {
            content: "";
            /* display: inline-block; */
            width: 100px;
            height: 8px;
            z-index: -1 !important;
            bottom: 55%;
            left: 0;
            transform: translateX(-100%);
            position: absolute;
            background: hsl(180, 66%, 49%);
          }
        `
      : null}
`;

const CardIcon = styled.div`
  width: 88px;
  height: 88px;
  background: hsl(257, 27%, 26%);
  border-radius: 50%;
  position: absolute;
  transform: translateY(-50%);
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-position: center;
`;

const InfoCard = ({ children, icon, index, center }) => {
  return (
    <Card center={center} index={index}>
      <CardIcon image={icon} />
      {children}
    </Card>
  );
};

export default InfoCard;
