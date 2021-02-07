import React from 'react';
import styled from 'styled-components';

export const Counter = () => {
  return (
    <Container>
      <CounterContainer>
        <CounterTitle>Count: 0</CounterTitle>
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
