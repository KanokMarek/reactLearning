import DecreaseButton from "./components/DecreaseButton"
import IncreaseButton from "./components/IncreaseButton"
import ResetButton from "./components/ResetButton"
import { useState } from 'react'

const App = () => {

  const [value,setValue] = useState(0)
  
  const decreaseOne = ()=>{
      setValue(value-1)
  }
  const increaseOne = ()=>{
    setValue(value + 1)
  }
  const resetValue = ()=>{
    setValue(0)
  }
  return (
    <div className="counter">
      <h1>Pocitadlo</h1>
      <h2>{value}</h2>
      <DecreaseButton decrease={decreaseOne}/>
      <IncreaseButton increase = {increaseOne}/>
      <ResetButton reset = {resetValue}/>
    </div>
  )
}
export default App