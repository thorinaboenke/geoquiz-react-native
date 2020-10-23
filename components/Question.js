import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const questionStyles = StyleSheet.create({
  questionText: { fontSize: 42, color: 'white', textAlign: 'center' },
  questionView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
    backgroundColor: '#218380',
    textAlign: 'center',
  },
});

export const Question = (props) => (
  <View style={questionStyles.questionView}>
    <Text style={questionStyles.questionText}>{props.children}</Text>
  </View>
);
