import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';

import StyledEntryInAccount from './StyledEntryInAccount'

interface EntryInAccountProps {};

export const EntryInAccount = () => {

  const navigate = useNavigate();

  const openSignInPage = () => { navigate('/sign-in') }
  const openSignUpPage = () => { navigate('/sign-up') }

  return (
    <StyledEntryInAccount>
      <Button classBtn='signIn' onClick={openSignInPage}>Login</Button>
      <Button classBtn='signUp' onClick={openSignUpPage}>Sign Up</Button>
      {/* <button className="signUp">Sign Up</button> */}
    </StyledEntryInAccount>
  );
};