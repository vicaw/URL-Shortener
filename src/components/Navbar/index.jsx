import React, { useState, useCallback, useEffect, useRef } from "react";
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
  }, [isOpen, handleClickOutside]);

  return (
    <>
      <NavWrapper open={isOpen}>
        <nav open={isOpen} ref={navRef}>
          <a onClick={() => setIsOpen(!isOpen)}>Features</a>
          <a onClick={() => setIsOpen(!isOpen)}>Pricing</a>
          <a onClick={() => setIsOpen(!isOpen)}>Resources</a>
        </nav>

        <div>
          <a onClick={() => setIsOpen(!isOpen)}>Login</a>
          <a onClick={() => setIsOpen(!isOpen)}>Sing Up</a>
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
