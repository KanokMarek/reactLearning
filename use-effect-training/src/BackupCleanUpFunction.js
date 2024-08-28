// import { useState, useEffect} from "react"

// const App = () => {
//   const [windowSize,setWindowSize] = useState(window.innerWidth)
  
//   const sizeControl = () => {
//     setWindowSize(window.innerWidth)
//   }

//   useEffect(()=>{
//     console.log("Ja jsem useEffect")
//     window.addEventListener("resize",sizeControl)
//     return () =>{ //Nespousti se pri prvnim nacteni stranky!!!!!Jakmile se useEffect vola podruhe, retur se pousti prvni a nasledne zacatek useEffectu. 
//       console.log("Ja jsem uklizec")
//       window.removeEventListener("resize",sizeControl)
//     }
//   })
//   return (
//     <div>
//       <h1>Sirka okna</h1>
//       <h2>{windowSize}</h2>
//     </div>
//   )
// }
// export default App