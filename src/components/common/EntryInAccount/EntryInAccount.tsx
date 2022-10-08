import React from 'react';

import StyledEntryInAccount from './StyledEntryInAccount'

interface EntryInAccountProps {};

export const EntryInAccount = () => {
  return (
    <StyledEntryInAccount>
      <button className="signIn">Login</button>
      <button className="signUp">Sign Up</button>
    </StyledEntryInAccount>
  );
};