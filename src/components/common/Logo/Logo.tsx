import React from 'react';
import { NavLink } from 'react-router-dom';

import StyledLogo from './StyledLogo';

import { IconLogo } from "../IconLogo";

interface LogoProps {
  classCustom?: string,
  widthLogo?: number
}

export const Logo = ({
  classCustom,
  widthLogo
}: LogoProps) => {

  return (
    <StyledLogo className={classCustom}>  
      <IconLogo 
        width={widthLogo ? widthLogo : 32}
        classCustom={classCustom + 'Icon'}
      />
      <NavLink 
        to="/"
        className={({ isActive }) => !isActive ? 'active' : undefined }
      >
        Marico
      </NavLink>
    </StyledLogo>
  );

};
