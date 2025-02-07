import { Controller, Get, Query } from "@nestjs/common";
import { MovieResponseDto } from "src/movies/application/dtos/movie.dto";
import { GetPopularMoviesUseCase } from "src/movies/application/use-cases/get-popular-movies.use-case";

// infrastructure/controllers/movie.controller.ts
@Controller('movies')
export class MoviesController {
  constructor(private readonly getPopularMoviesUseCase: GetPopularMoviesUseCase) {}

  @Get('popular')
  async getPopularMovies(
    @Query('page') page: number = 1,
    @Query('language') language: string = 'en-US',
  ): Promise<MovieResponseDto> {
    return this.getPopularMoviesUseCase.execute(page, language);
  }
}