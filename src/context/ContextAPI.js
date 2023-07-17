import { createContext } from "react";

//전역으로 사용할 컨텍스트API
const ColorContext = createContext({color:'red'});

console.log(ColorContext);

export default ColorContext

