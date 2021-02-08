import React from 'react';
import styled from 'styled-components';
import { Form } from '../../components/Form';

export const FormPage = () => {
  return (
    <Container>
      <Form />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  place-items: center;
  margin-top: 4rem;
`;
