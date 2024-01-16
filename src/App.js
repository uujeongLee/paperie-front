// src/App.js

import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Search from "./components/search";
import References from "./components/References";

import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 임포트

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const SidebarContainer = styled.div`
  width: 20%;
  background-color: purple;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: orange;
  padding: 20px;
`;

const SearchContainer = styled.div`
  margin-left: 50px; /* 필요에 따라 여백 조절 */
  flex-direction: column;
`;

const ReferencesContainer = styled.div`
  margin-left: 50px; /* 필요에 따라 여백 조절 */
`;

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <Sidebar />
          <ContentContainer>
            <TopBar />
            <SearchContainer><Search/></SearchContainer>

            <ReferencesContainer><References /></ReferencesContainer>
            {/*<References />
              <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/mylist" component={MyList} />
             추가적인 Route들을 필요에 따라 설정
            </Switch> */}
          </ContentContainer>
      </BrowserRouter>
    );
  }
}

export default App;















// import React from "react";
// import styled from "styled-components";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import Home from "./pages/Home";
// import MyList from "./pages/MyList";
// import TopBar from "./components/TopBar";
// import References from "./components/References"; //테이블
// import Search from "./components/search";
// import 'bootstrap/dist/css/bootstrap.min.css'; //부트스트랩 import


// const SidebarContainer = styled.div`
//   width: 100%;
// `;

// const ContentContainer = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
// `;

// class App extends React.Component {
//   render() {
//     return (
//       <BrowserRouter>
//           <Sidebar />
//           <ContentContainer>
//             <TopBar />
//             <Search/>
//             <References />
//             {/*<References />
//               <Switch>
//               <Route exact path="/" component={Home} />
//               <Route path="/mylist" component={MyList} />
//              추가적인 Route들을 필요에 따라 설정
//             </Switch> */}
//           </ContentContainer>
//       </BrowserRouter>
//     );
//   }
// }

// export default App;


// const AppContainer = styled.div`
//   display: flex;
//   height: 100vh;
// `;


// <BrowserRouter>
// <AppContainer>

//   <Sidebar />

//   <ContentContainer>
//     <TopBar />
//     <Search/>
//     {/*<References />
//       <Switch>
//       <Route exact path="/" component={Home} />
//       <Route path="/mylist" component={MyList} />
//      추가적인 Route들을 필요에 따라 설정
//     </Switch> */}
//   </ContentContainer>
// </AppContainer>
// </BrowserRouter>
