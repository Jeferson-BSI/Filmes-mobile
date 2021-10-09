export type IMovies = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: '2021-08-11';
  title: string;
  vote_average: number;
  genres: object[];
  homepage: string;
};

export function getListMovie(size: number, movies: IMovies[]): IMovies[] {
  let popularMovies = [];

  for (let i = 0, l = size; i < l; i++) {
    popularMovies.push(movies[i]);
  }

  return popularMovies;
}

// Gera um número aleatório com base no tamanho da lista de filmes que eu passar;

export function randomBanner(movies: any) {
  return Math.floor(Math.random() * movies.length);
}
