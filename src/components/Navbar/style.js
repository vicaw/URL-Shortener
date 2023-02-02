import styled, { css } from "styled-components";


export const NavWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  z-index: 1;

  & a{
    text-decoration: none;
    display: grid;
    place-items: center;
    color: #4d4c4d;
    cursor: pointer;
    overflow: hidden;
    font-size: 0.95rem;
    font-weight: bold;
    border-radius: 4px;
    color:hsl(257, 7%, 63%);
    transition: color 0.2s linear;

    &:hover {
      color: hsl(260, 8%, 14%);     
    }
  }


  & nav{
    display: flex;
    gap: 2.223vw;
    align-items: center;
  }

  & div{
    display: flex;
    gap: 2.223vw;

    a:last-child {
      background: #2acfcf;
      color: white;
      padding: 9px 23px;
      border-radius: 20px;
      text-shadow: 0 0 4px #00000059;
      transition: background 0.3s linear;
      :hover {
        background: #9be3e2;
      }
    }
  }

  @media screen and (max-width: 780px) {
    position: absolute;
    right: 0;
    left: 0;
    top: 100%;
    flex-direction: column;
    margin: 0 var(--siteSpacing);
    padding: 40px 0px;
    pointer-events: ${({ open }) => (open ? "all" : "none")};
    background: hsl(257, 27%, 26%);
    border-radius: 10px;
    clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);   
    transition: clip-path ease-in-out 0.3s;

      ${(props) =>
        props.open
          ? css`
              clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);

              a {
                opacity: 1;
                transition: opacity 0.25s linear;
              }
            `
          : css`
              a {
                opacity: 0;
                transition: opacity 0.15s linear;
              }
            `}

    & nav,
    & div{
      flex-direction: column;
      margin: 0 24px;
      align-items: center;

      a{
        width: 100%;
        color: white;
      }
    }

    & nav{
      border-bottom: 1px solid #544A6D;
    }
    
  }
`

export const HamburgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  margin-left: auto;

  @media screen and (min-width: 780px) {
    display: none;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 100%;
    height: 3px;
    background: hsl(257, 7%, 63%);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    //transform-origin: 1px;

    :first-child {
      opacity: ${({ open }) => (open ? "0" : "1")};
      width: ${({ open }) => (open ? "0%" : "100%")};
    }

    :nth-child(3) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      width: ${({ open }) => (open ? "0%" : "100%")};
    }
  }
`;
