import React from 'react';

import { Header } from '../../common/Header';
import { Main } from './Main/';
import { Footer } from '../../common/Footer';

export interface HomePageProps {};

export const HomePage = () => (
  <>
    <Header />
    <Main />
    <Footer />
  </>
);
