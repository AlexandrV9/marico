import React from 'react';
import { NavLink } from 'react-router-dom';

import { itemListNavHeader } from '../../../../utils/constants';

import StyledNavItem from './StyledNavItem';

interface NavItemProps {
  data: itemListNavHeader
};

export const NavItem = ({
  data
}: NavItemProps) => {

  return (
    <StyledNavItem>
      <NavLink 
        to={data.link}
        className={({ isActive }) => isActive ? 'active' : undefined }
      >
        {data.title}
      </NavLink>
    </StyledNavItem>
  );
};