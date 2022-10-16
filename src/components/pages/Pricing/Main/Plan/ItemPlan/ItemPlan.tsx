import React from "react";

import { BsCheck2 } from "react-icons/bs";

import StyledItemPlan from "./StyledItemPlan";

import { itemPlan } from "../../../../../../utils/constants";
import { Button } from "../../../../../common/Button";

interface ItemPlanProps {
  data: itemPlan;
}

export const ItemPlan = ({ data }: ItemPlanProps) => {
  return (
    <StyledItemPlan className={`${data.id === 21 ? "active" : ""}`}>
      <div>
        <p className="title">{data.title}</p>
        <p className="subtitle">{data.titleSubtitle}</p>
        <div className="wrapper-price">
          <div
            className={`price ${
              data?.priceSubtitleOne ? "" : "with-installment-plan"
            }`}
          >
            <h3>{data.price}</h3>
            {data?.priceSubtitleOne && <p>{data.priceSubtitleOne}</p>}
          </div>
          {data?.priceSubtitleTwo && (
            <p className="priceSubtitleTwo">{data.priceSubtitleTwo}</p>
          )}
        </div>
      </div>

      <div>
        <div className="mainText">
          <p className="primary">{data.textOne}</p>
          <p>{data.textTwo}</p>
          <p className="secondary">{data.textThree}</p>
        </div>

        <p className="primary">{data.listTitle}</p>
        <ul>
          {data.list.map((item) => {
            return (
              <li key={item.id}>
                <BsCheck2 width="100px" />
                <p>{item.text}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <Button classBtn={`${data.id === 21 ? "fourth" : "third"}`}>
        {data.textBtn}
      </Button>
    </StyledItemPlan>
  );
};
