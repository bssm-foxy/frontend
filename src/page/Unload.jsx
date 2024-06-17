import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 208px;
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: black;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: gray;
  }
`;

const Unload = () => {
  const navigate = useNavigate();

  const handleCall = () => {
    const data = {
      unloading_status: true
    };

    axios.post('http://10.150.149.248:8080/unload', data)
      .then(response => {
        console.log('성공:', response.data);
        navigate('/');
      })
      .catch(error => {
        console.error('에러:', error);
      });
  };

  return (
    <Container>
      <Title>도착했습니다! <br/> 짐을 가져가주세요!</Title>
      <Button onClick={handleCall}>양하완료</Button>
    </Container>
  );
};

export default Unload;
