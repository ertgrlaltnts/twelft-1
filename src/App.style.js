import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  length: {
    backgroundColor: '#DB2222',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 200,
    width: 18,
    height: 18,
    position: 'absolute',
    top: -5,
    right: -5,
    fontSize: 13,
  },

  view: {
    position: 'relative',
  },

  image: {
    width: 40,
    height: 40,
  },

  tabAnimation: (getWidth, tabOffsetValue) => {
    return {
      width: getWidth() - 10,
      height: 4,
      backgroundColor: '#ff883e',
      position: 'absolute',
      bottom: 65,
      left: 40,
      borderRadius: 500,
      transform: [{translateX: tabOffsetValue}],
    };
  },
});
