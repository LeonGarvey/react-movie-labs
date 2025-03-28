import AddMovieReviewPage from './pages/addMovieReviewPage'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import SiteHeader from './components/siteHeader';
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import MoviesContextProvider from "./contexts/moviesContext";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import WatchlistPage from "./pages/watchlistPage";
import NowPlayingPage from "./pages/NowPlayingPage";

import "./styles.css";



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <Routes>
            <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
            <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={ <Navigate to="/" /> } />
            <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
            <Route path="/upcoming" element={<UpcomingMoviesPage />} /> 
            <Route path="/watchlist" element={<WatchlistPage />} />
            <Route path="/now_playing" element={<NowPlayingPage />} />
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};



const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);
