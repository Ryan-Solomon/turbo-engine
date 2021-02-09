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
      <Image src={strDrinkThumb} alt='drink' />
    </Container>
  );
};

const Container = styled.div``;

const Title = styled.h2`
  color: white;
`;

const Image = styled.img`
  height: 250px;
  object-fit: cover;
`;
