import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { ScreenList } from '@types';

import * as Screens from './screens';

/**
 * 스택 네비게이터
 * @react-navigation에서 제공하는 스택 네비게이터를 선언합니다.
 */
const Stack = createStackNavigator<ScreenList>();

/**
 * 앱
 * 애플리케이션의 네비게이션 및 인증 등 실질 애플리케이션 로직을 구현합니다.
 * @returns App
 */
const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NMapTestScreen" component={Screens.NMapTestScreen} />
      <Stack.Screen name="TestScreen" component={Screens.TestScreen} />
    </Stack.Navigator>
  );
};

export default App;
