import { createContext } from "react";

export const Contexto = createContext()

const { Provider } = Contexto;

const MyProvider = ({ children }) => {


    return <Provider value={{}}>{children}</Provider>
}

export default MyProvider