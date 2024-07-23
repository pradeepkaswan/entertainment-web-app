import logo from "../assets/logo.svg";
import iconHome from "../assets/icon-nav-home.svg";
import iconMovies from "../assets/icon-nav-movies.svg";
import iconTVSeries from "../assets/icon-nav-tv-series.svg";
import iconBookmark from "../assets/icon-nav-bookmark.svg";
import avatar from "../assets/image-avatar.png";

const Navigation: React.FC = () => {
  return (
    <nav className="h-14 w-full justify-between items-center bg-dark-blue-light flex p-4 | md:h-[72px] md:rounded-[10px] | lg:flex-col lg:w-24 lg:h-screen lg:px-7 lg:py-8 lg:rounded-[20px] lg:justify-normal">
      <img src={logo} alt="logo" className="h-5 | md:h-6 md:pl-2 | lg:mb-20 lg:pl-0" />
      <ul className="flex gap-6 | md:gap-8 | lg:flex-col lg:gap-10 lg:mb-auto">
        <li>
          <img src={iconHome} alt="home icon" />
        </li>
        <li>
          <img src={iconMovies} alt="movies icon" />
        </li>
        <li>
          <img src={iconTVSeries} alt="tv series icon" />
        </li>
        <li>
          <img src={iconBookmark} alt="bookmark icon" />
        </li>
      </ul>
      <img src={avatar} alt="avatar" className="border rounded-full h-6 w-6" />
    </nav>
  );
};

export default Navigation;
