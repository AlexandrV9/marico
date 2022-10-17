import React from 'react';
import { DecorBox } from '../../../common/DecorBox';
import { GetStarted } from '../../../common/GetStarted';
import { ContentSources } from './ContentSources';

import StyledMain from './StyledMain';

interface MainProps {};

export const Main = () => {
  return (
    <StyledMain>
      <ContentSources />
      <DecorBox />
      <GetStarted />
    </StyledMain>
  );
};