import React, { FC } from 'react';
import { TCocktail } from './Cocktails';
import styled from 'styled-components';

type TProps = {
  cocktail: TCocktail;
};

export const CocktailDetails: FC<TProps> = ({ cocktail }) => {
  const { strDrink, strDrinkThumb, strCategory, strInstructions } = cocktail;
  return <Container></Container>;
};

const Container = styled.div``;

const Image = styled.img`
  height: 250px;
  width: 250px;
  object-fit: cover;
`;
const Instructions = styled.p``;

const Category = styled.h3``;

const Title = styled.h2``;
