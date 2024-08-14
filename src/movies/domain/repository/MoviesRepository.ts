import {Movie} from '../Movie';

export interface MoviesRepository {
  getMovies(): Promise<Movie[]>;
}
