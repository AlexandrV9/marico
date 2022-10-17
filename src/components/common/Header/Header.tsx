import React from 'react';

import { EntryInAccount } from '../EntryInAccount';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation';

import { dataListNavHeader } from '../../../utils/constants';

import StyledHeader from './StyledHeader';

interface HeaderProps {}

export const Header = () => {
  return (
    <StyledHeader className='header'>
      <Logo />
      <Navigation list={dataListNavHeader}/>
      <EntryInAccount />
    </StyledHeader>
  )
};

