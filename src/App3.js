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

    const result = axios.get(
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

     //async & await
     //1. async안에서 await을 사용할 수 있다.
     //2. function에 async를 붙이면 리턴이 프로미스가 됩니다.
     //3. 리턴이 promise라면 await을 사용할 수 있고, then을 생략할 수 있음.
     const handleClick2 = async () => {

/* 
      axios.get( "https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json" )
      .then( data => {
        console.log(1)
        
        axios.get( "https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json" )
        .then( data => {
          console.log(3)
          
          axios.get( "https://raw.githubusercontent.com/yopy0817/data_example/master/by.json" )
          .then( data => {
            console.log(5)
          
          })
        })
      })

      console.log(2);
      console.log(4);
      console.log(6);
 */

      const result = await axios.get( "https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json" );
      //axios.get의 리턴 자체가 promise임 console.log(axios.get( "http~)) 하면 프로미스로 나옴
      console.log(result); //1

      const result2 = await axios.get( "https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json" );;
      console.log(result2); //2

      const result3 = await axios.get( "https://raw.githubusercontent.com/yopy0817/data_example/master/by.json" );;
      console.log(result3); //3



     }






  return (
    <div>
      <h3> 엑시옥스 사용하기 </h3>

      <button onClick={handleClick}>데이터 가져오기 </button>
      <button onClick={handleClick2}>이싱크확인하기</button>

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

/* ------------------------------------------------------------------------------------------- */
/*
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
 
    npm install axios 설치
  
  

  const [data, setData] = useState({});

  const handleClick = () => {
    //fetch의 반환 promise
    //aixos의 반환 promise
    //결국 === 문법이 똑같다.

    const result = axios.get(
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
        {data.userId}<br />
        {data.userPw}<br />
        {data.userName}
      </p>

      <select> {otp.map(item => <option key = {.key} value={item.value}>{item.value}</option>)}</select>
    </div>
  );
}
export default App;
*/

