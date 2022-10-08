import React from 'react';

import StyledPromotionalOffer from './StyledPromotionalOffer';

import { Button } from '../../../../common/Button';
import { Subtitle } from '../../../../common/GetStarted/Subtitle';

interface PromotionalOfferProps {};

export const PromotionalOffer = () => {
  return (
    <StyledPromotionalOffer>
      <p className="title">
        Turn your audience into email and
        <br />
        text message subscribers.
      </p>
      <div className="wrapper-btns">
        <Button classBtn="primary">Get Started Now</Button>
        <Button classBtn="secondary">View A Demo</Button>
      </div>
      <Subtitle />
    </StyledPromotionalOffer>
  );
};