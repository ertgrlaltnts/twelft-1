import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#0F3460',
    height: '100%',
  },

  image_container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },

  title: {
    color: '#fff',
    fontFamily: 'Quicksand-Bold',
    fontSize: 18,
    marginLeft: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 20,
    marginTop: 20,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Quicksand-Bold',
    marginLeft: 10,
  },

  exit: {
    alignItems: 'center',
    marginTop: 90,
  },
});
