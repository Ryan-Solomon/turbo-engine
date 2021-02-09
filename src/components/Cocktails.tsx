import React from 'react';
import styled from 'styled-components';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const url =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

type TCocktail = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
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
        return <h1 key={drink.idDrink}>{drink.strDrink}</h1>;
      })}
    </Container>
  );
};

const Container = styled.div``;