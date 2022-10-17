import React from "react";

import { dataContentSources } from "../../../../../utils/constants";
import { ItemList } from "./ItemList";

import StyledList from "./StyledList";

interface ListProps {}

export const List = () => {
  return (
    <StyledList>
      {dataContentSources.map((item) => {
        return <ItemList key={item.id} data={item} />;
      })}
    </StyledList>
  );
};
