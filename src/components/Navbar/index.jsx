import React, { useState, useEffect, useRef } from "react";
import { HamburgerButton, NavWrapper } from "./style";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const handleClickOutside = (event) => {
    if (isOpen && !navRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  const Link = ({ children }) => {
    return (
      <a onClick={() => setIsOpen(!isOpen)} href="/#">
        {children}
      </a>
    );
  };

  return (
    <>
      <NavWrapper open={isOpen}>
        <nav open={isOpen} ref={navRef}>
          <Link>Features</Link>
          <Link>Pricing</Link>
          <Link>Resources</Link>
        </nav>

        <div>
          <Link>Login</Link>
          <Link>Sign Up</Link>
        </div>
      </NavWrapper>

      <HamburgerButton open={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </HamburgerButton>
    </>
  );
};

export default Navbar;
