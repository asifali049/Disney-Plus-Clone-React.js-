import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function HrMovieCard({ movie }) {
  return (
    <section className=" hover:border-3 rounded-lg border-gray-500 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
      <img
        src={IMAGE_BASE_URL + movie.backdrop_path}
        className=" rounded-lg w-full h-45 object-cover mb-2 "
        alt=""
      />
      <h2 className=" min-w-90 text-white  ">{movie.title}</h2>
    </section>
  );
}

export default HrMovieCard;
