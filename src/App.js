import React from "react";
import Head from "./Components/Head";
import './App.css';
import Balance from "./Components/Balance";
import IncomeExpenses from "./Components/IncomeExpenses";
import TransactionList from "./Components/TransactionList";
import AddTransaction from "./Components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
   <GlobalProvider>
     <Head/>
     <div className="container">
     <Balance/>
     <IncomeExpenses/>
     <TransactionList/>
     <AddTransaction/>
     </div>
     </GlobalProvider>
  );
}

export default App;
