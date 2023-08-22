import React from 'react';
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './style';

const EmptyOwned = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/lottie/empty.json')}
        autoPlay
        loop
        style={styles.lottie}
      />
      <Text style={styles.text}>Kupon bulunamadı.</Text>
    </View>
  );
};

export default EmptyOwned;
