import React from 'react';
import { StyleSheet, Text } from 'react-native';

const textStyles = StyleSheet.create({
  headline: { fontSize: 30, color: 'black', textAlign: 'center' },
  paragraph: { fontSize: 24, color: 'black', textAlign: 'center' },
});

export const Headline = (props) => (
  <Text style={textStyles.headline}>{props.children}</Text>
);
export const Paragraph = (props) => (
  <Text style={textStyles.paragraph}>{props.children}</Text>
);
