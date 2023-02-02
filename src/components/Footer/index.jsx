import React from "react";
import styled from "styled-components";
import { ReactComponent as LogoSVG } from "../../assets/images/logo.svg";
import FooterLinks from "../FooterLinks";
import Logo from "../Logo";
import Navbar from "../Navbar";
import SocialMediaLinks from "../SocialMediaLinks";

const StyledFooter = styled.footer`
  display: flex;
  background: hsl(260, 8%, 14%);
  padding: 71px var(--siteSpacing);
  position: relative;
  gap: 100px;

  @media screen and (max-width: 2px) {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-column-gap: 5px;
    justify-items: center;
  }
`;

const StyledLogo = styled(Logo)`
  flex-grow: 1;

`

const Footer = () => {
  return (
    <StyledFooter>
      <StyledLogo white />
      <FooterLinks title="Features">
        <a href="#">Link Shortening</a>
        <a href="#">Branded Links</a>
        <a href="#">Analytics</a>
      </FooterLinks>

      <FooterLinks title="Resources">
        <a href="#">Blog</a>
        <a href="#">Developers</a>
        <a href="#">Support</a>
      </FooterLinks>

      <FooterLinks title="Company">
        <a href="#">About</a>
        <a href="#">Our Team</a>
        <a href="#">Careers</a>
        <a href="#">Contact</a>
      </FooterLinks>

      <SocialMediaLinks />

    </StyledFooter>
  );
};

export default Footer;
