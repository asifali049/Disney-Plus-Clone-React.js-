import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../services/GlobalApi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const screenWidth = window.innerWidth;

function Slider() {
  const [movieslist, setMovieslist] = useState([]);
  const elementRef = useRef();

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos().then((resp) => {
      console.log(resp.data.results);
      setMovieslist(resp.data.results);
    });
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  return (
    <div className="">
      <IoIosArrowBack
        className="hidden md:block text-[30px] absolute mx-8 mt-42.5 cursor-pointer "
        onClick={() => sliderLeft(elementRef.current)}
      />
      <IoIosArrowForward
        className="hidden md:block text-[30px] absolute mx-8 mt-42.5 cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto w-full px-16 py-4 space-x-4 scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {movieslist.map((item) => (
          <img
            src={IMAGE_BASE_URL + item.backdrop_path}
            alt={item.title || item.name}
            className="min-w-full md:h-85 rounded-md object-cover mr-5 object-top-left hover:border-4 border-gray-500 transition-all duration-100 ease-in-out "
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
