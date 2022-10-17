import React from "react";
import { GetStarted } from "../../../common/GetStarted";
import { Logo } from "../../../common/Logo";

import pathd from "../../../../images/Profile.png"

import StyledMain from "./StyledMain";

import { OurTeam } from "./OurTeam";
import { Text } from "./Text";

interface MainProps {}

export const Main = () => {
  return (
    <StyledMain>
      <Logo classCustom="logo" widthLogo={76}/>
      <Text />
      <OurTeam />
      <GetStarted />
    </StyledMain>
  );
};
