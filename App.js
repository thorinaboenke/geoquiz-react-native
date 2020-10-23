import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import { Headline } from './components/Text';
import { Paragraph } from './components/Text';
import Spacer from './components/Spacer';
import DoubleSpacer from './components/DoubleSpacer';
import { Question } from './components/Question';
import cou from './assets/countries';

const App = () => {
  const [displayQuestion, setDisplayQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isRestarted, setIsRestarted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState(createQuestionArray(5, 4, cou));
  const [countries, setCountries] = useState(cou);
  const cat = { flag: 'flag', name: 'name', capital: 'capital' };

  useEffect(() => {
    const questionSet = createQuestionArray(5, 4, countries);
    setQuestions(questionSet);
  }, [isRestarted]);

  const handleAnswerClick = (correct) => {
    const newQ = displayQuestion + 1;
    setDisplayQuestion(newQ);
    if (correct) {
      const newScore = score + 1;
      setScore(newScore);
    }
  };
  const handlePlayAgainClick = () => {
    setDisplayQuestion(0), setScore(0);
    setIsRestarted(!isRestarted);
  };
  function random(x) {
    // returns a random number between 0 and x-1
    return Math.floor(Math.random() * x);
  }

  function createUniqueRandomIndexArray(length) {
    const arr = [];
    while (arr.length < length) {
      const newRand = random(195);
      if (arr.indexOf(newRand) === -1) {
        arr.push(newRand);
      }
    }
    return arr;
  }

  function createQuestionArray(
    numberOfQuestions,
    answerPossibilities,
    countries,
  ) {
    const questionArray = [];
    // create new questions
    for (let i = 0; i < numberOfQuestions; i++) {
      const randomCountryIndices = createUniqueRandomIndexArray(
        answerPossibilities,
      );
      const sol = random(answerPossibilities);
      const indexOfSolution = randomCountryIndices[sol];
      const solutionCountry = cou[indexOfSolution].name;
      const newQuestion = {};
      newQuestion.question = solutionCountry;
      newQuestion.answerOptions = [];
      // create answerOptions for each quesiton
      for (let i = 0; i < randomCountryIndices.length; i++) {
        if (i === sol) {
          //for the correct answer
          newQuestion.answerOptions.push({
            answer: cou[randomCountryIndices[i]].capital,
            isCorrect: true,
          });
        } else {
          //for the wrong answers
          newQuestion.answerOptions.push({
            answer: cou[randomCountryIndices[i]].capital,
            isCorrect: false,
          });
        }
      }
      console.log(newQuestion);
      questionArray.push(newQuestion);
    }
    console.log(questionArray);
    return questionArray;
  }

  console.log('questions', questions);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} translucent={true} style="dark" />
      <Headline>
        Score: {score} / {questions.length}
      </Headline>
      <Spacer />
      <View>
        {questions.map((q, index) => {
          return (
            displayQuestion === index && (
              <View style={styles.quizcard} key={q.question}>
                <View>
                  <Paragraph>
                    {index + 1} / {questions.length}{' '}
                  </Paragraph>
                </View>
                <Question>{q.question}</Question>
                <DoubleSpacer />
                <View>
                  {q.answerOptions.map((option) => {
                    return (
                      <>
                        <Button
                          key={option.answer}
                          onPress={() => {
                            handleAnswerClick(option.isCorrect);
                          }}
                          label={option.answer}
                        />
                        <Spacer />
                      </>
                    );
                  })}
                </View>
              </View>
            )
          );
        })}
        {displayQuestion === questions.length && (
          <Button
            label="Play again?"
            onPress={() => {
              handlePlayAgainClick();
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'stretch',
    justifyContent: 'center',
    width: '100%',
  },
  questions: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'stretch',
    justifyContent: 'center',
    width: '100%',
  },
  quizcard: {},
});

export default App;
