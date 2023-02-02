import styled from "styled-components";
import Logo from "../Logo";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 0 var(--siteSpacing);
  position: relative;
  gap: 3.126vw;
  margin-top: clamp(33px, 3.33vw, 48px);
`;

export const StyledLogo = styled(Logo)`
    display:grid;
    padding-top: 7px;
`
