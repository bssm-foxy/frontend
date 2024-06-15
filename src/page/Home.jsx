import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// SVG 화살표 이미지 파일 가져오기
import arrowIcon from '../svg/arrow.svg';

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

const Dropdown = styled.select`
  width: 208px;
  padding: 10px;
  margin: 10px 0;
  font-size: 1rem;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  appearance: none; /* 기본 스타일 재정의 */
  padding-right: 30px; /* 오른쪽 패딩 추가 */
  background: url(${arrowIcon}) no-repeat right 10px center; /* SVG 이미지 배경 추가 */
  background-size: 20px; /* 배경 이미지 크기 조정 */
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

const Home = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCall = () => {
    setLoading(true);
    const data = {
      start_point: departure,
      finish_point: destination
    };

    axios.post('https://your-api-endpoint.com/endpoint', data)
      .then(response => {
        console.log('성공:', response.data);
        setLoading(false);
        navigate('/load'); // 성공 시 /load 페이지로 이동
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
      <Title>Home Page</Title>
      <Dropdown value={departure} onChange={(e) => setDeparture(e.target.value)}>
        <option value="">출발지 입력</option>
        <option value="3-1">3-1</option>
        <option value="3-2">3-2</option>
        <option value="3-3">3-3</option>
        <option value="3-4">3-4</option>
      </Dropdown>
      <Dropdown value={destination} onChange={(e) => setDestination(e.target.value)}>
        <option value="">출발지 입력</option>
        <option value="3-1">3-1</option>
        <option value="3-2">3-2</option>
        <option value="3-3">3-3</option>
        <option value="3-4">3-4</option>
      </Dropdown>
      <Button onClick={handleCall}>호출하기</Button>
    </Container>
  );
};

export default Home;
