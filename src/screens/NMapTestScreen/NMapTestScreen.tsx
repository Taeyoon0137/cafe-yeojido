import React from 'react';
import NaverMapView from 'react-native-nmap';

const NMapTestScreen = () => {
  const P0 = { latitude: 37.564362, longitude: 126.977011 };
  const P1 = { latitude: 37.565051, longitude: 126.978567 };
  const P2 = { latitude: 37.565383, longitude: 126.976292 };

  const mapConfig = {
    showsMyLocationButton: false,
    zoomControl: false,
    compass: false,
    scaleBar: false,
  };

  return (
    <NaverMapView
      style={{ width: '100%', height: '100%' }}
      center={{ ...P0, zoom: 16 }}
      nightMode={true}
      mapType={1}
      {...mapConfig}
    />
  );
};

export default NMapTestScreen;
