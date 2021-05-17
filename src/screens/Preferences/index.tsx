import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Title, Avatar } from 'react-native-paper';
import {
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  RefreshControl,
} from 'react-native';
import {
  Container,
  HeaderContainer,
  AvatarView,
  HeaderTitle,
  HeaderSubtitle,
  HeaderController,
  Section,
  Content,
  ContentTitle,
  ContentBox,
  ButtonContainer,
  ContentText,
  ContentTextBold,
  CardGrid,
} from './styles';
import { colors } from '../../helpers/theme';

import { handleLogoff } from '../../context/AuthContext';

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

function formatDate(date) {
  let dia = date.getDay();
  let mes = date.getMonth();
  let ano = date.getFullYear();
  let hora = date.getHours();
  let minutos = date.getMinutes();
  let segundos = date.getSeconds();
  return `${dia}/${mes}/${ano} às ${hora}:${minutos}:${segundos}`;
}

import CardItem from '../../components/preferences/CardItem';

const Preferences: React.FC = (props) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  return (
    <Container>
      <SafeAreaView>
        <ScrollView
          RefreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <ScrollView>
            <ImageBackground
              imageStyle={{
                resizeMode: 'cover',
              }}
              style={{
                width: '100%',
                flex: 1,
                display: 'flex',
                top: 0,
                position: 'relative',
              }}
              source={require('../../../assets/images/header.jpg')}>
              <HeaderContainer>
                <HeaderController>
                  <AvatarView>
                    <Avatar.Text
                      size={55}
                      label='JD'
                      labelStyle={{ fontWeight: 'bold' }}
                      color={'#333'}
                      style={{
                        backgroundColor: '#FFF',
                        elevation: 10,
                        marginRight: 19.3,
                      }}
                    />
                    <View
                      style={{
                        flexDirection: 'column',
                        flex: 0,
                        display: 'flex',
                      }}></View>
                  </AvatarView>
                </HeaderController>
              </HeaderContainer>
              <Section>
                <Title
                  style={{
                    color: colors.light.firstGreen,
                    fontWeight: 'bold',
                    paddingLeft: 20,
                  }}>
                  Especificações
                </Title>
              </Section>
            </ImageBackground>
            <Content>
              <ContentTitle>Geral</ContentTitle>
              <ContentBox>
                <Icon
                  style={{ backgroundColor: 'white' }}
                  color='#00F'
                  size={20}
                  name='archive'
                />
                <ContentText>Versão do aplicativo:</ContentText>
                <ContentTextBold> 1.0.0 </ContentTextBold>
              </ContentBox>

              <ButtonContainer>
                <Icon
                  style={{ backgroundColor: 'white' }}
                  color={colors.light.thirdGreen}
                  size={20}
                  name='key'
                />
                <ContentText>Alterar minha senha</ContentText>
              </ButtonContainer>

              <ButtonContainer>
                <Icon
                  style={{ backgroundColor: 'white' }}
                  color='#FFFF00'
                  size={20}
                  name='exclamation-circle'
                />
                <ContentText>Reportar erro</ContentText>
              </ButtonContainer>

              <ButtonContainer onPress={() => handleLogoff()}>
                <Icon
                  style={{ backgroundColor: 'white' }}
                  color='#F00'
                  size={20}
                  name='sign-out'
                />
                <ContentText>Sair</ContentText>
              </ButtonContainer>
            </Content>
          </ScrollView>
          <CardGrid showsHorizontalScrollIndicator={false} horizontal={true}>
            <CardItem title='Conexão' />
            <CardItem title='Sistema' />
          </CardGrid>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
};

export default Preferences;
