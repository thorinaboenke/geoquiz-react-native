import React from 'react';
import { StyleSheet, View } from 'react-native';

const screenStyles = StyleSheet.create({
  screen: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    width: '100%',
  },
  screenFill: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
});

const Screen = (props) => (
  <View style={props.fill ? screenStyles.screenFill : screenStyles.screen}>
    {props.children}
  </View>
);

export default screen;
