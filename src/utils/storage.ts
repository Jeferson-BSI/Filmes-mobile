import AsyncStorage from '@react-native-async-storage/async-storage';
import { IMovies } from './movie';

//Buscar os filmes salvos

export async function getMoviesSaved(key: string) {
  const myMovies = await AsyncStorage.getItem(key);

  const moviesSaved = myMovies ? JSON.parse(myMovies) : [];

  return moviesSaved;
}

// Salvar um novo filmes

export async function saveMovie(key: string, newMovie: IMovies) {
  const moviesStored = await getMoviesSaved(key);

  const hasMovie = moviesStored.some(
    (item: IMovies) => item.id === newMovie.id,
  );

  if (hasMovie) {
    console.log('já existe');
    return;
  }

  moviesStored.push(newMovie);

  await AsyncStorage.setItem(key, JSON.stringify(moviesStored));
  console.log('Filme salvo');
}

// Deletar filme específico
export async function deleMovie(key: string, id: number) {
  const moviesStored = await getMoviesSaved(key);

  const myMovies = moviesStored.filter((item: IMovies) => item.id !== id);

  await AsyncStorage.setItem(key, JSON.stringify(myMovies));
  console.log('filme deletato');

  return myMovies;
}

// Filtrar algum filme se já esta salvo

export async function hasMovie(key: string, movie: IMovies) {
  const moviesStored = await getMoviesSaved(key);

  const hasMovie = moviesStored.find((item: IMovies) => item.id === movie.id);

  if (hasMovie) return true;

  return false;
}
