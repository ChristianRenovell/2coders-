export interface ResMainImage {
  id: number;
  backdrops: Backdrops[],
  posters: Posters[]
}

export interface Backdrops {
  aspect_ratio: number,
      file_path: string,
      height: number,
      iso_639_1: string | null,
      vote_average: number,
      vote_count: number,
      width: number
}

export interface Posters {
  aspect_ratio: number,
      file_path: string,
      height: number,
      iso_639_1: string,
      vote_average: number,
      vote_count: number,
      width: number
}

