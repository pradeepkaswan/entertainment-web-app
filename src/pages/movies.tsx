import { Show } from "../types";
import iconSearch from "../assets/icon-search.svg";

type MoviesProps = {
  shows: Show[];
};

const Movies: React.FC<MoviesProps> = () => {
  return (
    <div className="px-4 py-6 flex flex-col gap-6 | md:px-0 md:py-8 md:gap-8">
      <div className="flex items-center justify-center">
        <img src={iconSearch} alt="Search icon" className="h-6 w-6 mr-4 | md:h-8 md:w-8 md:mr-6" />
        <input
          type="search"
          placeholder="Search for movies"
          className="bg-transparent border-none text-[16px] font-light w-full | md:text-heading-m"
        />
      </div>
      <div>
        <h2 className="text-[20px] font-light md:text-heading-l">Movies</h2>
      </div>
    </div>
  );
};

export default Movies;
