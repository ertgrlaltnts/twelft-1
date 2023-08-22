import React from 'react';
import {Image, View} from 'react-native';
import styles from './style';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/splash.png')} />
    </View>
  );
};

export default Splash;
