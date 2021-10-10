import React from 'react';
import { Container, Banner, RateContainer, Rate, Title } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { IMovies } from '../../utils/movie';

type IData = {
  data: IMovies;
  navigatePage: (id: number) => void;
};
export const SearchItem = ({ data, navigatePage }: IData) => {
  function detailMovie() {
    if (!data.release_date) {
      alert('Filme ainda sem data de lançamento');
      return;
    }
    navigatePage(data.id);
  }
  return (
    <Container activeOpacity={0.7} onPress={detailMovie}>
      {data?.poster_path ? (
        <Banner
          resizeMethod="resize"
          source={{
            uri: `https://image.tmdb.org/t/p/original/${data?.poster_path}`,
          }}
        />
      ) : (
        <Banner
          resizeMethod="resize"
          source={require('../../assets/semfoto.png')}
        />
      )}

      <Title>{data?.title}</Title>
      <RateContainer>
        <Ionicons name="md-star" size={12} color="#E7a74e" />
        <Rate>{data?.vote_average}/10</Rate>
      </RateContainer>
    </Container>
  );
};
