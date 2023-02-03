import React, { useRef, useState } from "react";
import { Button, Card, OriginalUrl, ShortenedUrl } from "./style";
import { useMediaQuery } from "react-responsive";

const isEllipsisActive = (e) => {
  return e.offsetHeight < e.scrollHeight || e.offsetWidth < e.scrollWidth;
};

const ShortenedCard = ({ link }) => {
  const [showLink, setShowLink] = useState(false);
  const [overFlowing, setOverflowing] = useState(false);
  const [copied, setCopied] = useState(false);

  const originalLink = useRef(null);

  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  const handleMouseEnter = () => {
    const test = isEllipsisActive(originalLink.current);
    if (test !== overFlowing) {
      setOverflowing(test);
    }
  };

  React.useEffect(() => {
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
    setCopied(true);
  };

  return (
    <Card>
      <OriginalUrl
        ref={originalLink}
        showLink={showLink}
        isoverflowing={overFlowing}
        onClick={() => handleShowClick()}
      >
        {!copied || !isMobile ? link.original : null}
      </OriginalUrl>

      {showLink || isMobile ? (
        <>{copied ? <ShortenedUrl>{link.shortened}</ShortenedUrl> : null}</>
      ) : (
        <ShortenedUrl>{link.shortened}</ShortenedUrl>
      )}
      <Button copied={copied} onClick={() => handleCopyClick()}>
        {copied ? "Copied!" : "Copy"}
      </Button>
    </Card>
  );
};

export default ShortenedCard;
