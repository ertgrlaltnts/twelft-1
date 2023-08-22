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

  image: {
    width: 90,
    height: 90,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginTop: 10,
  },

  image_block: {
    position: 'relative',
  },
  vip: {
    position: 'absolute',
    right: '35%',
    bottom: -5,
  },

  text_block: {
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 5,

    paddingHorizontal: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  text: {
    fontSize: 15,
    fontFamily: 'Quicksand-SemiBold',
    color: '#000',
  },
});
