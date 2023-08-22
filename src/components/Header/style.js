import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width / 1.06,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    color: '#fff',
  },

  image: {
    width: 110,
    height: 110,
  },

  money: {
    position: 'relative',
  },
  money_text: {
    position: 'absolute',
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    fontFamily: 'Quicksand-Bold',
    borderRadius: 70,
    bottom: -5,
    color: '#ff6638',
    width: 55,
    height: 17,
    fontSize: 12,
    textAlign: 'center',
    display: 'flex',
    alignSelf: 'center',
  },
});
