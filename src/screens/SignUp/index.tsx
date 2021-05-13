import React, { useState } from 'react';
import Toast from 'react-native-toast-message';
import {
  Title,
  Paragraph,
  Button,
  TextInput,
  Checkbox,
  Modal,
} from 'react-native-paper';
import { SafeAreaView, ScrollView } from 'react-native';
import { Formik } from 'formik';
import {
  Container,
  WelcomeMessage,
  ParagraphView,
  Form,
  Input,
  InputGroup,
  InputLabel,
  Buttons,
  AccessButton,
  TermsOfUseButton,
} from './styles';

import { colors } from '../../helpers/theme';
import bg from '../../../assets/images/bg.png';

import BackButton from '../../components/BackButton';
import InputText from '../../components/signup/InputText';

const SignUp = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (values) => {
    console.log(values);
    setIsLoading(!isLoading);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    Toast.show({
      position: 'top',
      text1: 'Bem-vindo(a)!',
      text2: 'Você será redirecionado para a dashboard',
    });
  };

  return (
    <Container source={bg}>
      <BackButton />
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <WelcomeMessage>
            <Title
              allowFontScaling
              style={{ fontWeight: 'bold', fontSize: 25 }}>
              Criar uma nova conta
            </Title>
            <ParagraphView>
              <Paragraph allowFontScaling>
                Registre-se de forma rápida e segura.
              </Paragraph>
            </ParagraphView>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                state: '',
                city: '',
                email: '',
                password: '',
                passwordRepeat: '',
                secretCode: '',
                terms: false,
              }}
              onSubmit={(values) => console.log(values)}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
                values,
              }) => (
                <Form>
                  <InputGroup>
                    <Input>
                      <InputLabel>Nome</InputLabel>
                      <TextInput
                        onChangeText={handleChange('firstName')}
                        underlineColor='#000'
                        style={{ backgroundColor: 'transparent' }}
                        selectionColor={colors.light.thirdGreen}
                        theme={{
                          colors: {
                            text: colors.light.grayDark,
                            primary: colors.light.thirdGreen,
                          },
                        }}
                        autoCompleteType='name'
                        mode='flat'
                        onBlur={handleBlur('firstName')}
                        label='Ex: John'
                        value={values.firstName}
                      />
                    </Input>
                    <Input>
                      <InputLabel>Sobrenome</InputLabel>
                      <TextInput
                        onChangeText={handleChange('lastName')}
                        underlineColor='#000'
                        style={{ backgroundColor: 'transparent' }}
                        selectionColor={colors.light.thirdGreen}
                        theme={{
                          colors: {
                            text: colors.light.grayDark,
                            primary: colors.light.thirdGreen,
                          },
                        }}
                        autoCompleteType='name'
                        mode='flat'
                        onBlur={handleBlur('lastName')}
                        label='Ex: Sommerfeld'
                        value={values.lastName}
                      />
                    </Input>
                  </InputGroup>
                  <InputGroup>
                    <Input>
                      <InputLabel>Localização</InputLabel>
                      <TextInput
                        onChangeText={handleChange('state')}
                        underlineColor='#000'
                        style={{ backgroundColor: 'transparent' }}
                        selectionColor={colors.light.thirdGreen}
                        theme={{
                          colors: {
                            text: colors.light.grayDark,
                            primary: colors.light.thirdGreen,
                          },
                        }}
                        mode='flat'
                        onBlur={handleBlur('state')}
                        label='MT'
                        value={values.state}
                      />
                    </Input>
                    <Input>
                      <InputLabel></InputLabel>
                      <TextInput
                        onChangeText={handleChange('city')}
                        underlineColor='#000'
                        style={{ backgroundColor: 'transparent' }}
                        selectionColor={colors.light.thirdGreen}
                        theme={{
                          colors: {
                            text: colors.light.grayDark,
                            primary: colors.light.thirdGreen,
                          },
                        }}
                        mode='flat'
                        onBlur={handleBlur('city')}
                        label='Cuiabá'
                        value={values.city}
                      />
                    </Input>
                  </InputGroup>
                  <Input>
                    <InputLabel>E-mail</InputLabel>
                    <TextInput
                      onChangeText={handleChange('email')}
                      underlineColor='#000'
                      style={{ backgroundColor: 'transparent' }}
                      selectionColor={colors.light.thirdGreen}
                      theme={{
                        colors: {
                          text: colors.light.grayDark,
                          primary: colors.light.thirdGreen,
                        },
                      }}
                      autoCompleteType='email'
                      mode='flat'
                      onBlur={handleBlur('email')}
                      label='Ex: johndoe@email.com'
                      value={values.email}
                    />
                  </Input>
                  <InputGroup>
                    <Input>
                      <InputLabel>Senha</InputLabel>
                      <TextInput
                        onChangeText={handleChange('password')}
                        underlineColor='#000'
                        style={{ backgroundColor: 'transparent' }}
                        selectionColor={colors.light.thirdGreen}
                        theme={{
                          colors: {
                            text: colors.light.grayDark,
                            primary: colors.light.thirdGreen,
                          },
                        }}
                        secureTextEntry
                        mode='flat'
                        onBlur={handleBlur('password')}
                        label='********'
                        value={values.password}
                      />
                    </Input>
                    <Input>
                      <InputLabel>Confirmar senha</InputLabel>
                      <TextInput
                        onChangeText={handleChange('passwordRepeat')}
                        underlineColor='#000'
                        style={{ backgroundColor: 'transparent' }}
                        selectionColor={colors.light.thirdGreen}
                        theme={{
                          colors: {
                            text: colors.light.grayDark,
                            primary: colors.light.thirdGreen,
                          },
                        }}
                        secureTextEntry
                        mode='flat'
                        onBlur={handleBlur('passwordRepeat')}
                        label='********'
                        value={values.passwordRepeat}
                      />
                    </Input>
                  </InputGroup>
                  <Input>
                    <InputLabel>Código de Cadastro</InputLabel>
                    <TextInput
                      onChangeText={handleChange('secretCode')}
                      underlineColor='#000'
                      style={{ backgroundColor: 'transparent' }}
                      selectionColor={colors.light.thirdGreen}
                      theme={{
                        colors: {
                          text: colors.light.grayDark,
                          primary: colors.light.thirdGreen,
                        },
                      }}
                      secureTextEntry
                      mode='flat'
                      onBlur={handleBlur('secretCode')}
                      label='********'
                      value={values.secretCode}
                    />
                  </Input>
                  <InputGroup style={{ alignItems: 'center' }}>
                    <Checkbox
                      status={values.terms ? 'checked' : 'unchecked'}
                      color={colors.light.grayDark}
                      onPress={() => {
                        setFieldValue('terms', !values.terms);
                      }}
                    />
                    <Paragraph
                      onPress={() => {
                        setFieldValue('terms', !values.terms);
                      }}
                      style={{ fontStyle: 'italic' }}>
                      Eu li e concordo com todos os termos de uso.
                    </Paragraph>
                  </InputGroup>
                  {/* <Buttons> */}
                  <Button
                    style={[
                      AccessButton,
                      {
                        alignSelf: 'flex-end',
                        backgroundColor: values.terms
                          ? colors.light.secondGreen
                          : colors.light.grayDark,
                      },
                    ]}
                    loading={isLoading}
                    disabled={(!values.terms && true) | (isLoading && true)}
                    contentStyle={{ flexDirection: 'row-reverse' }}
                    labelStyle={{
                      fontWeight: 'bold',
                      color: values.terms
                        ? colors.light.grayDark
                        : colors.light.firstGreen,
                    }}
                    onPress={() => handleLogin(values)}
                    icon='arrow-right'
                    uppercase={false}
                    mode='contained'>
                    {!isLoading ? 'Criar conta' : 'Carregando'}
                  </Button>
                  {/* </Buttons> */}
                </Form>
              )}
            </Formik>
          </WelcomeMessage>
          <Button
            style={TermsOfUseButton}
            icon='file-document'
            compact
            labelStyle={{ fontWeight: 'bold', color: '#eee' }}
            onPress={() => navigation.navigate('SignUp')}
            uppercase={true}
            mode='contained'>
            Termos de Uso
          </Button>
        </ScrollView>
      </SafeAreaView>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </Container>
  );
};

export default SignUp;
