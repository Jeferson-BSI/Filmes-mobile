import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

import { Container, MenuButton, Title } from './styles';

type HeaderPorps = {
  title: String;
};

export const Header = ({ title }: HeaderPorps) => {
  const navigation = useNavigation();

  return (
    <Container>
      <MenuButton
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <Feather name="menu" size={36} color="#fff" />
      </MenuButton>
      <Title>{title}</Title>
    </Container>
  );
};
