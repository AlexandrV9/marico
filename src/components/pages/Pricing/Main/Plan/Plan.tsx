import React from 'react';

import StyledPlan from './StyledPlan';

import { dataListPlan } from "../../../../../utils/constants"
import { ItemPlan } from "./ItemPlan"

interface PlanProps {};

export const Plan = () => {
  return (
    <StyledPlan>
      <h1>Choose the plan that's right for you.</h1>
      <ul className='list'>
        {dataListPlan.map(item => {
          return (
            <ItemPlan 
              key={item.id}
              data={item}
            /> 
          );
        })}
      </ul>
    </StyledPlan>
  );
};