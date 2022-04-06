import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Movie from './components/Movie';
import { Navigate } from 'react-router-dom';

function App() {
  const api_key = process.env.REACT_APP_API_KEY;

  const featured_api = `http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=1`;
  const search_api = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=`;

  const [movies, setMovies] = useState([]);

  const [search, setSearch] = useState('');

  useEffect (() => {
    axios.get(featured_api)
    .then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const handleSubmit = (event) => {
    //prevent page from refreshing
    event.preventDefault();
    if (search) {
      axios.get(search_api + search)
      .then((response) => {
        setMovies(response.data.results);
      });
    }
    setSearch('');
  }
  
  return (
    <>
      <header> 
      <nav>
        <div><a className="logo" href="/">Wumboflix</a></div>
        <ul className="links">
          <li><a href="/">Home</a></li>
          <li><form onSubmit={handleSubmit}><input className="search" type="search" placeholder="Search..." value={search} onChange={(e) => {setSearch(e.target.value)}}/></form></li>
        </ul>
      </nav>
      </header>
      <div className="movie-container">  
        {movies.map((movie => <Movie key={movie.id} {...movie} />))}
      </div>
    </>

  );
}

export default App;
