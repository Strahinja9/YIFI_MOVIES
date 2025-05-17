import {Container} from "react-bootstrap";
import MovieCard from "./Snippets/MovieCard.jsx";


const SearchResults = ({movieData, error}) => {
    console.log(movieData);

    return (
        <div className="bg-dark">
            <Container className="d-flex flex-wrap gap-3 justify-content-center">
                {error ? <p className="alert alert-danger">{error}</p> : null}

                {movieData && movieData.length > 0 ? (
                    movieData.map(movie => (
                        <MovieCard key={movie.imdbID} movieData={movie} />
                    ))
                ) : (
                    !error
                )}
            </Container>

        </div>
    )
}


export default SearchResults;