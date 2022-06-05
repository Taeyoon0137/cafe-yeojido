import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RecoilRoot } from 'recoil';

import { ThemeContext } from '@contexts';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeWithAuto } from '@types';

import App from './App';

/**
 * 앱 컨테이너
 * 애플리케이션의 리렌더에 낮게 관여하며, 전체적인 상태 관리에 관려하는 Provider들을 선언합니다.
 * @returns AppContainer
 */
const AppContainer = () => {
  return (
    <RecoilRoot>
      <SafeAreaProvider>
        <ThemeContext.Provider value={ThemeWithAuto.Auto}>
          <NavigationContainer>
            <App />
          </NavigationContainer>
        </ThemeContext.Provider>
      </SafeAreaProvider>
    </RecoilRoot>
  );
};

export default AppContainer;
