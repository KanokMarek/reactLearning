// import { useState, useEffect} from "react"
// // Multiple returns
// const url = "http://api.open-notify.org/iss-now.json"

// const App = () => {
  
//   const [loading,setLoading]=useState(true)
//   const [latitude,setLatitude]=useState("")
//   const [longitude,setLongitude]=useState("")
  
//   useEffect(()=>{
//     fetch(url)
//     .then((response)=>response.json())
//     .then((data)=> data["iss_position"])
//     .then((position)=>{
//       setLatitude(position["latitude"])
//       setLongitude(position["longitude"])
//     })
//     setLoading(false)
//   }, [])

//   if (loading){
//     return <h2>Nacita se stranka</h2>
//   }

//   return (
//       <div>
//         <h1>Zemepisna sirka</h1>
//         <p>{latitude}</p>
//         <h1>Zemepisna delka</h1>  
//         <p>{longitude}</p>
//       </div>
//     )
  
// }
// export default App