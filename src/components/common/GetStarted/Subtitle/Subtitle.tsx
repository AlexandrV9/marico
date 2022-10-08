import React from 'react';

import StyledSubtitle from './StyledSubtitle'

interface SubtitleProps {
  classCustom?: string
};

export const Subtitle = ({
  classCustom
}: SubtitleProps) => {
  return (
    <StyledSubtitle className={classCustom}>
      <div/>
      <span>1000+ </span>
      creators have already started
    </StyledSubtitle>
  );
};