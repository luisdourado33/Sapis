import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  ImageBackground,
  RefreshControl,
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
import { LineChart } from 'react-native-chart-kit';
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
  CardGrid,
  Switcher,
  SwitcherButton,
  SwitcherTitle,
} from './styles';

import CardItem from '../../components/dashboard/CardItem';
import { colors } from '../../helpers/theme';

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

const Dashboard = () => {
  const { state } = useContext(AuthContext);
  const [visible, setVisible] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [now, setNow] = React.useState(formatDate(new Date(Date.now())));

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);
  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <Container>
      <SafeAreaView>
        <ScrollView
          refreshControl={
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
                  Meus cultivos
                </Title>
              </Section>
            </ImageBackground>
            <Content>
              <ContentTitle>Relatórios</ContentTitle>
              <Switcher>
                <SwitcherButton onPress={showDialog} left light>
                  <SwitcherTitle>SEMANAL</SwitcherTitle>
                </SwitcherButton>
                <SwitcherButton right dark>
                  <SwitcherTitle>MENSAL</SwitcherTitle>
                </SwitcherButton>
              </Switcher>
              <LineChart
                data={{
                  labels: [
                    'Janeiro',
                    'Fevereiro',
                    'Março',
                    'Abril',
                    'Maio',
                    'Junho',
                  ],
                  datasets: [
                    {
                      data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                      ],
                    },
                  ],
                }}
                width={Dimensions.get('window').width} // from react-native
                height={220}
                yAxisLabel=''
                yAxisSuffix='º'
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: '#FFF',
                  backgroundGradientFrom: '#FFF',
                  backgroundGradientTo: '#fff',
                  decimalPlaces: 1, // optional, defaults to 2dp
                  color: (opacity = 1) => `${colors.light.secondGreen}`,
                  labelColor: (opacity = 1) => `${colors.light.grayDark}`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: colors.light.firstGreen,
                  },
                }}
                bezier
                style={{
                  marginVertical: 0,
                  borderRadius: 16,
                  alignSelf: 'center',
                }}
              />
            </Content>
          </ScrollView>
          <CardGrid showsHorizontalScrollIndicator={false} horizontal={true}>
            <CardItem title='Milho' umidity='45' temperature='40' />
            <CardItem title='Café' umidity='45' temperature='40' />
            <CardItem title='Trigo' umidity='45' temperature='40' />
          </CardGrid>
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

export default Dashboard;
