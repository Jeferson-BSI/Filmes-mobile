import React from 'react';
import { Container, Name } from './styles';

type IProps = {
  data: {
    id: number;
    name: string;
  };
};

export const Genres = ({ data }: IProps) => {
  return (
    <Container>
      <Name>{data.name}</Name>
    </Container>
  );
};
