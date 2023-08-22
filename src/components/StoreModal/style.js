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
    backgroundColor: '#BDC6D9',
    width: Dimensions.get('screen').width * 0.8,
    height: Dimensions.get('screen').height / 2.8,
    borderRadius: 5,
  },

  close: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: '#0F3460',
    paddingVertical: 3,
    paddingHorizontal: 5,
  },

  container: {
    marginTop: 13,
  },

  block: {
    alignItems: 'center',
    backgroundColor: '#0F3460',
    marginVertical: 5,
    marginHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Quicksand-Bold',
  },
});
