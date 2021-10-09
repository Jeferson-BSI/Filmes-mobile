import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, BannerItem, Rate, Title, Ratecontainer } from './styles';

import { Ionicons } from '@expo/vector-icons';
import { IMovies } from '../../utils/movie';

type IProps = {
  data: IMovies;
};

export const SliderItem = ({ data }: IProps) => {
  const navigation = useNavigation();
  return (
    <Container
      activeOpacity={0.7}
      onPress={() =>
        navigation.navigate('Detail' as never, { id: data.id } as never)
      }
    >
      <BannerItem
        source={{
          uri: `https://image.tmdb.org/t/p/original/${data.poster_path}`,
        }}
      />
      <Title numberOfLines={1}>{data.title}</Title>
      <Ratecontainer>
        <Ionicons name="md-star" size={12} color="#e7a74e" />
        <Rate>{data.vote_average}/10</Rate>
      </Ratecontainer>
    </Container>
  );
};
