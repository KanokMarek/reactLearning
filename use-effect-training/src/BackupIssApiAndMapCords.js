// import { useState, useEffect} from "react"

// const App = () => {
  
//   const url ="http://api.open-notify.org/iss-now.json"

//   const [latitude,setLatitude]=useState(0)
//   const [longitude,setLongitude]=useState(0)
//   const [urlMap,setUrlMap]=useState("")

  

//   const getCoordinates= async()=>{
//     const response = await fetch(url)
//     const data = await response.json()
//     setLatitude(data["iss_position"]["latitude"])
//     setLongitude(data["iss_position"]["longitude"])
//     setUrlMap(`https://mapy.cz/turisticka?x=${data["iss_position"]["longitude"]}&y=${data["iss_position"]["latitude"]}&z=11`)
//   }
//   useEffect(()=>{
//     getCoordinates()
//   },[])
    
//   return (
//     <div>
//       <h1>Latitude: {latitude}</h1>  
//       <h1>Longitude: {longitude}</h1>  
//       <h3><a href={urlMap} target="_blank">Odkaz do map</a></h3>
//     </div>
//   )
// }
// export default App