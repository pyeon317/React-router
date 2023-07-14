import { Link } from "react-router-dom";

function Home() {

  return (
    <div >
      <h3>메인페이지</h3>
      
      {/* a는 link로 바뀝니다 */}
      <ul>
        <li><Link to="/user">회원페이지</Link></li>
        <li><Link to="/user?id=aaa123&name=홍길동">회원페이지</Link></li>
        
        <li><Link to="/info/1/홍길동">인포페이지</Link></li>
        <li><Link to="/info/2/이순신">인포페이지</Link></li>
        <li><Link to="/info/3/홍길자">인포페이지</Link></li>
      </ul>
    </div>
  )
}

export default Home;
