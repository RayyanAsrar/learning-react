import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards.jsx';

function App() {

 let [counter,setCount]=useState(0)

  let addCounter=()=>{
    if (counter>=20) {
      return
    } else {
      // the below code will code will increment by 1 ( aesa kyu hua malik ? = due to the batching behaviour of REACT)
      setCount(counter+1)
      setCount(counter+1)
      setCount(counter+1)
      setCount(counter+1)
      setCount(counter+1)

    // the below code will increment by 5 ( aesa kyu hua malik ? = kyu ke is operator se direct variable update ho rha ( not a good approach))
      // better to use a call back func and receive the value in its param 
    // setCount(++counter)
      // setCount(++counter)
      // setCount(++counter)
      // setCount(++counter)
      // setCount(++counter)
      
    }
  }
  let remCounter=()=>{
    if (counter<=0) {
      return
    } else {
      
      setCount(counter-1)
      setCount(counter-1)
      setCount(counter-1)
      setCount(counter-1)
      setCount(counter-1)
     
      // setCount(--counter)
      // setCount(--counter)
      // setCount(--counter)
      // setCount(--counter)
      // setCount(--counter)
    }
  }
let details={name:"rayyan",class:"XI"}
// let myArr=[1,2,3]
  return (
    <>
     <h1>  Hemlo Ji </h1>
     <h2>Counter:{counter}</h2>
     <button onClick={addCounter}>Add Counter</button>
     <button onClick={remCounter}>Remove  Counter</button>
     <h1 className='text-2xl font-medium bg-green-400 p-4 rounded-2xl m-2' >mai tailwind CSS hun </h1>
     <Cards heading="mai pheli heading hun " paragraph="mai paragrpah hun pheli heading ka" details={details} myArr={[1,2,3]} />
     <Cards heading="mai dusri heading hun " paragraph="mai paragrpah hun dusri heading ka" details={details} myArr={[1,2,3]}/>
    </>
  )
}

export default App
