import {HttpAdapter} from '../../../shared/infrastructure/adapters/HttpAdapter';
import {Movie} from '../../domain/Movie';
import {MoviesRepository} from '../../domain/repository/MoviesRepository';
import {GetMoviesResponse} from '../interfaces/GetMoviesResponse';
import {MovieMapper} from '../mappers/MovieMapper';

export class HttpMoviesRepository implements MoviesRepository {
  readonly #httpAdapter: HttpAdapter;

  constructor(dependencies: {httpAdapter: HttpAdapter}) {
    this.#httpAdapter = dependencies.httpAdapter;
  }

  public async getMovies(): Promise<Movie[]> {
    const movieResponse = await this.#httpAdapter.get<GetMoviesResponse[]>(
      '/films',
    );

    return movieResponse.map(movie =>
      MovieMapper.fromMovieHttpAdapterResultToEntity(movie),
    );
  }
}
