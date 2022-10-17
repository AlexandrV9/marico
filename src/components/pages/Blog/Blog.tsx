import React from 'react';
import { Footer } from '../../common/Footer';
import { Header } from '../../common/Header';
import { Main } from './Main';

import StyledBlogProps from './StyledBlogProps';

interface BlogProps {};

export const Blog = () => {
  return (
    <StyledBlogProps>
      <Header />
      <Main />
      <Footer />
    </StyledBlogProps>
  );
};