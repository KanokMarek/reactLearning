import "./Example.css"
import {useState} from 'react'

const Example = () => {
   /* //destructuring - cisty javascript zacatek
    const vychoziPole = ["David","Hermiona","Harry"]
    //const student1 = vychoziPole[0]
    //const student2 = vychoziPole[1]
    //const student3 = vychoziPole[2]

    const [student1,student2,student3] = vychoziPole //kratsi zapis = destructuring
    console.log(student1,student2,student3)*/

    //cisty javascript - konec
    const[title,setTitle] = useState("Muj prvni title")
    const[buttonText, setButtonText]= useState("Zmen muj text")
        
    const buttonHandler = () => {
        setTitle("Muj prvni text")
    }
    const buttonHandler2 = ()=>{
        setTitle("Ahoj jak se mas troubo?")
    }
    const buttonHandler3 = ()=>{
        setButtonText("Huste co?")
    }
    const deleteAll = ()=>{
        setTitle("")
    }
    return (
        <div className="text-button-changer">
            <h1>{title}</h1>
            <button type = "button" onClick={buttonHandler}>Zmenit title</button>
            <button onClick={buttonHandler2}>Pozdrav mě v titlu</button>
            <button onClick={deleteAll}>smaz title</button>
            <button onClick={buttonHandler3}>{buttonText}</button>
        </div>
    )
}
export default Example