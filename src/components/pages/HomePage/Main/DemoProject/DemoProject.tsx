import React from 'react';
import { Button } from '../../../../common/Button';

import StyledDemoProject from './StyledDemoProject';
import pathImg from "../../../../../images/Chalie-Puth.jpg";

interface DemoProjectProps {};

export const DemoProject = () => {
  return (
    <StyledDemoProject>
      <div className='content'>
        <p className='subtitle'>Your Homepage</p>
        <h3>
          Your Content. 
          <br />
          All in <span>One Spot</span>
        </h3>
        <ul>
          <li>
            <div>1</div>
            <p>Bring all of your content together into one homepage.</p>
          </li>
          <li>
            <div>2</div>
            <p>Your page automatically updates whenever you create.</p>
          </li>
        </ul>
        <div>
          <Button classBtn='primary' width={207} height={65}>Get Started Now</Button>
          <Button classBtn='secondary'>View A Demo</Button>
        </div>
      </div>
      <div className='box-img-decor'>
        <img src={pathImg} alt=""/>
        <div />
      </div>
      
    </StyledDemoProject>
  );
};