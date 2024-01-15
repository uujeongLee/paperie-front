// src/components/Yujeong.js

import React from "react";
import styled from "styled-components";

const YujeongContainer = styled.div`
  margin: 20px;
  padding: 10px;
  border: 1px solid #ccc;
`;

const Hello = () => {
  return (
    <YujeongContainer>
      <h2>000님 안녕하세요,</h2>
      <p>어떤 기사를 인용하시겠어요?</p>
    </YujeongContainer>
  );
};

export default Hello;
