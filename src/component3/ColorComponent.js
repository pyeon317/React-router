import ColorContext from "../context/ContextAPI";

function ColorComponent() {

  const colorHandler = (value) => {/* 주석내용과 같은 의미 */
    return <div>컬러컴포넌트 value:{value.color}</div>;
  }

  return (
    /* consumer에서는 컨텍스트API의 사용, 값을 전달받은 함수를 하나 선언하고, 첫번째 매개변수로 받습니다. */
    <ColorContext.Consumer>
      
      {/* 
        (value) => (<div>컬러컴포넌트 value:{value.color}</div>)
       */}
       
       {colorHandler}
    </ColorContext.Consumer>
  );
}

export default ColorComponent
