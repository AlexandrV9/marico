import React from "react";

import { dataSteps } from "../../../../utils/constants";

import { PromotionalOffer } from "./PromotionalOffer";
import { LoveMarico } from "./LoveMarico";
import { Step } from "./Step";
import { Button } from "../../../common/Button";
import { DemoProject } from "./DemoProject";
import { Decoration } from "./Decoration";
import { ExpertsAgree } from "./ExpertsAgree";
import { GetStarted } from "../../../common/GetStarted";
import { DecorBox } from "../../../common/DecorBox";

import StyledMain from "./StyledMain";

export interface MainProps {}

export const Main = () => (
  <StyledMain>
    <h1>
      Own your audience.
      <br />
      <span>So you don&apos;t lose them.</span>
    </h1>
    <PromotionalOffer />
    <LoveMarico />
    <Step data={dataSteps[0]} margBtm={182}>
      <Button classBtn="secondary avaliable">
        View Avaliable Sources
      </Button>
    </Step>
    <DemoProject />
    <Step data={dataSteps[1]} margBtm={176} />
    <Decoration />
    <Step data={dataSteps[2]} margBtm={189} />
    <ExpertsAgree />
    <DecorBox />
    <GetStarted />
  </StyledMain>
);
