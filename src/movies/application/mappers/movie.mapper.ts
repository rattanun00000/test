import { Movie, MovieCollection } from "src/movies/domain/entities/movie.entity";
import { MovieDto, MovieResponseDto } from "../dtos/movie.dto";

// application/mappers/movie.mapper.ts
export class MovieMapper {
    static toDto(entity: Movie): MovieDto {
      return {
        id: entity.id,
        title: entity.title,
        overview: entity.overview,
        poster_path: entity.posterPath,
        backdrop_path: entity.backdropPath,
        release_date: entity.releaseDate,
        vote_average: entity.voteAverage,
        vote_count: entity.voteCount,
      };
    }
  
    static toCollectionDto(entity: MovieCollection): MovieResponseDto {
      return {
        page: entity.page,
        results: entity.results.map(movie => this.toDto(movie)),
        total_pages: entity.totalPages,
        total_results: entity.totalResults,
      };
    }
  }
  