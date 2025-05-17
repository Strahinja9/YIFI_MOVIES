import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Container} from "react-bootstrap";
import Header from "./Templates/Snippets/Header.jsx";
import SearchMovies from "./Components/SearchMovies.jsx";
import Footer from "./Templates/Snippets/Footer.jsx";

function App() {


  return (
      <div className="d-flex flex-column min-vh-100">
          <Header />
          <div className="flex-grow-1">
              <SearchMovies />
          </div>
          <Footer />
      </div>


  )
}

export default App
