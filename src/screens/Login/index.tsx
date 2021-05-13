import React, { useState } from 'react';
import Toast from 'react-native-toast-message';
import { Title, Paragraph, Button, TextInput } from 'react-native-paper';
import { ScrollView } from 'react-native';
import {
  Container,
  WelcomeMessage,
  ParagraphView,
  Form,
  Input,
  InputLabel,
  Buttons,
  ForgotPasswordButton,
  AccessButton,
  SignUpButton,
} from './styles';

import { colors } from '../../helpers/theme';
import bg from '../../../assets/images/bg.png';

import BackButton from '../../components/BackButton';

const Login = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(!isLoading);
    Toast.show({
      position: 'top',
      text1: 'Bem-vindo(a)!',
      text2: 'Você será redirecionado para a dashboard',
    });

    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('Home');
    }, 100);
  };

  return (
    <Container source={bg}>
      <BackButton />
      <ScrollView>
        <WelcomeMessage>
          <Title allowFontScaling style={{ fontWeight: 'bold', fontSize: 25 }}>
            Acessar
          </Title>
          <ParagraphView>
            <Paragraph allowFontScaling>
              Faça login em sua conta com seu nome de usuário ou e-mail.
            </Paragraph>
          </ParagraphView>
          <Form>
            <Input>
              <InputLabel>Entre com seu e-mail</InputLabel>
              <TextInput
                style={{
                  backgroundColor: 'transparent',
                }}
                underlineColor='#000'
                selectionColor={colors.light.thirdGreen}
                theme={{
                  colors: {
                    text: colors.light.grayDark,
                    primary: colors.light.thirdGreen,
                  },
                }}
                autoCompleteType='email'
                mode='flat'
                label='Digite seu e-mail ou nome de usuário'
              />
            </Input>
            <Input>
              <InputLabel>Senha</InputLabel>
              <TextInput
                style={{
                  backgroundColor: 'transparent',
                  marginLeft: 0,
                }}
                underlineColor='#000'
                selectionColor={colors.light.thirdGreen}
                theme={{
                  colors: {
                    text: colors.light.grayDark,
                    primary: colors.light.thirdGreen,
                  },
                }}
                autoCompleteType='password'
                accessible
                secureTextEntry
                mode='flat'
                label='Sua senha'
              />
            </Input>
            <Buttons>
              <Button
                style={ForgotPasswordButton}
                icon='key-outline'
                uppercase={false}
                color={colors.light.grayDark}
                onPress={() => alert('Hello World!')}
                mode='outlined'>
                Esqueci minha senha
              </Button>
              <Button
                style={AccessButton}
                loading={isLoading}
                disabled={isLoading}
                contentStyle={{ flexDirection: 'row-reverse' }}
                labelStyle={{ fontWeight: 'bold' }}
                onPress={handleLogin}
                icon='arrow-right'
                uppercase={false}
                mode='contained'>
                {!isLoading ? 'Entrar' : 'Carregando'}
              </Button>
            </Buttons>
          </Form>
        </WelcomeMessage>
        <Button
          style={SignUpButton}
          compact
          labelStyle={{ fontWeight: 'bold' }}
          onPress={() => navigation.navigate('SignUp')}
          uppercase={false}
          mode='contained'>
          Não tem uma conta? Registre-se
        </Button>
      </ScrollView>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </Container>
  );
};

export default Login;
