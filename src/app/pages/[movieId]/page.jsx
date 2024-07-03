import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
const defaultMoviepic = "../assets/default pic.jpg";
import "@fortawesome/fontawesome-svg-core/styles.css";
library.add(fas);
import { getMovieById } from "@/services/movie.service";
import moment from "moment";
const MovieDetailPage = async ({ params }) => {
  const movieData = await getMovieById(params.movieId);
  console.log("get movie by title: ", movieData.payload.movie_title);

  const data = movieData.payload; // const movieData = await getMovieById(data.movieId);
  const datetime = data.posted_at;
  const formatdatetime = moment(datetime).format("MM DD, YYYY, h:mm:ss A");
  return (
    <main className="w-auto " key={data.id}>
      <div class="pt-28 h-auto">
        <div class=" mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row -mx-4">
            <div class="w-[65%] px-10">
              <div class="rounded-lg pb-10">
                <img
                  class="w-full h-full object-cover"
                  src={data.image ? data.image : defaultMoviepic}
                  alt={data.movie_title}
                />
              </div>
            </div>
            <div class="w-[35%] px-4">
              <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                {data.movie_title}
              </h2>
              <p class="text-gray-600 dark:text-gray-300 text-sm mb-1">
                {data.runtime} minutes
              </p>
              <div class="flex">
                <div class="mr-4">
                  <p class="font-bold text-gray-700 dark:text-gray-300 ">
                    {data.genre}
                  </p>
                </div>
              </div>
              <div class="mb-1">
                <div class="flex items-center">
                  {movieData.payload.rating >= 5 ? (
                    <>
                      <FontAwesomeIcon
                        className="text-amber-500"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-amber-500"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-amber-500"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-amber-500"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-amber-500 bg"
                        icon={faStar}
                      />
                    </>
                  ) : movieData.payload.rating >= 4 ? (
                    <>
                      <FontAwesomeIcon
                        className="text-amber-500"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-amber-500"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-amber-500"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-amber-500"
                        icon={faStar}
                      />
                      <FontAwesomeIcon icon={faStar} />
                    </>
                  ) : movieData.payload.rating >= 3 ? (
                    <>
                      <FontAwesomeIcon
                        className="text-amber-500"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-amber-500"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-amber-500"
                        icon={faStar}
                      />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </>
                  ) : movieData.payload.rating >= 2 ? (
                    <>
                      <FontAwesomeIcon
                        className="text-amber-500"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-amber-500"
                        icon={faStar}
                      />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </>
                  ) : movieData.payload.rating >= 1 ? (
                    <>
                      <FontAwesomeIcon
                        className="text-amber-500"
                        icon={faStar}
                      />
                      <FontAwesomeIcon className="" icon={faStar} />
                      <FontAwesomeIcon className="" icon={faStar} />
                      <FontAwesomeIcon className="" icon={faStar} />
                      <FontAwesomeIcon className="" icon={faStar} />
                    </>
                  ) : null}
                </div>
              </div>

              <div>
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2 mt-[10%]">
                  {data.movie_title}
                </h2>

                <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {data.description}
                </p>

                <p class="font-bold text-gray-700 dark:text-gray-300 mt-[10%]">
                  {formatdatetime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="overflow-x-scroll flex scroll-py-0 no-scrollbar pt-28">
          <div
            key={data.id}
            className="rounded-sm bg-white w-[20rem] shadow-xl p-5 flex-shrink-0 mr-3">
            <figure>
              <img src={data.image} alt={data.image} />
            </figure>
            <div className="">
              <h1 className="card-title text-black text-3xl line-clamp-1">
                {data.movie_title}
              </h1>
              <p className="text-gray-700 text-xl line-clamp-2">{params.description}</p>
            </div>
          </div>
        
      </div> */}
    </main>
  );
};

export default MovieDetailPage;
