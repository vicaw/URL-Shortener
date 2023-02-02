import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as LogoSVG } from "../../assets/images/logo.svg";
import formBackground from "../../assets/images/bg-shorten-desktop.svg";
import "../../assets/antd.css";

const Card = styled.div`
  display: flex;
  width: 100%;
  padding: clamp(0px, 0.35vw, 5px) clamp(0px, 2.29vw, 33px);
  background: white;
  box-sizing: border-box;
  font-size: clamp(16px, 1.39vw, 19px);
  gap: 24px;
  border-radius: 7px;
  box-shadow: inset 0 0 2px 0 #0000001f;
`;

const OriginalUrl = styled.p`
  flex-grow: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: ${({ showLink }) => (showLink ? "none" : "nowrap")};
  overflow-wrap: ${({ showLink }) => (showLink ? "break-word" : "none")};
  cursor: ${({ isoverflowing, showLink }) =>
    isoverflowing || showLink ? "pointer" : "inherit"};
`;

const ShortenedUrl = styled.p`
  color: hsl(180, 66%, 49%);
`;

const Button = styled.button`
  all: unset;
  background: ${({ copied }) => (copied ? "hsl(257, 27%, 26%)" : "hsl(180, 66%, 49%)")};
  color: white;
  text-align: center;
  font-weight: 700;
  border-radius: 7px;
  height: fit-content;
  align-self: center;
  padding: clamp(0px, 0.55vw, 8px) 0;
  min-width: clamp(69px, 7.15vw, 103px);
    width: clamp(69px, 7.15vw, 103px);
  font-size: 15px;
  text-shadow: 0 0 2px #00000059;
  cursor: pointer;
  box-sizing: border-box;
  transition: background 0.25s linear;

  :hover {
    background: ${({ copied }) => (copied ? "auto" : "#9be3e2")};
}

`;

const isEllipsisActive = (e) => {
  return e.offsetHeight < e.scrollHeight || e.offsetWidth < e.scrollWidth;
};

const ShortenedCard = ({ link }) => {
  const [showLink, setShowLink] = useState(0);
  const [overFlowing, setOverflowing] = useState();
  const [copied, setCopied] = useState(0);
  const originalLink = useRef(null);

  React.useEffect(() => {
    const handleMouseEnter = () => {
      const test = isEllipsisActive(originalLink.current);
      if (test !== overFlowing) {
        setOverflowing(test);
      }
    };

    originalLink.current.addEventListener("mouseenter", handleMouseEnter);

    return (_) => {
      originalLink.current.removeEventListener("mouseenter", handleMouseEnter);
    };
  });

  const handleShowClick = () => {
    setShowLink(isEllipsisActive(originalLink.current));
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(link.shortened);
    setCopied(1);
  };

  return (
    <Card>
      <OriginalUrl
        ref={originalLink}
        showLink={showLink}
        isoverflowing={overFlowing}
        onClick={() => handleShowClick()}
      >
        {link.original}
      </OriginalUrl>
      {showLink ? <></> : <ShortenedUrl>{link.shortened}</ShortenedUrl>}
      <Button copied={copied} onClick={() => handleCopyClick()}>
         {copied ? "Copied!" : "Copy"}
        </Button>
    </Card>
  );
};

export default ShortenedCard;
