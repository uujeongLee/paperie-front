// src/App.js

import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import MyList from "./pages/MyList";
import TopBar from "./components/TopBar";
import Hello from "./components/Hello"; //Hello 컴포넌트를 가져오도록 수정
import References from "./components/References"; //테이블
import Search from "./components/search";


import 'bootstrap/dist/css/bootstrap.min.css'; //부트스트랩 import

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const SidebarContainer = styled.div`
  width: 100%;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AppContainer>

          <Sidebar />

          <ContentContainer>
            <TopBar />
            <Search/>
            <References />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/mylist" component={MyList} />
              {/* 추가적인 Route들을 필요에 따라 설정 */}
            </Switch>
          </ContentContainer>
        </AppContainer>
      </BrowserRouter>
    );
  }
}

export default App;

















// // src/App.js

// import React from "react";
// import styled from "styled-components";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Header from "./components/Header";
// import TopBar from "./components/TopBar";
// import yujeong from "./components/Yujeong";

// import Sidebar from "./components/Sidebar";
// import Home from "./pages/Home";
// import MyList from "./pages/MyList";
// import LikedList from "./pages/LikedList.js";
// import Setting from "./pages/Setting";

// const AppContainer = styled.div`
//   display: flex;
//   flex-direction: column; /* 컨텐츠를 세로로 배열하기 위해 */
//   height: 100vh;
// `;

// const Center = styled.div`
//   flex: 1; /* Center가 남은 공간을 모두 차지하도록 설정 */
//   display: flex;
// `;

// class App extends React.Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <AppContainer>
//           <Header />

//           <Center>
//             <Sidebar />
//             <p>안뇽 나는 유정이야</p>
//             <yujeong />
//             <Switch>
//               <Route exact path="/" component={Home} />
//               <Route path="/mylist" component={MyList} />
//               {/* <Route path="/likedlist" component={LikedList} />
//               <Route path="/setting" component={Setting} /> */}
//             </Switch>
//           </Center>
//         </AppContainer>
//       </BrowserRouter>
//     );
//   }
// }

// export default App;


















// // src/App.js

// import React from "react";
// import styled from "styled-components";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import Home from "./pages/Home";
// import MyList from "./pages/MyList";
// import TopBar from "./components/TopBar";

// const AppContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
// `;

// const Center = styled.div`
//   display: flex;
//   flex: 1;
// `;

// class App extends React.Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <AppContainer>
//           <TopBar />
//           <Center>

//             <Sidebar />
//             <p>하이</p>
//             <Switch>
//               <Route exact path="/" component={Home} />
//               <Route path="/members" component={MyList} />
//             </Switch>
//           </Center>
//         </AppContainer>
//       </BrowserRouter>
//     );
//   }
// }

// export default App;
