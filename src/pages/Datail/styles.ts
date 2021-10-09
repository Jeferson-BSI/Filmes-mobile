import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #191a30;
`;

export const Header = styled.View`
  z-index: 99;
  position: absolute;
  top: 35px;
  width: 100%;
  padding: 0 14px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderButton = styled.TouchableOpacity`
  width: 46px;
  height: 46px;
  background-color: rgba(25, 26, 48, 0.8);
  border-radius: 23px;
  align-items: center;
  justify-content: center;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 350px;

  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;

export const ButtonLink = styled.TouchableOpacity`
  background-color: #e72f49;
  position: absolute;
  top: 300px;
  right: 15px;
  z-index: 99;

  width: 63px;
  height: 63px;

  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #fff;
  font-weight: bold;
  padding: 8px 14px;
  margin-top: 8px;
`;

export const ContentArea = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 14px;
  justify-content: space-between;
`;

export const Rate = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const ListGenres = styled.FlatList`
  padding-left: 14px;
  margin: 8px 0;
  max-height: 35px;
  min-height: 35px;
`;

export const Description = styled.Text`
  font-size: 16px;
  /* font-weight: 100; */
  color: #fff;
  text-align: justify;
  padding: 0px 14px 30px 14px;
  line-height: 20px;
`;
