import "./OneMovieSlider.css"
import data from "../data"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import {useState} from "react"
import React from 'react'

const OneMovieSlider = () => {
const [index, setIndex] = useState(0)
const {id,image,title,description} = data[index]

const indexValidate = (index) => {
  if (index < 0){
    return data.length -1
  } else if (index > data.length-1) {
    return 0
  }else {
    return index
  }
}


const nextMovie = () => {
  setIndex((index) => {
    return indexValidate(index+1)
  }
  )
}
const PreviousMovie = () => {
     setIndex((index) => {
       return indexValidate(index-1)
     }
     )
  }


  return (
    <div className="oneMovie" key={id}>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={PreviousMovie}>
      <FaArrowLeft />
      </button>
      <button onClick={nextMovie}>
      <FaArrowRight />
      </button>
    </div>
  )
}

export default OneMovieSlider
