



const MovieCard = ({movieData}) => {
    console.log(movieData);
    return (
        <div className="card my-3" style={{width: "18rem"}}>
            <img src={movieData.Poster} style={{height: "auto"}} className="card-img-top" alt={movieData.Title}/>
            <div className="card-body">
                <h5 className="card-title">{movieData.Year}</h5>
                <p className="card-text">{movieData.Title}</p>

            </div>
        </div>
    )
}

export default MovieCard;