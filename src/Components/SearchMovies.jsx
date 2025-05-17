import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react";
import {Container} from "react-bootstrap";
import SearchResults from "../Templates/SearchResults.jsx";
import axios from 'axios';

const SearchMovies = () => {
    const apiKey = import.meta.env.VITE_OMDB_API_KEY;
    const baseUrl = import.meta.env.VITE_OMDB_API_URL;
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [movieData, setMovieData] = useState(null);

    const Search = (e) => {
        e.preventDefault();
        if (!name.trim()) {
            setError("Unesite naziv filma.");
            return;
        }

        axios.get(`${baseUrl}?apikey=${apiKey}&s=${name}`)
            .then(response => {

                if(response.data.Response === "False"){
                    setError("Nema rezultata.");
                    setMovieData(null);
                } else {
                    setMovieData(response.data.Search);
                    setError("");
                }

            })
            .catch(err => {
                setError(err);
                setMovieData(null);
            });

    }

    return (

        <>
            <Form className="bg-dark p-3 " onSubmit={Search}>
                <Container className="d-flex gap-3 align-items-center">
                    <Form.Group className="d-flex align-items-center col-10">

                        <Form.Control className="w-100" type="text" onChange={e => setName(e.target.value)} placeholder="Search Movie by Name" />
                    </Form.Group>
                    <Button className='col-2' variant="primary"  type="submit">
                        Pretrazi
                    </Button>
                </Container>
            </Form>

            <SearchResults movieData={movieData} error={error}/>
        </>
    );
}

export default SearchMovies;