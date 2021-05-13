import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Avatar } from 'react-native-paper';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../../helpers/theme';

const Container = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 5px;
  margin-right: 10px;
  margin-left: 0px;
  elevation: 5;
  width: 140px;
  height: 200px;
  padding-bottom: 15px;
  margin-bottom: 10px;
  flex: 1;
  display: flex;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-top: 9.5px;
  margin-bottom: 5.3px;
`;

const InfoData = styled.Text`
  color: #333;
  font-size: 13px;
  margin-horizontal: 5px;
`;

const InfoLabel = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 11px;
  padding-right: 14px;
`;

const ImageSize = {
  borderRadius: 10,
  width: '100%',
  height: 110,
};

const CardImage = (props) => {
  let fundoImage = null;
  switch (props.title) {
    case 'Milho':
      fundoImage = require('../../../assets/images/product/milho.jpg');
      break;
    case 'Café':
      fundoImage = require('../../../assets/images/product/cafe.jpg');
      break;
    case 'Trigo':
      fundoImage = require('../../../assets/images/product/trigo.jpg');
      break;
    default:
      fundoImage = require('../../../assets/images/product/no-image.png');
      break;
  }
  return (
    <ImageBackground style={ImageSize} source={fundoImage}>
      {props.children}
    </ImageBackground>
  );
};

const CardItem = (props) => {
  const { title, umidity, temperature } = props;

  return (
    <Container onPress={() => alert('Hello World')}>
      <CardImage {...props}>
        <View
          style={{
            backgroundColor: 'transparent',
            paddingLeft: 11,
            paddingTop: 18.5,
          }}>
          <Avatar.Icon
            style={{ backgroundColor: 'white' }}
            color={colors.light.thirdGreen}
            size={35}
            icon='leaf'
          />
        </View>
      </CardImage>
      <Title style={{ paddingHorizontal: 11 }}>{title}</Title>
      <InfoLabel>
        <Icon name='tint' color='#00B9FF' size={15} />
        <InfoData>Umidade: {umidity}%</InfoData>
      </InfoLabel>
      <InfoLabel>
        <Icon name='temperature-high' color='red' size={15} />
        <InfoData>Temperatura: {temperature}º</InfoData>
      </InfoLabel>
    </Container>
  );
};

export default CardItem;
