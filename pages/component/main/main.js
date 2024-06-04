import MainStyled from "@/pages/component/main/main.styled";
import Rating from "@/pages/component/rating/rating";
import { useState, createContext } from "react";

export const Context = createContext(null);

const Main = () => {
    const [contextValue, setContextValue] = useState({})

    return (
        <MainStyled>
            <Context.Provider value={{contextValue, setContextValue}}>
                <Rating />
            </Context.Provider>
        </MainStyled>
    )
}

export default Main