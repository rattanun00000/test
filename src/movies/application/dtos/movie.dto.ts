// application/dtos/movie.dto.ts
export class MovieDto {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
}

export class MovieResponseDto {
    page: number;
    results: MovieDto[];
    total_pages: number;
    total_results: number;
  }
  