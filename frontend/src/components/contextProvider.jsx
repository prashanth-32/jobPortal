import { createContext, useState } from "react";

export const context = createContext();

const ContextProvider = ({children}) =>{
    const [show,setShow] = useState(false);
    const [text,setText] = useState('');
    const [loc,setLoc] = useState('');
    const [type,setType] = useState('');
    const [salMin,setSalMin] = useState(0);
    const [salMax,setSalMax] = useState(50);
    return (
        <context.Provider value={{show,setShow,text,setText,loc,setLoc,type,setType,salMin,setSalMin,salMax,setSalMax}}>
            {children}
        </context.Provider>
    )
}
export default ContextProvider;
