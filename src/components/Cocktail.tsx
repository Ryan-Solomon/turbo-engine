import React, { FC } from 'react';
import { TCocktail } from './Cocktails';
import styled from 'styled-components';

type TProps = {
  cocktail: TCocktail;
};

export const Cocktail: FC<TProps> = ({ cocktail }) => {
  const { strDrink, strDrinkThumb } = cocktail;
  return (
    <Container>
      <Title>{strDrink}</Title>
    </Container>
  );
};

const Container = styled.div``;

const Title = styled.h2`
  color: white;
`;
