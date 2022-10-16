import React from 'react';

import StyledPerson from './StyledPerson';

import { itemTeam } from  "../../../../../../utils/constants";


interface PersonProps {
  data: itemTeam
};

export const Person = ({
  data
}: PersonProps) => {
  return (
    <StyledPerson>
      <img src={data.pathProfile} alt="avatar"/>
      <h3>{data.name}</h3>
      <p>{data.profession}</p>
      <ul>
        {data.listLinksSM?.map(dataLink => {
          return (
            <li key={dataLink.id}>
              <a href={dataLink.linkSM}>
                {dataLink.nameSM}
              </a>
            </li>
          )
        })}

      </ul>
    </StyledPerson>
  );
};