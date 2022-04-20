import React from 'react';
import '../App.css';

export default function Movie(props) {

const img_api = "https://image.tmdb.org/t/p/w500";

const { title, poster_path, overview, vote_average } = props;

const rickRolled = () => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
}

//opens youtube to rick astley videos
const handleClick = (e) => {
  e.preventDefault();
  rickRolled();
}

  return(
    <div className="movie" onClick={handleClick}>
      <img src={poster_path ? img_api + poster_path : "https://media.istockphoto.com/vectors/image-unavailable-icon-vector-id1206575314?k=20&m=1206575314&s=612x612&w=0&h=vHGhGdWirBbzLm-O15AQuZPnazpHZjtt3vtCBDl-T7g="} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className="average">{vote_average}</span>
      </div>
      <div className="movie-hover">
        <h2>Overview: </h2>
        <p>{overview}</p>
      </div>
    </div>
  );
}