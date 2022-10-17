import React from 'react';

import { itemContentSources } from "../../../../../../utils/constants";

import StyledItemList from './StyledItemList';

interface ItemListProps {
  data: itemContentSources
};

export const ItemList = ({
  data
}: ItemListProps) => {
  return (
    <StyledItemList>
      <img src={data.pathImg} alt={`icon${data.title}`} />
      <h3>{data.title}</h3>
      <p>{data.text}</p>
    </StyledItemList>
  );
};