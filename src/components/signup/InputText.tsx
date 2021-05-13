import React from 'react';
import styled from 'styled-components';
import { Title, Paragraph, Button, TextInput, Modal } from 'react-native-paper';
import { colors } from '../../helpers/theme';

export const Input = styled.View`
  margin-bottom: 15px;
  margin-horizontal: 0;
`;

export const InputLabel = styled.Text`
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 5px;
`;

export const InputGroup = styled.View`
  flex-direction: row;
`;

const InputText = (props) => {
  const { label, placeholder } = props;

  return (
    <Input>
      <InputLabel>{label}</InputLabel>
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
        autoCompleteType='name'
        mode='flat'
        label={placeholder}
      />
    </Input>
  );
};

export default InputText;
