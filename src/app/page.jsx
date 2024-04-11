// import AllMovie from '@/components/AllMovie'; // Adjust the path accordingly
// import ActionMovie from '@/components/ActionMovie'; // Adjust the path accordingly
import MoviesByGenre from "@/components/MoviesByGenre";
import GetAllMovie from "@/components/GetAllMovie";
// import ActionMovies from "@/components/ActionMovie";
import { data } from "autoprefixer";
// import AnimeMovies from "@/components/AnimeMovie";
// import DramaMovies from "@/components/DramaMovie";
// import ScienceFictionMovies from "@/components/ScienceFictionMovie";

const HomePage = () => {
  const genres = ['Action', 'Anime', 'Drama', 'Science Fiction'];
  // const movies = getAllMovies();
  // const allMovies = movies.payload;
  return (
    <div>
<main className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://puui.wetvinfo.com/vcover_hz_pic/0/2knhnaakii18oxj1683882661123/0?imageMogr2/thumbnail/600x|imageMogr2/thumbnail/600x')", opacity: "0.6" }}>
      </main>
      <GetAllMovie data={data}/>
      {genres.map((genre) => (
        <MoviesByGenre key={genre} genre={genre} />
      ))}
    </div>
  );
};

export default HomePage;
