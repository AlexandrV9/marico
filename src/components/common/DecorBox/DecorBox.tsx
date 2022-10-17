import React from 'react';

import StyledDecorBox from './StyledDecorBox';

interface DecorBoxProps {};

export const DecorBox = () => {
  return (
    <StyledDecorBox className="dec-box">
      <p>
        We've helped over 1,000 creatorsre claim control of their audience.
      </p>
    </StyledDecorBox>
  );
};