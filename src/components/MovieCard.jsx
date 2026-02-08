import React from "react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
  return (
    <div className="flex  ">
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        className="rounded-lg  min-w-40 h-60 
        hover:border-3 border-gray-500 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
        alt=""
      />
    </div>
  );
}

export default MovieCard;
