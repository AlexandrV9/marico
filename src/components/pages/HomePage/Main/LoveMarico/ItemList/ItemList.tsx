import React from 'react';

import styles from "./ItemList.module.scss";
import { itemListLoveMarico } from "../../../../../../utils/constants";

import pathEmojHappy from "../../../../../../icons/happy-emoji.svg";
import pathEmojSmile from "../../../../../../icons/smile-emoji.svg";
import pathEmojParty from "../../../../../../icons/party-emoji.svg";

interface ItemListProps {
  data: itemListLoveMarico
};

export const ItemList = ({ data }: ItemListProps) => {
  
  const pathEmoji = () => {
    switch(data.emoji) {
      case "smile": {
        return pathEmojHappy;
      }
      case "happy": {
        return pathEmojSmile;
      }
      case "party": 
      default: {
        return pathEmojParty;
      }
    }
  } 

  return (
    <li className={styles.ItemList}>
      <div>
        <img src={pathEmoji()} alt="emoji"/>
        <p>{data.title}</p>
      </div>
      <p>{data.subtitle}</p>
    </li>  
  );
};