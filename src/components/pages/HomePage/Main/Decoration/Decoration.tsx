import React, { ReactNode } from 'react';

import { Button } from '../../../../common/Button';

import StyledDecoration from './StyledDecoration';
import pathImg from "../../../../../images/Mobile.jpg";

interface DecorationProps {};

export const Decoration = () => {
  return (
    <StyledDecoration>
      <ul>
        <li>
          <p>One Link</p>
          <div className='content'>
            <h3>
              ALL You Create.
              <br />
              <span>One Link</span>
            </h3>
            <img src={pathImg} alt="mobile"/>
          </div>
        </li>
        <li>
          <p>One Link</p>
          <div className='content'>
            <h3>
              Emails.
              <br />
              Phone #s.
              <br />
              <span>One Link</span>
            </h3>
          </div>
        </li>
      </ul>
      <Button classBtn='primary'>Get Started</Button>
    </StyledDecoration>
  );
};