import React, { FC } from 'react';
import { TCocktail } from './Cocktails';
import styled from 'styled-components';

export const CocktailDetails = () => {
  return (
    <Container>
      <Title>{strDrink}</Title>
      <Image src={strDrinkThumb} alt='image' />
      <Category>{strCategory}</Category>
      <Instructions>{strInstructions}</Instructions>
    </Container>
  );
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
