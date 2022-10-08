import React from 'react';
import { Subtitle } from './Subtitle';
import { Button } from '../Button';
import { IconLogo } from '../IconLogo';

import StyledGetStarted from './StyledGetStarted';

interface GetStartedProps {
  classCustom?: string,
};

export const GetStarted = ({
  classCustom
}: GetStartedProps) => {
  return (
    <StyledGetStarted className={classCustom}>
      <IconLogo width={165} />
      <h2>Get Started Now</h2>
      <p>Setup is easy and takes under 5 minutes.</p>
      <Button 
        classBtn='primary'
        width={472}
      >
        Get Started Now
      </Button>
      <Subtitle classCustom='getStartedSubtitle' />
    </StyledGetStarted>
  )
};
