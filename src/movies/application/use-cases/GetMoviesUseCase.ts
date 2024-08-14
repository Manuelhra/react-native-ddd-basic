import {Movie} from '../../domain/Movie';
import {MoviesRepository} from '../../domain/repository/MoviesRepository';

export class GetMoviesUseCase {
  readonly #moviesRepository: MoviesRepository;

  constructor(dependencies: {moviesRepository: MoviesRepository}) {
    this.#moviesRepository = dependencies.moviesRepository;
  }

  public async execute(): Promise<Movie[]> {
    return this.#moviesRepository.getMovies();
  }
}
