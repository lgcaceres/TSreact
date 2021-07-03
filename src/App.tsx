import React, { useState } from 'react'
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import calculate from './calculate'
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
  //const [current, setCurrent] = useState<string>('0');


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



    console.log(total, next, operation);

  }



  return (
    <div className="component-app">
      <Display value={total ?? next ?? '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  )
}

export default App;
