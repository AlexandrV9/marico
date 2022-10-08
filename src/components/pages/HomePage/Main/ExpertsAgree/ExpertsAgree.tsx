import React, { ReactNode } from 'react';

import pathImg from "../../../../../images/experts-agree.png";
import StyledExpertsAgree from "./StyledExpertsAgree";

interface ExpertsAgreeProps {};

export const ExpertsAgree = () => {
  return (
    <StyledExpertsAgree>
      <h2>Experts Agree</h2>
      <div>
        <img src={pathImg} alt="social-media"/>
      </div>
    </StyledExpertsAgree>
  );
};