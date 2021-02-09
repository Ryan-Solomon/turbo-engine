import React, { FC } from 'react';
import { TCocktail } from './Cocktails';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

type TProps = {
  cocktail: TCocktail;
};

export const Cocktail: FC<TProps> = ({ cocktail }) => {
  const { strDrink, strDrinkThumb, idDrink } = cocktail;
  const history = useHistory();

  function navigateToDetailsCocktail() {
    history.push(`/cocktails/${idDrink}`);
  }

  return (
    <Container onClick={navigateToDetailsCocktail}>
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

  &:hover {
    cursor: pointer;
  }
`;
