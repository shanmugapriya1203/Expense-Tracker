import React from "react";
import { createContext,useReducer } from "react";
import AppReducer from "./AppReducer";


const initialState={
    transactions:[
       
    ]
}
//Create Context
export const GlobalContext=createContext(initialState);
//Provider Component

export const GlobalProvider=({children})=>{
    const[state,dispatch]=useReducer(AppReducer,initialState);

    //Actions

    function deleteTransaction(id){
        dispatch({
            type:"Delete_transaction",
            payload:id
        })
    }
    function AddTransaction(transactions){
        dispatch({
            type:"Add_transaction",
            payload:transactions
        });
    }

    return(<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        AddTransaction
    }}>
        {children}
        </GlobalContext.Provider>);

}