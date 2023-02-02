import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import {ReactComponent as LogoSVG} from "../../assets/images/logo.svg"

const Logo = styled(LogoSVG)`
    & path{
    fill: ${({white}) => white ? "white" : "hsl(260, 8%, 14%)"}
    }
`;

export default Logo;