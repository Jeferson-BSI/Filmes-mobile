import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { IMovies } from '../../utils/movie';
import {
  Container,
  Title,
  ReateContainer,
  Rate,
  ActionContainer,
  DetailButton,
  DeleteButton,
} from './styles';
import Feather from '@expo/vector-icons/build/Feather';
type IProps = {
  data: IMovies;
  deleMovie: (id: number) => void;
  navigationPage: (data: IMovies) => void;
};

export const FavoriteItem = ({ data, deleMovie, navigationPage }: IProps) => {
  return (
    <Container>
      <Title size={22}>{data.title}</Title>

      <ReateContainer>
        <Ionicons name="star" size={12} color="#e7a74e" />
        <Rate>{data.vote_average}/10</Rate>
      </ReateContainer>

      <ActionContainer>
        <DetailButton onPress={() => navigationPage(data)}>
          <Title size={16}>Ver Detalhes</Title>
        </DetailButton>

        <DeleteButton onPress={() => deleMovie(data.id)}>
          <Feather name="trash" size={25} color="#fff" />
        </DeleteButton>
      </ActionContainer>
    </Container>
  );
};
