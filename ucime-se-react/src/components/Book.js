import "./Book.css"
import OrderButton from "./OrderButton"


const Book = (props) => {
    return (
        <div className="one-book">
            <img src={props.myimage} alt="" />
            <h2 className="main-heading">{props.mytitle}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolore aliquid totam. Exercitationem modi deleniti eaque et illum aliquid aspernatur repellendus, fugit iure, reiciendis earum pariatur, perferendis obcaecati cum. Iste?</p>
            <OrderButton />
        </div>
    )
}


export default Book