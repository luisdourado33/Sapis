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
  color: colors.light.grayDark,
  fontSize: 25,
  fontWeight: 'bold',
};

export const HeaderSubtitle = {
  color: colors.light.grayDark,
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
  padding-top: 10px;
  padding-bottom: 100px;
  flex: 1;
`;

export const ContentTitle = styled.Text`
  color: ${colors.light.grayDark};
  font-size: 24px;
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

export const Switcher = styled.View`
  flex-direction: row;
  align-self: center;
  margin-vertical: 20px;
`;

export const SwitcherButton = styled.TouchableOpacity`
  background-color: ${(props) =>
    props.light ? colors.light.secondGreen : colors.light.thirdGreen};
  padding-horizontal: 30px;
  padding-vertical: 5px;
  elevation: 5;
  border-top-left-radius: ${(props) => (props.left ? '10px' : '0px')};
  border-bottom-left-radius: ${(props) => (props.left ? '10px' : '0px')};
  border-top-right-radius: ${(props) => (props.right ? '10px' : '0px')};
  border-bottom-right-radius: ${(props) => (props.right ? '10px' : '0px')};
`;
export const SwitcherTitle = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;

export const WrapperCard = styled.View`
  flex-direction: column;
  display: flex;
`;
