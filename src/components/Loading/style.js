import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
  modalView: {
    width: Dimensions.get('screen').width * 0.8,
    height: Dimensions.get('screen').height / 1.5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  lottie: {
    width: 150,
    height: 150,
  },
});
