import React from "react";
import GenresList from "../Constant/GenresList";
import MovieList from "./MovieList";

function GenreMovieList() {
  return (
    <div>
      {GenresList.genere.map(
        (item, index) =>
          index < 20 && (
            <div className="px-4 pt-10 md:px-16 " key={item.id}>
              <h2 className="text-2xl text-white font-bold">{item.name}</h2>
              <MovieList genreId={item.id} index_={index} />
            </div>
          ),
      )}
    </div>
  );
}

export default GenreMovieList;
