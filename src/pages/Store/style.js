import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 15,
  },

  block: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#BDC6D9',
    paddingVertical: 10,
    borderRadius: 5,
  },
  text: {
    color: '#000',
    fontFamily: 'Quicksand-Bold',
    fontSize: 18,
  },

  title: {
    fontSize: 30,
    color: '#0F3460',
    fontFamily: 'Quicksand-Bold',
    alignSelf: 'center',
    marginVertical: 10,
  },
});
