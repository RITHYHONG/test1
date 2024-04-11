import { getAllMovies } from "@/services/movie.service";
const defaultMoviepic = "../assets/default pic.jpg"
const GetAllMovie = async () => {
  const movie = await getAllMovies();
  console.log("MOvies..............", movie);

  return (
    <main className="px-10">
      <h1 className="py-5 text-3xl">All Movies</h1>
      <div className="overflow-x-scroll flex scroll-py-0 no-scrollbar ">
        {movie.payload.map((data) => (
          <a
            key={data.id}
            href={`/pages/${data.movie_id}`}
            className="rounded-sm bg-white w-[20rem] shadow-xl p-5 flex-shrink-0 mr-3"
          >
            <figure>
              <img className="h-[60%] w-[100%]" src={data.image ? data.image : defaultMoviepic} alt="Shoes" />
            </figure>
            <div className="">
              <h1 className="card-title font-bold text-black text-xl line-clamp-1 ">
                {data.movie_title}
              </h1>
              <p className="text-gray-700 text-lg line-clamp-2">
                {data.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
};

export default GetAllMovie;
