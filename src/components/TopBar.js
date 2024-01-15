// src/components/TopBar.js

import React from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const TopBarWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
  background-color: white;
`;

// const Button = styled.button`
//   margin-left: 10px;
//   padding: 5px 10px;
//   background-color: #3498db;
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: #2980b9;
//   }
// `


const TopBar = () => {
  return (
    <TopBarWrapper>
      <Button variant="light">login</Button>
      &nbsp;
      <Button variant="light">mypage</Button>
    </TopBarWrapper>
  );
};

export default TopBar;
