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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  font-size: 1.5rem;
  text-align: center;
`;

const Load = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCall = () => {
    setLoading(true);
    const data = {
      Loading_status: true
    };

    axios.post('http://10.150.149.248:8080/load', data)
      .then(response => {
        console.log('성공:', response.data);
        setLoading(false);
        navigate('/unload'); // 성공 시 /load 페이지로 이동
      })
      .catch(error => {
        console.error('에러:', error);
        setLoading(false);
      });
  };

  return (
    <Container>
      {loading && (
        <Overlay>열심히 달려가고 있습니다.<br />잠시만 기다려주세요</Overlay>
      )}
      <Title>짐을 적재해주세요.</Title>
      <Button onClick={handleCall}>적재완료</Button>
    </Container>
  );
};

export default Load;
