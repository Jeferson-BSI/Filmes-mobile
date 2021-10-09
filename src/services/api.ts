import axios from 'axios';

// URL FILMES EM CARTAZ
// https://api.themoviedb.org/3/movie/now_playing?api_key=cd3c19b90603948bb0aebe2e5e25313a&language=pt-BR&page=1

export const key = 'cd3c19b90603948bb0aebe2e5e25313a';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default api;
