import {useState, useEffect} from 'react';
import {GetMoviesUseCase} from '../../movies/application/use-cases/GetMoviesUseCase';
import {Movie} from '../../movies/domain/Movie';
import {HttpMoviesRepository} from '../../movies/infrastructure/repository/HttpMoviesRepository';
import {MovieHttpAdapter} from '../../movies/infrastructure/adapters/MovieHttpAdapter';

export const useMovies = (): {movies: Movie[]; isLoading: boolean} => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async (): Promise<void> => {
    const getMoviesUserCase = new GetMoviesUseCase({
      moviesRepository: new HttpMoviesRepository({
        httpAdapter: new MovieHttpAdapter(),
      }),
    });

    setIsLoading(true);
    const response = await getMoviesUserCase.execute();
    setMovies(response);
    setIsLoading(false);

    console.log(response);
  };

  return {
    movies,
    isLoading,
  };
};
