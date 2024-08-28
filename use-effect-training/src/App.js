import { useState, UseEffect, useEffect} from "react"

const App = () => {
  
  const [value,setValue]=useState(0)
  useEffect(()=> {
    const button = document.querySelector(".btn")
    if(value >= 1) {
      button.textContent = `Klik cislo ${value}`
    }else {
      button.textContent = "Klikni"
    }
  }, [])
  
  return (
    <div>
      <h1>UseEffect</h1>
      {console.log("Ja jsem return")}
      <p>{value}</p>
      <button className="btn" onClick={()=>setValue(value+1)}>Klikni</button>
    </div>
  )
}
export default App