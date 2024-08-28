import "./Movie.css"
import data from "../data"
import MovieDeleteBtn from "./MovieDeleteBtn"
import {useState} from "react"
import DeleteAllBtn from "./DeleteAllBtn"
import RestoreBtn from "./RestoreBtn"


const Movie = () => {
    const [movieList,setMovieList]=useState(data)

    const deleteOneMovie = (idecko)=> {
        const filteredMovies = movieList.filter((oneMovie)=>{
            return oneMovie.id !== idecko
        })
        setMovieList(filteredMovies)
    }

    const deleteAllMovies = ()=>{
        setMovieList([])
    }
    const restoreAllMovie = ()=>{
        setMovieList(data)
    }

    return (
        <section>
        <div className="all-movies">
            {
                movieList.map((oneMovie)=> {
                    const {id,image,title,age,tags,description} = oneMovie

                    return <div className="one-movie" key={id}>
                        <img src={image} alt="" />
                        <h2>{title}</h2>
                        <p>{age}</p>
                        <p>{tags}</p>
                        <p>{description}</p>
                        <MovieDeleteBtn deleteMovie = {()=>deleteOneMovie(id)}></MovieDeleteBtn>
                    </div>
                })
            }
        </div>
        <div className="btnBox">
            <DeleteAllBtn deleteAllMovies = {deleteAllMovies}></DeleteAllBtn>
            <RestoreBtn restore = {restoreAllMovie}></RestoreBtn>
        </div>
        </section>
    )
}
export default Movie