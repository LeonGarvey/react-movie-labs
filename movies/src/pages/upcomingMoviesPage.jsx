// src/pages/upcomingMoviesPage.jsx
import React from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/spinner";
import AddToWatchlistIcon from "../components/cardIcons/addToWatchlist";

const UpcomingMoviesPage = () => {
  // Use React Query to fetch upcoming movies
  const { data, error, isPending, isError } = useQuery({
    queryKey: ["upcoming"],
    queryFn: getUpcomingMovies,
  });

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  // Extract the results array from the data
  const movies = data.results;


  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        // Render the new icon instead of AddToFavoritesIcon
        return <AddToWatchlistIcon movie={movie} />;
      }}
    />
  );
};

export default UpcomingMoviesPage;
