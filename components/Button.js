import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

const buttonStyles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#B0DB43',
    padding: 20,
    width: '100%',
  },
  wrapperDisabled: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#CCF16E',
    padding: 20,
    width: '100%',
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

// disabled is passed as a prop and determines id the normal or the disabled style is applied
// the button renders a Text component, label is passed as prop for the button
export default function Button(props) {
  return (
    <TouchableHighlight
      disabled={props.disabled}
      underlayColor={'#89BA0C'}
      onPress={() => props.onPress()}
      style={
        props.disabled ? buttonStyles.wrapperDisabled : buttonStyles.wrapper
      }
    >
      <Text style={buttonStyles.label}>{props.label}</Text>
    </TouchableHighlight>
  );
}
