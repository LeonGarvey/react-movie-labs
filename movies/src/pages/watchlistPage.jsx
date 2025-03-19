import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import RemoveFromWatchlistIcon from "../components/cardIcons/removeFromWatchlist";

const WatchlistPage = () => {
    const { watchlist } = useContext(MoviesContext);
  
    if (watchlist.length === 0) {
      return (
        <div style={{ padding: "1rem" }}>
          <h2>Your Watchlist is Empty</h2>
        </div>
      );
    }

    return (
        <PageTemplate
          title="My Watchlist"
          movies={watchlist}
          action={(movie) => <RemoveFromWatchlistIcon movie={movie} />}
        />
      );
    };
    
    export default WatchlistPage;