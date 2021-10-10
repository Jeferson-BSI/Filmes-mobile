import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import api, { key } from '../../services/api';

import { Container, ListMovies } from './styles';
import { IMovies } from '../../utils/movie';
import { SearchItem } from '../../components/SearchItem';

type IParams = {
  params: { name: string };
};

type IData = {
  results: IMovies[];
  dates: object;
  page: string;
  total_pages: number;
  total_results: number;
};

export const Search = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<IParams, 'params'>>();

  const [movies, setMovie] = useState<IMovies[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isActive = true;
    async function getSearchMovie() {
      const response = await api.get<IData>('search/movie', {
        params: {
          query: route?.params?.name,
          api_key: key,
          language: 'pt-BR',
          page: 1,
        },
      });

      if (isActive) {
        setMovie(response.data.results);
        console.log(response.data.results);

        setLoading(false);
      }
    }

    if (isActive) {
      getSearchMovie();
    }

    return () => {
      isActive = false;
    };
  }, []);

  function navigateDatailPage(id: number) {
    navigation.navigate('Detail' as never, { id } as never);
  }
  if (loading) {
    return (
      <Container>
        <ActivityIndicator size="large" color="#fff" />
      </Container>
    );
  }

  return (
    <Container>
      <ListMovies
        data={movies}
        showsHorizontalScrollIndicator={false}
        //@ts-ignore
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <SearchItem
            //@ts-ignore
            data={item}
            //@ts-ignore
            navigatePage={(id) => navigateDatailPage(id)}
          />
        )}
      />
    </Container>
  );
};
