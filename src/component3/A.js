import { useContext, useRef } from "react";
import UserContext, { UserConsumer } from "../context/ContextAPI2";
import C from "./C";


function A() {

  //useContext훅 - 이용해서 값을 조회 or 값을 제어
  //provider의 value값을 사용할 수 있습니다.
  const {state, action} = useContext(UserContext);

  //ref훅
  const inputRef1 = useRef();
  const inputRef2 = useRef();

  const handleClick = () => {
    //provider값을 외부에서 변경
    //console.log(action);
    action.setUser({id: inputRef1.current.value,
                    name: inputRef2.current.value
                  });

    inputRef1.current.value = '';
    inputRef2.current.value = '';
  }
  

  return (
    <div>

      <input type="text" ref={inputRef1}/>
      <input type="text" ref={inputRef2} />
      <button onClick={handleClick}>Provider값 변경하기</button>

      <div>
        {state.id}<br/>
        {state.name}<br/>
      </div>

      <C/>
      
      {/* 
      <UserConsumer>
        {
          (value)=> <div>
            {value.state.id}<br/>
            {value.state.name}
          </div>
        }
      </UserConsumer>
       */}
    </div>
  )
}

export default A;