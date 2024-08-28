// import { useState, useEffect} from "react"
// // short circuit evaluation

// const App = () => {
//   const value = 0
//   const value2 = 0

//   const result1 = value && value2
//   //prvni je true a druhe taky tak vrati druhou hodnotu
//   //prvni je false a druhe jakekoliv tak vrati prvni hodnotu

//   const result2 = value || 888
//   console.log(result2)

// //prvni je true a druhe jakekoliv vrati prvni
// //prvni je false tak vraci druhou hodnotu
// const error = true  

//   return (
//       <div>
//         <h1>{value2 || "defaultni text"}</h1>
//         <h1>{value2 && "tajny nadpis"}</h1>
//         {
//           error ? <p>Chyba</p>:<h2>Obsah stranky</h2> //ternalni operator
//         }

//       </div>
//     )
  
// }
// export default App