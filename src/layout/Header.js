import { Fragment } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import styled from './Header.module.css';


function Header () {

  /* useNavigate훅 */
  const nav = useNavigate();//함수반환
  console.log(nav);

  const goHome = () => {
    nav('/'); //홈으로
  }
  const goBack = () => {
    nav(-1); //뒤로
    console.log('back');
  }
  const goFoward = () => {
    nav(+1); //앞으로
    console.log('goFoward');
  }

  return(
    <Fragment>
      <header className={styled.header}>
        <h3>헤더파일</h3>
        <ul className={styled.ul}>
          <li>목록</li>
          <li>목록</li>
          <li>목록</li>
          <li>목록</li>
        </ul>

        <div>
          <button onClick={goHome}>홈으로</button>
          <button onClick={goBack}>뒤로가기</button>
          <button onClick={goFoward}>앞으로가기</button>
        </div>

      </header>
      <section>
        <Outlet/>
      </section>
    </Fragment>
  )
}

export default Header;