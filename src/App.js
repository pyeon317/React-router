import A from "./component3/A";
import B from "./component3/B";
import { UserProvider } from "./context/ContextAPI2";


function App() {

  return (
    <UserProvider>
      <A/>
      <B/>
    </UserProvider>
  )
}

export default App;