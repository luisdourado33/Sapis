import styled from 'styled-components';
import { Dimensions } from 'react-native';
import { colors } from '../../helpers/theme';

export const Container = styled.ImageBackground`
  padding: 36px;
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const Logo = styled.Image`
  width: 146px;
  height: 49px;
`;

export const WelcomeMessage = styled.View`
  margin-top: 232px;
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

export const HowItWorksButton = {
  borderRadius: 15,
  borderColor: colors.light.grayDark,
  display: 'flex',
};

export const AccessButton = {
  backgroundColor: colors.light.secondGreen,
  borderTopLeftRadius: 15,
  borderBottomRightRadius: 15,
  fontWeight: 'bold',
};

export const Buttons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  margin-top: 100px;
`;
