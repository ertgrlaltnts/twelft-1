import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 5,
    marginBottom: 15,
  },
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#BDC6D9',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },

  mini_block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },

  block_2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#BDC6D9',
    height: 60,
    marginTop: 10,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
  },

  text: {
    fontSize: 22,
    color: '#000',
    fontFamily: 'Quicksand-Bold',
    textAlign: 'center',
    paddingBottom: 5,
  },

  text2: {
    fontSize: 15,
    color: '#000',
    fontFamily: 'Quicksand-Bold',
    textAlign: 'center',
  },

  text3: {
    fontSize: 12,
    color: '#000',
    fontFamily: 'Quicksand-Bold',
    textAlign: 'center',
    maxWidth: '90%',
  },

  badges: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  store_block: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#0F3460',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    height: 60,
  },

  store_vip: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff6076',
    padding: 7,
    borderRadius: 5,
    marginTop: 10,
    height: 55,
  },

  store_text: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Quicksand-Bold',
    textAlign: 'center',
    marginRight: 10,
  },

  bags: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },

  absolute: {
    position: 'absolute',
    right: 20,
  },

  absolute2: {
    position: 'absolute',
    right: 40,
  },

  absolute3: {
    position: 'absolute',
    right: 60,
  },

  image_block: {
    position: 'relative',
  },
  vip: {
    position: 'absolute',
    right: -5,
    bottom: -5,
  },

  info: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#BDC6D9',
    paddingVertical: 6,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
  },
});
