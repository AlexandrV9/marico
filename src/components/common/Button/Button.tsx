import React, { ReactNode } from 'react';

import StyledButton from './StyledButton';

interface ButtonProps {
  classBtn: string,
  children?: ReactNode,
  width?: number,
  height?: number,
  onClick?: any
};

export const Button = ({
  classBtn,
  children,
  width,
  height,
  onClick
}: ButtonProps) => {

  return (
    <StyledButton 
      className={classBtn}
      style={{
        width: width,
      }}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};