import "./AllTasks.css"
import data from "../data"
import {useState} from "react"

const AllTasks = () => {
    const[myTask,setMyTask] = useState(data)

    const tasksHandler = (id) => {
        const filteredTasks = myTask.filter((oneTask)=>{
            return oneTask.id !== id
        })
        setMyTask(filteredTasks)
    }
    const deleteAll = () => {
        setMyTask([])
    }
    return (
        <div>
            {
                myTask.map((oneTask)=>{
                    const {id,name} = oneTask
                    return <div className = "one-task" key = {id}>
                        <h4>{name}</h4>
                        <button onClick = {()=>tasksHandler(id)}>Vymazat</button>
                    </div>
                })
            }
            <button className="main-button" onClick={deleteAll}>Vse vymazat</button>
        </div>
    )
}
export default AllTasks