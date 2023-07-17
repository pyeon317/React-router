import { Children, createContext, useState } from "react";

//1.
const UserContext = createContext({
  state : {id:'초기값:', name:''},
  action : {
    setUser: ()=> {}
  }
});

//2.Provider함수 선언
const UserProvider = ({children}) => {

  const [user,setUser] = useState({id:'aaa',name:'홍길동'});

  const value = {
    state : user,
    action : {setUser}
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}
//3.Consumer함수 반환
const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer};

export default UserContext;