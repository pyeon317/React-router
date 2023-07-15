import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  /* 
    npm install axios 설치
  
  */

  const [data, setData] = useState({});

  const handleClick = () => {
    //fetch의 반환 promise
    //aixos의 반환 promise
    //결국 === 문법이 똑같다.

    const result = axios
      .get(
        "https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json"
      )
      .then((response) => setData(response.data));
  };

  //숙제
  //이 데이터를 화면에 로드될때 axios로 select태그의 옵션으로 처리하세요.
  //https://raw.githubusercontent.com/yopy0817/data_example/master/by.json
  const [data2, setData2] = useState([]); //배열이기 때문에 {}가 아닌 []을 쓴다.

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/by.json")
      .then((response) => {
        const result2 = response.data.map((item) => <option key={item.id}>{item.value}</option>);
        setData2(result2);  
      });
     }, []);

  return (
    <div>
      <h3> 엑시옥스 사용하기 </h3>

      <button onClick={handleClick}>데이터 가져오기 </button>

      <p>
        {data.userId}
        <br />
        {data.userPw}
        <br />
        {data.userName}
      </p>

      <select> {data2}</select>
    </div>
  );
}
export default App;
