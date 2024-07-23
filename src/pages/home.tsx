import { Show } from "../types";
import iconSearch from "../assets/icon-search.svg";

type HomeProps = {
  shows: Show[];
  onToggleBookmark: (showTitle: string) => void;
};

const Home: React.FC<HomeProps> = ({ shows }) => {
  return (
    <div className="px-4 py-6 flex flex-col gap-6 | md:px-0 md:py-8 md:gap-8">
      <div className="flex items-center justify-center">
        <img src={iconSearch} alt="Search icon" className="h-6 w-6 mr-4 | md:h-8 md:w-8 md:mr-6" />
        <input
          type="search"
          placeholder="Search for movies or TV series"
          className="bg-transparent border-none text-[16px] font-light w-full | md:text-heading-m"
        />
      </div>
      <div>
        <h2 className="text-[20px] font-light md:text-heading-l">Trending</h2>
        {shows.map((show) => (
          <h3>{show.title}</h3>
        ))}
      </div>
      <div>
        <h2 className="text-[20px] font-light md:text-heading-l">Recommended for you</h2>
      </div>
    </div>
  );
};

export default Home;
