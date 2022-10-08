import React from 'react';

import { Logo } from '../Logo';
import { Navigation } from '../Navigation';

import StyledFooter from './StyledFooter';

import { dataListNavFooter } from "../../../utils/constants";

interface FooterProps {};

export const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <Logo classCustom="footerLogo" widthLogo={47} />
        <p className='email'>info@marico.co</p>
      </div>
      <Navigation list={dataListNavFooter} />
    </StyledFooter>
  );
};