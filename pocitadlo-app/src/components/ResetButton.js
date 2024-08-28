import "./ResetButton.css"

const ResetButton = (props) => {
    return (
        <button className = "btn" onClick ={props.reset}>Vynulovat</button>
    )
}
export default ResetButton