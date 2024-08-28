// import { useState, UseEffect, useEffect} from "react"

// const App = () => {
  
//   const [value,setValue]=useState(0)
//   const [test,setTest]=useState(0)

//   useEffect(()=> {
//     const button = document.querySelector(".btn")
//     if(value >= 1) {
//       button.textContent = `Klik cislo ${value}`
//     }else {
//       button.textContent = "Klikni"
//     }
//   },[value])  //podminky, spusti se jen kdyz se zmeni hodnota v zavorce

//   useEffect(()=>{
//     document.title = `Novy titulek ${test}`
//   },[test])
  
//   return (
//     <div>
//       <h1>UseEffect</h1>
//       {console.log("Ja jsem return")}
//       <p>{value}</p>
//       <button className="btn" onClick={()=>setValue(value+1)}>Klikni</button>
//       <button className="btn-test" onClick={()=>setTest(test + 1)}>Titulek</button>
//     </div>
//   )
// }
// export default App