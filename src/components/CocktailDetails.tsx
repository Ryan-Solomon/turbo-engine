import React, { FC } from 'react';
import { TCocktail, TResponse } from './Cocktails';
import styled from 'styled-components';
import useSWR from 'swr';
import { useLocation } from 'react-router-dom';

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const CocktailDetails = () => {
  const location = useLocation();
  const { pathname } = location;
  const id = pathname.split('/')[2];
  console.log(id);
  console.log(location);
  const { data, error } = useSWR<TResponse>(url + id.toString(), fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  const drink = data.drinks[0];
  const { strCategory, strDrink, strDrinkThumb, strInstructions } = drink;
  return (
    <Container>
      <Title>{strDrink}</Title>
      <Image src={strDrinkThumb} alt='image' />
      <Category>{strCategory}</Category>
      <Instructions>{strInstructions}</Instructions>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Image = styled.img`
  height: 250px;
  width: 250px;
  object-fit: cover;
`;
const Instructions = styled.p`
  color: white;
`;

const Category = styled.h3`
  color: white;
`;

const Title = styled.h2`
  color: white;
`;
