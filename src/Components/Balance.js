import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
function Balance() {
  const {transactions}=useContext(GlobalContext);

  
  //map the transaction amount
  const amounts=transactions.map(transactions=>transactions.amount);


  //calaculate all the savings and expenses ab=nd return the balance amount

  const total=amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);
  return (
    <>
      <h1>Your Balance</h1>
      <h1 >{total}</h1>
    </>
  )
}

export default Balance
