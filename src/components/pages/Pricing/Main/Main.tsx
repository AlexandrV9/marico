import React from 'react';
import { GetStarted } from '../../../common/GetStarted';

import { Plan } from './Plan';
import StyledMain from './StyledMain';

export const Main = () => {
  return (
    <StyledMain>
      <Plan />
      <GetStarted classCustom="getStarted"/>
    </StyledMain>
  )
}
