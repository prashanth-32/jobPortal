import { createContext, useState } from "react";

export const context = createContext();

const ContextProvider = ({children}) =>{
    const [show,setShow] = useState(false);
    const [text,setText] = useState('');
    const [loc,setLoc] = useState('');
    const [type,setType] = useState('');
    return (
        <context.Provider value={{show,setShow,text,setText,loc,setLoc,type,setType}}>
            {children}
        </context.Provider>
    )
}
export default ContextProvider;