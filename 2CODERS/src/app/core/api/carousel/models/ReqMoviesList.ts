export interface ResMoviesList {
  page: number;
  results: Results[];
}

export interface Results {
  poster_path: string,
  adult: boolean,
  overview: string,
  release_date: string,
  genre_ids: number[],
  id: number,
  original_title: string,
  original_language: string,
  title: string,
  backdrop_path: string,
  popularity: number,
  vote_count: number,
  video: false,
  vote_average: number
}