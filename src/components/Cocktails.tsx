import React from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import { Cocktail } from './Cocktail';

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const url =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

export type TCocktail = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
  strCategory: string;
};

type TResponse = {
  drinks: TCocktail[];
};

export const Cocktails = () => {
  const { data, error } = useSWR<TResponse>(url, fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <Container>
      {data.drinks.map((drink) => {
        return <Cocktail key={drink.idDrink} cocktail={drink} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  margin-top: 2rem;
`;
