// src/App.js

import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Search_article from "./components/search_article";
import References from "./components/References";
import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 임포트
import Join from "./pages/Join.js";

// const SidebarContainer = styled.div`
//   width: 20%;
//   background-color: purple;
// `;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #FAFBFF;    /*배경색: 연한 하늘색*/
  /*background-color: #F5F6FB;*/
  padding: 20px;
`;

const SearchContainer = styled.div`
  margin-left: 70px; /* 사이드바와의 거리 */
  flex-direction: column;
`;

const ReferencesContainer = styled.div`
  margin-left: 70px; /* 사이드바와의 거리 */
`;

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <Sidebar />
          <ContentContainer>
            <TopBar />
            <SearchContainer> 
              <Search_article/> 
            </SearchContainer>
            <ReferencesContainer> 
              <References /> 
            </ReferencesContainer>
            {/*
              <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/mylist" component={MyList} />
             추가적인 Route들을 필요에 따라 설정
            </Switch> */}
            <Switch>
            <Route path="/join" component={Join} />
            </Switch>
          </ContentContainer>
      </BrowserRouter>
    );
  }
}

export default App;

