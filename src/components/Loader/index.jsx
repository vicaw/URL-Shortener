import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const LoadCircle = styled.span`
  all: unset;
  border: 4px solid #fefefe;
  border-radius: 50%;
  border-top: 4px solid #555;
  width: 20px;
  height: 20px;
   
  animation: spin 0.6s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => {
  return (
    <LoadCircle/>
  );
};

export default Loader;