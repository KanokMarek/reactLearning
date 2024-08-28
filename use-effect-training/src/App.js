import { useState } from "react"
import Book from "./Components/Book"

const App = () => {
  
  const [show,setShow]=useState(false)



  return (
      <div>
        <button onClick={()=>setShow(!show)}>Ukaz/Skryj</button>
        {show && <Book/>}
      </div>
    )
  
}
export default App