import React, { useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div``;

const FeatureSide = () => {
  return (
    <StyledDiv>
      <h1>A better way to send money</h1>
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam
        voluptatum cupiditate veritatis in, accusamus quisquam.
      </h3>
      <h2>Transfer funds world-wide</h2>
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima
        sequi recusandae, porro maiores officia assumenda aliquam laborum ab
        aliquid veritatis impedit odit adipisci optio iste blanditiis facere.
        Totam, velit.
      </h4>
      <div className="feature">
        <div className="svg-background">
          <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 20">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </div>
        <div className="supporting_text_headline">
          Competitive exchange rates
        </div>
        <div className="sopporting_text_description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
          ratione.
        </div>
      </div>
    </StyledDiv>
  );
};

export default FeatureSide;
