/* // cisty javascript - func map
 const vychoziPole = [5,6,7,8,9]

 const vyslednePole = vychoziPole.map((prvek)=>{
   return prvek + 10
 }) //vezme kazdy index z prvniho pole a pricte 10 a ulozi do stejneho indexu v novem poli

 const data = [
   { id: 1, name: 'Vynést koš' },
   { id: 2, name: 'Uklidit kuchyň' },
   { id: 3, name: 'Zajít do fitka' },
   { id: 4, name: 'Nakoupit' },
   { id: 5, name: 'Nakrmit kočku' },
]

 const vysledek = data.map((prvek)=>{
   return prvek.name
 })

 console.log(vysledek)*/

 //cisty javascript end
 /* const data = [
    { id: 1, name: 'Vynést koš' },
    { id: 2, name: 'Uklidit kuchyň' },
    { id: 3, name: 'Zajít do fitka' },
    { id: 4, name: 'Nakoupit' },
    { id: 5, name: 'Nakrmit kočku' },
 ]

 const vymazaneId = 3

 const fitrovanePole = data.filter((prvek)=>{
  return prvek.id != vymazaneId
 })
 console.log(fitrovanePole)*/
 import AllTasks from "./components/AllTasks"
const App = () => {

  return (
    <div className="all-tasks">
      <AllTasks></AllTasks>
    </div>
  )
}
export default App