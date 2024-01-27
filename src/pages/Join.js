import React, { useState } from "react";
import { createRoot } from "react-dom";
import styled from "styled-components";
import "./join.css";
import handImg from "../assets/handImg.png";

const Join = () => { 
  const HelloContainer = styled.div`
    margin-bottom: 70px; /* 아이디창과의 거리 */
  `;

  const handleID= () => {
    // 인용 결과 확인 함수
  };

  return (
    <div className="BoxStyle">
      <HelloContainer>
        <h3>
          안녕하세요, <img src={handImg} alt="hand" />
        </h3>
        <h3>회원가입하고 마이페이지 기능을 사용해 보세요!</h3>
      </HelloContainer>
    </div>
  );
};

export default Join;
const root = createRoot(document.getElementById("root"));
root.render(<Join/>);
