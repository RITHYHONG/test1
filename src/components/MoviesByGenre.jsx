// Import the service function that fetches movies by genre
import { getMoviesByGenre } from "@/services/movie.service";
import Link from "next/link";
const defaultMoviepic = "../assets/default pic.jpg"

const MoviesByGenre = async ({ genre }) => {
  const movies = await getMoviesByGenre(genre);
  console.log(`${genre} Movies:`, movies);

  return (
    <main className="px-10">
      <h1 className="py-5 text-3xl">{genre} Movies</h1>
      <div className="overflow-x-scroll flex scroll-py-0 no-scrollbar">
        {movies.payload.map((data) => (
          <Link
            key={data.id}
            href={`/pages/${data.movie_id}`}
            className="rounded-sm bg-white w-[20rem] shadow-xl p-5 flex-shrink-0 mr-3">
             <figure>
              <img className="h-[60%] w-[100%]" src={data.image ? data.image : defaultMoviepic} alt="Shoes" />
            </figure>
            <div className="">
              <h1 className="card-title text-black text-3xl line-clamp-1">
                {data.movie_title}
              </h1>
              <p className="text-gray-700 text-xl line-clamp-2">{data.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default MoviesByGenre;
