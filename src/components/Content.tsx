import { MovieCard } from "./MovieCard";

interface contentProps {
  movie: {
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;  
  }
}


export function Content(props: contentProps) {
  // Complete aqui
  return (
    <MovieCard
    title={props.movie.Title} 
    poster={props.movie.Poster}
    runtime={props.movie.Runtime} 
    rating={props.movie.Ratings[0].Value} 
    />
  )
}