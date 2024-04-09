// import AllMovie from '@/components/AllMovie'; // Adjust the path accordingly
// import ActionMovie from '@/components/ActionMovie'; // Adjust the path accordingly
import GetAllMovie from "@/components/GetAllMovie";
import ActionMovies from "@/components/ActionMovie";
import { data } from "autoprefixer";
import AnimeMovies from "@/components/AnimeMovie";
import DramaMovies from "@/components/DramaMovie";
import ScienceFictionMovies from "@/components/ScienceFictionMovie";

const HomePage = () => {
  // const movies = getAllMovies();
  // const allMovies = movies.payload;
  return (
    <div>
      <main className="bg-cover bg-center h-screen filter grayscale-50 bg-[url('https://puui.wetvinfo.com/vcover_hz_pic/0/2knhnaakii18oxj1683882661123/0?imageMogr2/thumbnail/600x|imageMogr2/thumbnail/600x')]">
      </main>
      <GetAllMovie data={data}/>
      <ScienceFictionMovies data={data}/>
      <ActionMovies data={data}/>
      <AnimeMovies data={data}/>
      <DramaMovies data={data}/>
    </div>
  );
};

export default HomePage;
