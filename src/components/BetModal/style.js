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
    height: Dimensions.get('screen').height / 2.5,
    borderRadius: 5,
  },

  close: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: '#0F3460',
    paddingVertical: 3,
    paddingHorizontal: 8,
  },

  line: {
    alignItems: 'center',
    marginTop: 10,
  },

  info_line: {
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: '#fff',
    marginHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 5,
  },

  rowLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  text: {
    fontSize: 16,
    fontFamily: 'Quicksand-SemiBold',
    color: '#000',
  },

  ratio: {
    fontSize: 20,
    color: '#09D618',
    fontFamily: 'Quicksand-Bold',
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#0F3460',
    marginHorizontal: 15,
    marginTop: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },

  preview: {
    alignItems: 'center',
    backgroundColor: '#E72828',
    marginHorizontal: 15,
    marginTop: 15,
    paddingVertical: 5,
    borderRadius: 5,
  },

  button_text: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Quicksand-SemiBold',
  },

  pay_text: {
    color: '#fff',
    fontSize: 18,
    marginRight: 5,
    fontFamily: 'Quicksand-SemiBold',
  },
});
