import styled from 'styled-components';
import { colors } from '../../helpers/theme';

let defaultColor = 'transparent';

export const Container = styled.View`
  width: 100%;
  flex: 1;
  background-color: #fff;
  display: flex;
`;

export const HeaderContainer = styled.ImageBackground`
  background-color: ${defaultColor};
  padding-left: 20px;
  padding-right: 39px;
  padding-top: 20px;
  display: flex;
`;

export const HeaderController = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const AvatarView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  display: flex;
`;

export const HeaderTitle = {
  color: colors.light.firstGreen,
  fontSize: 20,
  fontWeight: 'bold',
};

export const HeaderSubtitle = {
  color: colors.light.firstGreen,
  fontSize: 11,
};

export const Section = styled.View`
  background-color: ${defaultColor};
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 45px;
  padding-bottom: 165px;
  flex: 1;
`;

export const Content = styled.View`
  padding-left: 20px;
  margin-right: 25px;
  padding-top: 80px;
  padding-bottom: 100px;
  flex: 1;
`;

export const ContentTitle = styled.Text`
  color: ${colors.light.grayDark};
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${defaultColor};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`;

export const ContentBox = styled.View`
  background-color: ${defaultColor};
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const ContentText = styled.Text`
  color: ${colors.light.grayDark};
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
  margin-left: 20px;
`;

export const ContentTextBold = styled.Text`
  color: ${colors.light.grayDark};
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const CardGrid = styled.ScrollView`
  flex-direction: row;
  position: absolute;
  padding-left: 50px;
  top: 180px;
  flex: 1;
  display: flex;
`;
