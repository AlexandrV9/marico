import React, { ReactNode } from 'react';

import StyledButton from './StyledButton';

interface ButtonProps {
  classBtn: string,
  children?: ReactNode,
  width?: number,
  height?: number
};

export const Button = ({
  classBtn,
  children,
  width,
  height
}: ButtonProps) => {

  return (
    <StyledButton 
      className={classBtn}
      style={{
        width: width
      }}
    >
      {children}
    </StyledButton>
  );
};