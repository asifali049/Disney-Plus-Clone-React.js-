import { React, useState, useEffect, useRef } from "react";
import GlobalApi from "../services/GlobalApi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import MovieCard from "./MovieCard";
import HrMovieCard from "./HrMovieCard";

const screenWidth = window.innerWidth;
function MovieList({ genreId, index_ }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      setMovieList(resp.data.results);
    });
  };
  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  return (
    <div className="relative flex">
      <IoIosArrowBack
        onClick={() => sliderLeft(elementRef.current)}
        className="hidden md:block absolute top-[40%] text-[50px] z-10  cursor-pointer  hover:bg-[#4d4a4ab0] rounded-[50px] "
      />

      <div
        ref={elementRef}
        className="flex  overflow-x-auto py-4 px-4 gap-8 scroll-smooth scrollbar-hide "
      >
        {movieList.map((item) => (
          <>
            {index_ % 3 == 0 ? (
              <HrMovieCard movie={item} />
            ) : (
              <MovieCard movie={item} />
            )}
          </>
        ))}
      </div>

      <IoIosArrowForward
        onClick={() => sliderRight(elementRef.current)}
        className=" hidden md:block absolute top-[40%] text-[50px] z-10 cursor-pointer right-0 hover:bg-[#4d4a4ab0] rounded-[50px] "
      />
    </div>
  );
}

export default MovieList;
