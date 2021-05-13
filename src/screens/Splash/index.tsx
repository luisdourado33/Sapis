import React, { useState, useContext, useEffect } from 'react';
import {
  Title,
  Headline,
  Divider,
  Button,
  Paragraph,
  Dialog,
  Portal,
} from 'react-native-paper';
import { ScrollView } from 'react-native';
import {
  Container,
  Logo,
  DividerStyle,
  HeadlineStyle,
  WelcomeMessage,
  Buttons,
  HowItWorksButton,
  AccessButton,
} from './styles';

import { AuthContext } from '../../context/AuthContext';

import * as helper from '../../helpers/constants';
import bg from '../../../assets/images/bg.png';
import { colors } from '../../helpers/theme';

const Splash = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);
  const { state } = useContext(AuthContext);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  useEffect(() => {
    // Alert.alert('Contexto', `First name: ${state?.userData.firstName}`);
  }, []);

  return (
    <Container source={bg}>
      <Logo source={require('../../../assets/images/logo.png')} />
      <WelcomeMessage>
        <Title selectable>Seja bem-vindo(a)!</Title>
        <Divider style={DividerStyle} />
        <Headline style={HeadlineStyle}>
          Acompanhe suas plantações em tempo real, de qualquer lugar!
        </Headline>
      </WelcomeMessage>
      <Buttons>
        <Button
          style={HowItWorksButton}
          compact
          icon='code-tags'
          uppercase={false}
          color={colors.light.grayDark}
          onPress={showDialog}
          mode='outlined'>
          Como funciona
        </Button>
        <Button
          style={AccessButton}
          compact
          contentStyle={{ flexDirection: 'row-reverse' }}
          labelStyle={{ fontWeight: 'bold' }}
          onPress={() => navigation.navigate('Login')}
          icon='arrow-right'
          uppercase={false}
          mode='contained'>
          Acessar
        </Button>
      </Buttons>
      <Portal>
        <Dialog
          style={{ backgroundColor: 'whitesmoke' }}
          visible={visible}
          onDismiss={hideDialog}>
          <Dialog.Title>Como funciona?</Dialog.Title>
          <Dialog.Content>
            <ScrollView style={{ height: '80%' }}>
              <Paragraph>
                Id consequat minim occaecat sit dolor commodo incididunt minim
                id est. Laborum aute cupidatat cillum do dolor. Irure sit qui
                est nulla. Ut dolore consequat occaecat ipsum occaecat ea qui
                officia. Non consectetur mollit anim laboris sit incididunt
                duis. Ex nostrud magna nisi in irure pariatur et minim ea.
                Laboris incididunt proident id in irure aliquip fugiat do
                reprehenderit ex ex.
              </Paragraph>
              <Paragraph>
                Sint ea aliquip ut sunt dolor magna aliqua sunt quis minim
                veniam. Nisi ut sit laboris fugiat velit nostrud labore. Est
                laborum occaecat labore mollit laborum in magna pariatur ipsum
                officia. Ipsum cupidatat mollit Lorem aute. Anim velit do
                cupidatat sint officia dolor et commodo aliqua sint. Ullamco est
                ad cillum incididunt fugiat dolor ex sunt quis.
              </Paragraph>
              <Paragraph>
                Id consequat minim occaecat sit dolor commodo incididunt minim
                id est. Laborum aute cupidatat cillum do dolor. Irure sit qui
                est nulla. Ut dolore consequat occaecat ipsum occaecat ea qui
                officia. Non consectetur mollit anim laboris sit incididunt
                duis. Ex nostrud magna nisi in irure pariatur et minim ea.
                Laboris incididunt proident id in irure aliquip fugiat do
                reprehenderit ex ex.
              </Paragraph>
              <Paragraph>
                Sint ea aliquip ut sunt dolor magna aliqua sunt quis minim
                veniam. Nisi ut sit laboris fugiat velit nostrud labore. Est
                laborum occaecat labore mollit laborum in magna pariatur ipsum
                officia. Ipsum cupidatat mollit Lorem aute. Anim velit do
                cupidatat sint officia dolor et commodo aliqua sint. Ullamco est
                ad cillum incididunt fugiat dolor ex sunt quis.
              </Paragraph>
              <Paragraph>
                Id consequat minim occaecat sit dolor commodo incididunt minim
                id est. Laborum aute cupidatat cillum do dolor. Irure sit qui
                est nulla. Ut dolore consequat occaecat ipsum occaecat ea qui
                officia. Non consectetur mollit anim laboris sit incididunt
                duis. Ex nostrud magna nisi in irure pariatur et minim ea.
                Laboris incididunt proident id in irure aliquip fugiat do
                reprehenderit ex ex.
              </Paragraph>
              <Paragraph>
                Sint ea aliquip ut sunt dolor magna aliqua sunt quis minim
                veniam. Nisi ut sit laboris fugiat velit nostrud labore. Est
                laborum occaecat labore mollit laborum in magna pariatur ipsum
                officia. Ipsum cupidatat mollit Lorem aute. Anim velit do
                cupidatat sint officia dolor et commodo aliqua sint. Ullamco est
                ad cillum incididunt fugiat dolor ex sunt quis.
              </Paragraph>
              <Paragraph>
                Id consequat minim occaecat sit dolor commodo incididunt minim
                id est. Laborum aute cupidatat cillum do dolor. Irure sit qui
                est nulla. Ut dolore consequat occaecat ipsum occaecat ea qui
                officia. Non consectetur mollit anim laboris sit incididunt
                duis. Ex nostrud magna nisi in irure pariatur et minim ea.
                Laboris incididunt proident id in irure aliquip fugiat do
                reprehenderit ex ex.
              </Paragraph>
              <Paragraph>
                Sint ea aliquip ut sunt dolor magna aliqua sunt quis minim
                veniam. Nisi ut sit laboris fugiat velit nostrud labore. Est
                laborum occaecat labore mollit laborum in magna pariatur ipsum
                officia. Ipsum cupidatat mollit Lorem aute. Anim velit do
                cupidatat sint officia dolor et commodo aliqua sint. Ullamco est
                ad cillum incididunt fugiat dolor ex sunt quis.
              </Paragraph>
            </ScrollView>
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
    </Container>
  );
};

export default Splash;
