import React, { useState, useEffect } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons/';
import { useNavigation } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { SliderItem } from '../../components/SliderItem';

import api, { key } from '../../services/api';
import { getListMovie, IMovies, randomBanner } from '../../utils/movie';

import {
  Container,
  SearchContainer,
  Input,
  SearchButton,
  Title,
  BannerButton,
  Banner,
  SliderMovie,
} from './styles';

type IData = {
  results: IMovies[];
  dates: object;
  page: string;
  total_pages: number;
  total_results: number;
};

type DataRequest = {
  data: IData;
};

export const Home = () => {
  const navigation = useNavigation();

  const [nowMovies, setNowMovies] = useState<IMovies[]>([]);
  const [popularMovies, setPopularMovies] = useState<IMovies[]>([]);
  const [topMovies, setTopMovies] = useState<IMovies[]>([]);
  const [bannerMovies, setBannerMovies] = useState<IMovies | null>(null);
  const [input, setInput] = useState('');

  const [loading, setLoading] = useState(true);

  function handleSearchMovie() {
    if (input === '') return;
    navigation.navigate('Search' as never, { name: input } as never);
    setInput('');
  }

  useEffect(() => {
    let isActive = true;

    const ac = new AbortController();

    async function getMovies() {
      const [nowData, popularData, topData] = await Promise.all<DataRequest>([
        api.get('movie/now_playing', {
          params: {
            api_key: key,
            language: 'pt-BR',
            page: 1,
          },
        }),
        api.get('movie/popular', {
          params: {
            api_key: key,
            language: 'pt-BR',
            page: 1,
          },
        }),
        api.get('movie/top_rated', {
          params: {
            api_key: key,
            language: 'pt-BR',
            page: 1,
          },
        }),
      ]);

      if (isActive) {
        const nowList = getListMovie(10, nowData.data.results);
        const popularList = getListMovie(10, popularData.data.results);
        const topList = getListMovie(10, topData.data.results);

        setBannerMovies(
          nowData.data.results[randomBanner(nowData.data.results)],
        );

        setNowMovies(nowList);
        setPopularMovies(popularList);
        setTopMovies(topList);
      }

      setLoading(false);
    }

    getMovies();

    return () => {
      isActive = false;
      ac.abort();
    };
  }, []);

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size="large" color="#fff" />
      </Container>
    );
  }

  return (
    <Container>
      <Header title="React Prime" />

      <SearchContainer>
        <Input
          placeholder="Ex Vingadores"
          onChangeText={(value) => setInput(value)}
          value={input}
          placeholderTextColor="#ddd"
        />

        <SearchButton onPress={handleSearchMovie}>
          <Feather name="search" size={30} color="#FFF" />
        </SearchButton>
      </SearchContainer>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Em cartaz</Title>

        <BannerButton
          activeOpacity={0.9}
          onPress={() => {
            navigation.navigate(
              'Detail' as never,
              { id: bannerMovies?.id } as never,
            );
          }}
        >
          <Banner
            resizeMethod="resize"
            source={{
              uri: `https://image.tmdb.org/t/p/original/${bannerMovies?.poster_path}`,
            }}
          />
        </BannerButton>

        <SliderMovie
          showsHorizontalScrollIndicator={false}
          horizontal
          data={nowMovies}
          //@ts-ignore
          renderItem={({ item }) => <SliderItem data={item} />}
          //@ts-ignore
          keyExtractor={(item) => String(item.id)}
        />

        <Title>Populares</Title>

        <SliderMovie
          showsHorizontalScrollIndicator={false}
          horizontal
          data={popularMovies}
          //@ts-ignore
          renderItem={({ item }) => <SliderItem data={item} />}
          //@ts-ignore
          keyExtractor={(item) => String(item.id)}
        />

        <Title>Mais Votados</Title>

        <SliderMovie
          showsHorizontalScrollIndicator={false}
          horizontal
          data={topMovies}
          //@ts-ignore
          renderItem={({ item }) => <SliderItem data={item} />}
          //@ts-ignore
          keyExtractor={(item) => String(item.id)}
        />
      </ScrollView>
    </Container>
  );
};
