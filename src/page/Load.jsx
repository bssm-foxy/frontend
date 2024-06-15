import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const Load = () => {
  return (
    <Container>
      <Title>Load Page</Title>
    </Container>
  );
};

export default Load;
