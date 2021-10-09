import React from 'react';
import { WebView } from 'react-native-webview';
import { Feather } from '@expo/vector-icons';

import { BackButton, Name } from './styles';
type IProps = {
  link?: string;
  title?: string;
  closeModal: () => void;
};

export const ModalLink = ({ link, title, closeModal }: IProps) => {
  return (
    <>
      <BackButton onPress={closeModal}>
        <Feather name="x" size={35} color="#fff" />
        {console.log(link)}
        <Name numberOfLines={1}>{title || 'asda'}</Name>
      </BackButton>
      {link ? <WebView source={{ uri: link }} /> : null}
    </>
  );
};
