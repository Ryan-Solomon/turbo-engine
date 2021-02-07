import React, { useState } from 'react';
import styled from 'styled-components';

export const Counter = () => {
  const [count, setCount] = useState(0);

  function increase() {
    setCount((c) => c + 1);
  }
  function decrease() {
    setCount((c) => Math.max(0, c - 1));
  }
  function clear() {
    setCount(0);
  }

  return (
    <Container>
      <CounterContainer>
        <CounterTitle>Count: {count}</CounterTitle>
        <ButtonContainer>
          <Button onClick={increase}>Increase</Button>
          <Button onClick={decrease}>Decrease</Button>
          <Button onClick={clear}>Clear</Button>
        </ButtonContainer>
      </CounterContainer>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 70vh;
`;

const CounterContainer = styled.div`
  box-shadow: 2px 2px 10px #636363;
  padding: 3rem;
`;

const CounterTitle = styled.h1`
  color: white;
  font-size: 3rem;
  text-align: center;
`;

const ButtonContainer = styled.div``;

const Button = styled.button`
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #434343 74%);
  color: white;
  padding: 0.5rem;
  box-shadow: 2px 2px 10px #636363;
  font-size: 1.5rem;
  margin: 2rem;
  margin-bottom: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
