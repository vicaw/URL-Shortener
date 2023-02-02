import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import InfoCard from "../InfoCard";
import brandRecoSVG from "../../assets/images/icon-brand-recognition.svg";
import detailedRecoSVG from "../../assets/images/icon-detailed-records.svg";
import fullyCostuSVG from "../../assets/images/icon-fully-customizable.svg";

const CardList = styled.div`
  display: flex;
  width: 100%;
    justify-content: space-between;
    gap: 2.01vw;
    max-width: 1104px;

`;



const InfoCardList = () => {
 

  return (
    <CardList>
        <InfoCard icon={brandRecoSVG} index={0}>
          <h3>Brand Recognition</h3>

          <p>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </InfoCard>

        <InfoCard icon={detailedRecoSVG} index={1} center={true}>
          <h3>Detailed Records</h3>

          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </InfoCard>

        <InfoCard icon={fullyCostuSVG} index={2}>
          <h3>Fully Customizable</h3>

          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </InfoCard>
    </CardList>
  );
};

export default InfoCardList;