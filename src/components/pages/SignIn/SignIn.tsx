import React from 'react';
import { Header } from '../../common/Header';
import { Main } from './Main';

import StyledSignIn from './StyledSignIn';

interface SignInProps {};

export const SignIn = () => {
  return (
    <StyledSignIn>
      <Header />
      <Main type="in"/>
    </StyledSignIn>
  );
};