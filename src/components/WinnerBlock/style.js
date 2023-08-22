import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    position: 'relative',
    width: Dimensions.get('screen').width - 30,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  vip: {
    position: 'absolute',
    right: -5,
    top: -4,
    zIndex: 1,
  },
  topBlock: {
    backgroundColor: '#0F3460',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  topText: {
    color: '#fff',
    paddingHorizontal: 5,
    fontFamily: 'Quicksand-Bold',
    fontWeight: 'bold',
    marginRight: 20,
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
    backgroundColor: '#BDC6D9',
    paddingVertical: 10,
    borderBottomLeftRadius: 5,
  },
  left: {
    width: '25%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  mid: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingVertical: 5,
    borderRadius: 5,
  },

  mid_col: {
    alignItems: 'center',
  },
  right: {
    width: '25%',
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
    fontSize: 14,
    fontFamily: 'Quicksand-SemiBold',
  },

  textRight: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
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
    justifyContent: 'flex-end',
    backgroundColor: '#0F3460',
    width: '50%',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
});
