import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    marginHorizontal: 15,
    marginVertical: 5,
    position: 'relative',
  },
  topText: {
    color: '#fff',
    paddingHorizontal: 5,
    fontFamily: 'Quicksand-Bold',
    fontSize: 13,
  },
  time: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  midBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  left: {
    width: '47.5%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  mid: {
    width: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    width: '47.5%',
  },
  edit: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  text: {
    color: '#000',
    fontFamily: 'Quicksand-Bold',
    fontSize: 12,
  },

  textRight: {
    color: '#000',
    fontFamily: 'Quicksand-Bold',
    fontSize: 12,
    textAlign: 'right',
  },
  image: {
    resizeMode: 'contain',
    width: 30,
    height: 30,
  },
  one: {
    width: '75%',
  },
  two: {
    width: '25%',
  },
  bottomBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0F3460',
    width: '100%',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 10,
  },

  delete: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#DB2222',
    borderRadius: 50,
    zIndex: 100,
  },

  timing: {
    flexDirection: 'row',
  },
});
