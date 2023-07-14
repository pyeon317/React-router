import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Info from "./component/Info";
import User from "./component/User";
import Board from "./Board";
import BoardContent from "./BoardContent";
import Header from "./layout/Header";
import MyPage from "./component/MyPage";

function App() {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<Home />} />
        {/* 쿼리스트링 */}
        <Route path="/user" element={<User />} />
        {/* 쿼리스트링 - 추가 설정*/}
        <Route path="/info/:a/:b" element={<Info />} />
      </Route>

      {/* board, boardContent 분기 */}
      {/* 
      <Route path="/board" element={<Board/>} />
      <Route path="/board/:num" element={<BoardContent/>} />
      */}

      {/* board의 자식 boardcontent 중첩라우터 */}
      {/* Outlet컴포넌트 추가 */}
      <Route path="/board" element={<Board />}>
        <Route path=":num" element={<BoardContent />} />
      </Route>

      {/* navigate 컴포넌트 */}
      <Route path="mypage" element={<MyPage />} />
    </Routes>
  );
}

export default App;
