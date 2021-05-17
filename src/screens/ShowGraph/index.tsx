import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import {
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Text,
} from 'react-native';
import {
  Title,
  IconButton,
  Paragraph,
  Button,
  Avatar,
  Dialog,
  Portal,
} from 'react-native-paper';
import {
  Container,
  HeaderContainer,
  AvatarView,
  HeaderController,
  Section,
  Content,
  ContentTitle,
  Switcher,
  SwitcherButton,
  SwitcherTitle,
  WrapperCard,
} from './styles';

import LineGraph from '../../components/dashboard/LineGraph';
import CardItem from '../../components/dashboard/CardItem';
import { CardGrid } from '../../screens/Dashboard/styles';

import { colors } from '../../helpers/theme';
import { IChannel, IFeed } from '../../../types';

interface IPropsData {
  channel?: IChannel;
  feeds?: Array<IFeed>;
}

const ShowGraph = () => {
  const { state } = useContext(AuthContext);
  const [dataChannel, setDataChannel] = useState<IPropsData>();
  const [visible, setVisible] = React.useState(false);
  const [showMilho, setShowMilho] = React.useState(false);
  const [showCafe, setShowCafe] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  useEffect(() => {
    (async () => {
      await axios
        .get('https://api.thingspeak.com/channels/1364341/feeds.json')
        .then((apiResponse) => {
          let { channel, feeds } = apiResponse.data;
          setDataChannel({
            channel: channel,
            feeds: feeds,
          });
        })
        .catch((error) => {
          alert('Houve um erro ao carregar os valores.\n' + error);
        });
    })();
  }, []);

  return (
    <Container>
      <SafeAreaView>
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
                    label={state?.userData.firstName}
                    labelStyle={{ fontWeight: 'bold', fontSize: 20 }}
                    color={'#333'}
                    style={{
                      backgroundColor: '#FFF',
                      elevation: 10,
                      marginRight: 19.3,
                    }}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 0,
                      display: 'flex',
                    }}>
                    <IconButton
                      icon='cog'
                      color={'#FFF'}
                      size={20}
                      onPress={() => console.log('Pressed')}
                    />
                    <IconButton
                      icon='lock'
                      color={'red'}
                      size={20}
                      onPress={() => console.log('Pressed')}
                    />
                  </View>
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
                Canal de Conexão: {dataChannel?.channel.id}
              </Title>
            </Section>
          </ImageBackground>
          <Content>
            <Switcher>
              <SwitcherButton onPress={showDialog} left light>
                <SwitcherTitle>Milho</SwitcherTitle>
              </SwitcherButton>
              <SwitcherButton dark>
                <SwitcherTitle>Café</SwitcherTitle>
              </SwitcherButton>
              <SwitcherButton right light>
                <SwitcherTitle>Trigo</SwitcherTitle>
              </SwitcherButton>
            </Switcher>
            <WrapperCard >
              <CardItem onPress={() => alert('testestese')} title='Milho' umidity='45' temperature='40' />
                <Text>Teste</Text>
            </WrapperCard>
            {showMilho &&
              <>
                <ContentTitle>Gráficos:</ContentTitle>
                <LineGraph
                  channel={dataChannel?.channel}
                  feeds={dataChannel?.feeds}
                />
              </>}

            <WrapperCard >
              <CardItem onPress={() => alert('testestese')} title='Café' umidity='45' temperature='40' />
            </WrapperCard>
            {showMilho &&
              <>
                <ContentTitle>Gráficos:</ContentTitle>
                <LineGraph
                  channel={dataChannel?.channel}
                  feeds={dataChannel?.feeds}
                />
              </>}
          </Content>
        </ScrollView>
        <Portal>
          <Dialog
            style={{ backgroundColor: 'whitesmoke' }}
            visible={visible}
            onDismiss={hideDialog}>
            <Dialog.Title>Relatório</Dialog.Title>
            <Dialog.Content>
              <Paragraph>
                Relatório semanal gerado com sucesso! Por favor, verifique seu
                e-mail.
              </Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                color={colors.light.secondGreen}
                uppercase={false}
                mode='contained'
                onPress={hideDialog}>
                Fechar
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </SafeAreaView>
    </Container>
  );
};

export default ShowGraph;
