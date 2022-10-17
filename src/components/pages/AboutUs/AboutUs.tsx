import React from 'react';

import { Footer } from '../../common/Footer';
import { Header } from '../../common/Header';
import { Main } from './Main';

import StyledAboutUs from './StyledAboutUs';

interface AboutUsProps {};

export const AboutUs = () => {
  return (
    <StyledAboutUs>
      <Header />
      <Main />
      <Footer />
    </StyledAboutUs>
  );
};