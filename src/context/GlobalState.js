import React, {createContext, useReducer, useEffect} from "react";
import AppReducer from "./AppReducer";

const initialState = {
    favorites: []
};

export const GlobalContext = createContext(initialState);



export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const addFavorites = (movie) => {
        dispatch({ type: "ADD_TO_FAVORITES", payload: movie});
    };

    return (
        <GlobalContext.Provider value={{favorites: state.favorites, addFavorites}}>
            {props.children}
        </GlobalContext.Provider>
    )
}