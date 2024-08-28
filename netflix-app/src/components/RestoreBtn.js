import "./RestoreBtn.css"

const RestoreBtn =(props)=>{
    return (
        <button onClick={props.restore} className="restore-btn">Obnov filmy</button>
    )
}
export default RestoreBtn