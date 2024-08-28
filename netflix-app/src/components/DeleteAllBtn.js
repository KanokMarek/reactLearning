import "./DeleteAllBtn.css"

const DeleteAllBtn = (props) =>{
    return (
        <button onClick={props.deleteAllMovies} className="delete-all-btn">Vymazat vse</button>
    )
}
export default DeleteAllBtn