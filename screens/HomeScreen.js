import React, { useEffect, useLayoutEffect, useState } from 'react';
import Button from '../components/Button';
import Screen from '../components/Screen';
import Spacer from '../components/Spacer';
import { Headline, Paragraph } from '../components/Text';
import Header from '../components/Header';
import Container from '../components/Container';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <Header label="Welcome to GeoQuiz" />
      <Container fill>
        <Button label="Play" onPress={() => navigation.navigate('Play')} />
        <Spacer />
        <Button
          label="See Stats"
          onPress={() => navigation.navigate('Stats')}
        />
      </Container>
    </Screen>
  );
};
