import React from "react";
import Navbar from "../Navbar";
import {StyledHeader, StyledLogo} from "./style";


const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo />
      <Navbar />
    </StyledHeader>
  );
};

export default Header