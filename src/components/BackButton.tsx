import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../helpers/theme';

const BackButton = (props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon
        size={25}
        name='arrow-left'
        color={colors.light.grayDark}
        backgroundColor='#FFF'
      />
    </TouchableOpacity>
  );
};

export default BackButton;
