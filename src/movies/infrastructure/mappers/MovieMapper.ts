import {Movie} from '../../domain/Movie';
import {GetMoviesResponse} from '../interfaces/GetMoviesResponse';

export class MovieMapper {
  public static fromMovieHttpAdapterResultToEntity(
    result: GetMoviesResponse,
  ): Movie {
    return {
      id: result.id,
      title: result.title,
      description: result.description,
      backdrop: result.movie_banner,
      poster: result.image,
      rating: result.rt_score,
      releaseDate: result.release_date,
    };
  }
}
