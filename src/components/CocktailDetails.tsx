import React, { FC } from 'react';
import { TCocktail } from './Cocktails';

type TProps = {
  cocktail: TCocktail;
};

export const CocktailDetails: FC<TProps> = ({ cocktail }) => {
  const { strDrink, strDrinkThumb, strCategory, strInstructions } = cocktail;
  return <h1>Coacktail Details</h1>;
};
