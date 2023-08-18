import { useEffect } from "react"



function App() {

  useEffect(()=>{
    fetch('http://localhost:8181/api/v1/getInfo',{
      method : "post",
				headers : {"Content-Type": "application/json"},
				body : JSON.stringify({"num" : "1", "name": "이순신"} )
			})
			.then( response => response.json() )
			.then( t => console.log(t) )
  },[]);


  return (
    <div>
      .....
    </div>
  )
}
export default App