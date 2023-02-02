import React from "react";
import styled from "styled-components";
import {ReactComponent as LogoSVG} from "../../assets/images/logo.svg"
import Logo from "../Logo";
import Navbar from "../Navbar";


const StyledFooter = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 6px;
`;

const Title = styled.h3`
    color: white;
    padding: 0 0 0 0px;
    font-size: 15.5px;
    margin-top: 0px;
`
const Links = styled.div`
    font-size: 15.5px;
    color: hsl(0, 0%, 75%);
    display: flex;
  flex-direction: column;
  letter-spacing: -1px;
  gap: 10px;

  & :hover {
    color: hsl(180, 66%, 49%);
  }

  & a{
    transition: color 0.25s linear;
  }
  
`

const FooterLinks = ({title, children}) => {
  return (
    <StyledFooter>
      <Title>{title}</Title>
      <Links>{children}</Links>
    </StyledFooter>
  );
};

export default FooterLinks