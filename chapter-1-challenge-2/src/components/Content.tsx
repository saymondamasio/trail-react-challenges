import { memo } from "react";
import { MovieCard } from "./MovieCard";

interface Rating {
  Value: string;
}
interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Runtime: string;
  Ratings: Rating[]
}

interface Genre {
  title: string;
}

interface Props {
  movies: Movie[]
  selectedGenre: Genre
}

function ContentComponent({movies, selectedGenre}:Props) {
  return (
  <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
  </div>
  )
}

export const Content = memo(ContentComponent); 