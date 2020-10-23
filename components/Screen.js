import React from 'react';
import { StyleSheet, View } from 'react-native';

const screenStyles = StyleSheet.create({
  screen: {
    display: 'flex',
    flexDirection: 'column',
    flex: 0,
    backgroundColor: '#ffffff',
    width: '100%',
  },
});

export default function Screen() {
  return <View style={screenStyles.screen}>{props.children}</View>;
}
