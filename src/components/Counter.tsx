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
      </CounterContainer>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 70vh;
`;

const CounterContainer = styled.div``;

const CounterTitle = styled.h1`
  color: white;
  font-size: 3rem;
`;
