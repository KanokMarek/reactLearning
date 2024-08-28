import "./IncreaseButton.css"

const IncreaseButton = (props)=> {
    return (
        <button className = "btn" onClick={props.increase}>Zvysit o jedna</button>
    )
}
export default IncreaseButton