import styled from 'styled-components';
import { colors } from '../../helpers/theme';

export const Container = styled.ImageBackground`
  padding: 36px;
  width: 100%;
  flex: 1;
  display: flex;
`;

export const Logo = styled.Image`
  width: 146px;
  height: 49px;
`;

export const WelcomeMessage = styled.View`
  margin-top: 41.3px;
  margin-bottom: 10px;
  display: flex;
  flex: 1;
  height: auto;
  font-size: 15px;
`;

export const DividerStyle = {
  backgroundColor: colors.light.secondGreen,
  marginTop: 11,
  marginBottom: 18.5,
  width: 19,
  elevation: 1,
};

export const HeadlineStyle = {
  width: 'auto',
  fontWeight: 'bold',
  display: 'flex',
};

export const ForgotPasswordButton = {
  borderRadius: 15,
  borderColor: 'transparent',
  display: 'flex',
};

export const AccessButton = {
  backgroundColor: colors.light.secondGreen,
  borderTopLeftRadius: 15,
  borderBottomRightRadius: 15,
  display: 'flex',
  flex: 1,
  marginTop: 23,
  fontWeight: 'bold',
};

export const TermsOfUseButton = {
  backgroundColor: '#333',
  borderRadius: 15,
  fontWeight: 'bold',
};

export const Buttons = styled.View`
  flex-direction: row;
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

export const Form = styled.View`
  flex: 1;
  display: flex;
  margin-top: 11px;
  flex-direction: column;
`;

export const ParagraphView = styled.View`
  width: 225px;
  display: flex;
`;

export const Input = styled.View`
  margin-vertical: 5px;
  margin-horizontal: 5px;
  display: flex;
  flex: 1;
`;

export const InputLabel = styled.Text`
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 5px;
`;

export const InputGroup = styled.View`
  flex-direction: row;
  display: flex;
`;
