import axios from "axios";

const MOVIEBaseUrl = "https://api.themoviedb.org/3";
const api_key = "d0b69de9edd117328e67f3fca25af73b";

//https://api.themoviedb.org/3/trending/all/day?api_key=d0b69de9edd117328e67f3fca25af73b
const getTrendingVideos = () => {
  return axios.get(`${MOVIEBaseUrl}/trending/all/day?api_key=${api_key}`);
};
export default { getTrendingVideos };
