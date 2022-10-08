import React from 'react';

import StyledLoveMarico from './StyledLoveMarico';

import { ItemList } from './ItemList';

import { dataListLoveMarico } from "../../../../../utils/constants";

interface LoveMaricoProps {};

export const LoveMarico = () => {
  return (
    <StyledLoveMarico>
      <h2>Why Creators Love Marico</h2>
      <ul>
        {dataListLoveMarico.map(item => (
          <ItemList 
            key={item.id}
            data={item}
          />
        ))}
      </ul>
    </StyledLoveMarico>
  );
};