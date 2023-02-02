import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { ReactComponent as IconFacebook } from "../../assets/images/icon-facebook.svg";
import { ReactComponent as IconTwitter } from "../../assets/images/icon-twitter.svg";
import { ReactComponent as IconPinterest } from "../../assets/images/icon-pinterest.svg";
import { ReactComponent as IconInstagram } from "../../assets/images/icon-instagram.svg";

const List = styled.div`
  display: flex;
  gap: 23px;
  height: fit-content;
    align-items: center;
`;

const Icon = styled.a`
  

  & path {
    transition: fill 0.25s linear;

    fill: white;
  }

  &:hover {
    path{
      fill: hsl(180, 66%, 49%);
    }
  }
`;

const SocialMediaLinks = () => {
  return (
    <List>
      <Icon href="#">
        <IconFacebook />
      </Icon>
      <Icon href="#">
        <IconTwitter />
      </Icon>
      <Icon href="#">
        <IconPinterest />
      </Icon>
      <Icon href="#">
        <IconInstagram />
      </Icon>
    </List>
  );
};

export default SocialMediaLinks;
