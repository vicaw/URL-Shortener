import styled from "styled-components";
import { ReactComponent as LogoSVG } from "../../assets/images/logo.svg";

const Logo = styled(LogoSVG)`
  & path {
    fill: ${({ white }) => (white ? "white" : "hsl(260, 8%, 14%)")};
  }
`;

export default Logo;
