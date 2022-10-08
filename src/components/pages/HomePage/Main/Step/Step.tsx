import React, { ReactNode } from 'react';

import { itemSteps } from '../../../../../utils/constants';

import StyledStep from './StyledStep'

interface StepProps {
  children?: ReactNode,
  data: itemSteps,
  margBtm?: number;
};

export const Step = ({
  children,
  data,
  margBtm
}: StepProps) => {

  return (
    <StyledStep 
      style={{
        marginBottom: margBtm
      }}
    >
      <p className="numberStep">STEP {data.numberStep}</p>
      <h3>{data.title}</h3>
      <p className="subtitle">{data.subtitle}</p>
      {children}
    </StyledStep>
  );
};