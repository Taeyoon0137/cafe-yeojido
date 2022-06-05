import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { ScreenList } from '@types';

import * as Screens from './screens';

const Stack = createStackNavigator<ScreenList>();

const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TestScreen" component={Screens.TestScreen} />
    </Stack.Navigator>
  );
};

export default App;
