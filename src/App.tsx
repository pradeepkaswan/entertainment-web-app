import { useState, useEffect, ReactNode } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Movies from "./pages/movies";
import TVSeries from "./pages/tv-series";
import BookmarkedShows from "./pages/bookmarked-shows";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import Navigation from "./components/navigation";
import { User, Show } from "./types";

export default function App() {
  const [shows, setShows] = useState<Show[]>([]);
  const [user] = useState<User | null>(null);

  useEffect(() => {
    const storedShows = localStorage.getItem("shows");
    if (storedShows) {
      setShows(JSON.parse(storedShows));
    } else {
      setShows([]);
    }
  }, []);

  const toggleBookmark = (showTitle: string) => {
    setShows((prevShows) => {
      const updatedShows = prevShows.map((show) =>
        show.title === showTitle ? { ...show, isBookmarked: !show.isBookmarked } : show
      );
      localStorage.setItem("shows", JSON.stringify(updatedShows));
      return updatedShows;
    });
  };

  const handleLogin = (userData: User) => {
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const location = useLocation();
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <div className="flex flex-col | md:m-6 | lg:flex-row lg:m-8">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/sign-up" element={<SignUp onSignUp={handleLogin} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home shows={shows} onToggleBookmark={toggleBookmark} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/movies"
              element={
                <ProtectedRoute>
                  <Movies shows={shows.filter((s) => s.category === "Movie")} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tv-series"
              element={
                <ProtectedRoute>
                  <TVSeries shows={shows.filter((s) => s.category === "TV Series")} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/bookmarked"
              element={
                <ProtectedRoute>
                  <BookmarkedShows />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
