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
    height: Dimensions.get('screen').height / 1.8,
    borderRadius: 5,
  },

  close: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0F3460',
    paddingVertical: 3,
    paddingHorizontal: 8,
  },

  text: {
    fontSize: 15,
    fontFamily: 'RobotoMono-Bold',
  },

  ratio: {
    fontSize: 20,
    color: '#09D618',
    fontFamily: 'RobotoMono-Bold',
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
    marginTop: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },

  header: {
    alignItems: 'center',
    marginVertical: 10,
  },
  header_text: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 16,
    color: '#0F3460',
  },

  footer: {
    flexDirection: 'column',
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 5,
  },

  topSide: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footer_block: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text1: {
    color: '#000',
    fontSize: 15,
    paddingRight: 5,
    fontFamily: 'Quicksand-SemiBold',
  },

  text2: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'Quicksand-SemiBold',
  },

  text3: {
    color: '#09D618',
    fontSize: 18,
    fontFamily: 'Quicksand-SemiBold',
  },

  botSide: {
    alignItems: 'center',
    marginTop: 15,
  },
});
