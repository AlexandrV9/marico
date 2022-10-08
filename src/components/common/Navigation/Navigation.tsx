import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { NavItem } from './NavItem';

import StyledNavigation from './StyledNavigation';

interface NavigationProps {
  list: any
};

export const Navigation = ({
  list
}: NavigationProps) => {

  return (
    <StyledNavigation>
      <ul>
        {list.map((item: any) => {
          return (
            <NavItem 
              key={item.id}
              data={item} 
            />
          )
        })}
      </ul>
    </StyledNavigation>
  );
};