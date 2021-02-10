import React from 'react';
import styled from 'styled-components';
import img from '../assets/images/skyline.jpg';

export const HomePage = () => {
  return (
    <Container>
      <BackgroundImage src={img} alt='background-image' />
    </Container>
  );
};

const Container = styled.div`
  height: 92vh;
  width: 100%;
`;

const BackgroundImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
