import React from 'react';
import {Modal, View} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './style';

const Loading = ({modalVisible, setModalVisible}) => {
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <LottieView
              source={require('../../assets/lottie/ball.json')}
              autoPlay
              loop
              style={styles.lottie}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Loading;
