import React, { useEffect, useState } from 'react'
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import calculate from '../logic/calculate'
import './App.css'

interface states {
  total: string | null;
  next: string | null;
  operation: string | null;
}


const App: React.FC = () => {

  const [total, setTotal] = useState<string | null>(null);
  const [next, setNext] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);



  const handleClick = (buttonName: string) => {

    console.log(buttonName);

    const initialStates: states = {
      total: total,
      next: next,
      operation: operation,
    }
    const result = calculate(initialStates, buttonName);
    if (result.total !== undefined) {
      setTotal(result.total);
    }
    if (result.next !== undefined) {
      setNext(result.next);
    }

    if (result.operation !== undefined) {
      setOperation(result.operation);
    }
  }


  return (
    <div className="component-app">
      <Display value={next ?? total ?? '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  )
}

export default App;
