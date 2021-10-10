import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { Container, ListMovies } from './styles';
import { IMovies } from '../../utils/movie';
import { getMoviesSaved, deleMovie } from '../../utils/storage';
import { FavoriteItem } from '../../components/FavoriteItem';

export const Movies = () => {
  const navigation = useNavigation();
  const [movies, setMovies] = useState<IMovies[]>([]);

  async function handleDeleteMovie(id: number) {
    const result = await deleMovie('@primereact', id);
    setMovies(result);
  }

  function navigateDatail(item: IMovies) {
    navigation.navigate('Detail' as never, { id: item.id } as never);
  }

  useEffect(() => {
    let isActive = true;

    async function getFavoriteMovies() {
      const moviesSaved = await getMoviesSaved('@primereact');

      setMovies(moviesSaved);
    }

    if (isActive) {
      getFavoriteMovies();
    }

    return () => {
      isActive = false;
    };
  }, [movies]);
  return (
    <Container>
      <Header title="Meus filmes" />

      <ListMovies
        data={movies}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <FavoriteItem
            //@ts-ignore
            data={item}
            //@ts-ignore
            deleMovie={handleDeleteMovie}
            //@ts-ignore
            navigationPage={navigateDatail}
          />
        )}
        //@ts-ignore
        keyExtractor={(item) => String(item.id)}
      />
    </Container>
  );
};
