import React from 'react';
import NaverMapView from 'react-native-nmap';

import { useTheme } from '@hooks';
import { Theme } from '@types';
import { createStyleSheet } from '@utils';

const P0 = { latitude: 37.564362, longitude: 126.977011 };
const P1 = { latitude: 37.565051, longitude: 126.978567 };
const P2 = { latitude: 37.565383, longitude: 126.976292 };

/**
 * 네이버 지도 테스트 스크린
 * 네이버 지도 라이브러리를 테스트할 수 있도록 준비된 임시 화면입니다.
 * @returns NMapTestScreen
 */
const MainScreen = () => {
  const theme = useTheme();
  const styles = createStyleSheet({
    naverMap: { width: '100%', height: '100%' },
  });

  const mapConfig = {
    showsMyLocationButton: false,
    zoomControl: false,
    compass: false,
    scaleBar: false,
    mapType: theme === Theme.Dark ? 1 : 0,
    nightMode: theme === Theme.Dark,
  };

  return <NaverMapView style={styles.naverMap} center={{ ...P0, zoom: 16 }} {...mapConfig} />;
};

export default MainScreen;
