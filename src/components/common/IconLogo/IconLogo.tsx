import React from 'react';

import pathLogo from "../../../icons/logo.svg";

interface IconLogoProps {
  width: number,
  classCustom?: string,
}

export const IconLogo = ({ width, classCustom }: IconLogoProps) => {
  return (
    <img 
      className={classCustom}
      src={pathLogo}
      alt="logo"
      width={width}
    />
  )
}