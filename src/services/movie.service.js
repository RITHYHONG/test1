// movie.service.js

const baseUrl = 'https://movie-api-get-only-bmc3.vercel.app/api';

export const getAllMovies = async () => {
  const response = await fetch(`${baseUrl}`);
  const data = await response.json();
  return data;
};

export const getMovieById = async (movieId) => {
  const response = await fetch("https://movie-api-get-only-bmc3.vercel.app/api/"+movieId);
  const data = await response.json();
  return data;
};

export const getMoviesByGenre = async (genre) => {
  const response = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api?genre=${genre}`);
  const data = await response.json();
  return data;
};

// export const getActionMovies = async () => {
//   const response = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api?genre=Action`);
//   const data = await response.json();
//   return data;
// };

// export const getDramaMovies = async () => {
//   const response = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api?genre=Drama`);
//   const data = await response.json();
//   return data;
// };

// export const getAnimeMovies = async () => {
//   const response = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api?genre=Anime`);
//   const data = await response.json();
//   return data;
// };

// export const getScienceFictionMovies = async () => {
//   const response = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api?genre=Science Fiction`);
//   const data = await response.json();
//   return data;
// };