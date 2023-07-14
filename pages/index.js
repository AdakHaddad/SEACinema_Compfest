import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import MovieCard from "../components/MovieCard";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  // const [session, loading] = useSession();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://seleksi-sea-2023.vercel.app/api/movies"
        );
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Movies</h1>
      {/* {!loading && !session && <p>Please log in to view movies.</p>}
      {session && ( */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      {/* )} */}
    </div>
  );
};

export default MoviesPage;
