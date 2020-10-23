import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import QuizScreen from './screens/QuizScreen';
import StatsScreen from './screens/StatsScreen';
import { StatusBar } from 'expo-status-bar';

// const Stack = createStackNavigator();

// const forFade = ({ current }) => ({
//   cardStyle: {
//     opacity: current.progress,
//   },
// });

const App = () => {
  return (
    <>
      <Text>Cool</Text>
      {/* <StatusBar backgroundColor={'white'} translucent={true} style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: forFade,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Quiz" component={QuizScreen} />
          <Stack.Screen name="Stats" component={StatsScreen} />
        </Stack.Navigator>
      </NavigationContainer> */}
    </>
  );
};

export default App;
