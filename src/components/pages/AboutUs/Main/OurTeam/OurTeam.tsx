import React from 'react';

import StyledOurTeam from './StyledOurTeam';

import { Person } from './Person';

import { dataTeam } from "../../../../../utils/constants";

interface OurTeamProps {};

export const OurTeam = () => {
  return (
    <StyledOurTeam>
      <p className='subtitle'>OUR TEAM</p>
      <h2>We love creators</h2>
      <ul>
        {dataTeam.map((data) => {
          return (
            <Person 
              key={data.id}
              data={data} 
            />
          )
        })}
      </ul>
    </StyledOurTeam>
  );
};