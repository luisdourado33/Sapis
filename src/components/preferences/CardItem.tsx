import React from 'react';
import { View } from 'react-native';
import { Avatar } from 'react-native-paper';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../../helpers/theme';

const Container = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 5px;
  margin-right: 10px;
  margin-left: 0px;
  width: 160px;
  height: 120px;
  padding-bottom: 15px;
  margin-bottom: 10px;
  flex: 1;
  display: flex;
`;

const Title = styled.Text`
  font-size: 20px;
  margin-top: 9.5px;
`;

const InfoStatus = styled.Text`
  color: #5fdba7;
  font-size: 13px;
`;

const CardIcon = (props) => {
  let iconName = null;
  switch (props.title) {
    case 'Sistema':
      iconName = 'ear-hearing';
      break;
    case 'Conexão':
      iconName = 'wifi';
      break;
  }
  return (
    <Avatar.Icon
      style={{ backgroundColor: '#e0fc04' }}
      color={colors.light.thirdGreen}
      size={35}
      icon={iconName}
    />
  );
};

const CardItem = (props) => {
  const { title } = props;

  return (
    <Container
      onPress={() => {
        alert('Hello World!');
      }}>
      <View
        style={{
          backgroundColor: 'transparent',
          paddingLeft: 11,
          paddingTop: 18.5,
        }}>
        <CardIcon {...props} />
        <Title>{title}</Title>
        <InfoStatus>Ligado</InfoStatus>
      </View>
    </Container>
  );
};

export default CardItem;
