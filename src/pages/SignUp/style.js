import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  block: {
    backgroundColor: '#BDC6D9',
    borderRadius: 8,
    position: 'relative',
    paddingHorizontal: 25,
    width: '95%',
  },

  image: {
    width: 180,
    height: 180,
    resizeMode: 'cover',
  },

  image_container: {
    position: 'absolute',
    top: -110,
    alignSelf: 'center',
  },

  input_block: {
    marginTop: 70,
  },

  input: {
    borderColor: '#BDC6D9',
    borderWidth: 2,
    marginTop: 17,
    borderRadius: 5,
    backgroundColor: '#fff',
    padding: 5,
    paddingLeft: 10,
    fontFamily: 'Quicksand-Bold',
  },

  input_text: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: 'Quicksand-Bold',
    color: '#BDC6D9',
  },

  button: {
    backgroundColor: '#0F3460',
    textAlign: 'center',
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 5,
    fontSize: 18,
    fontFamily: 'Quicksand-Bold',
    color: '#fff',
  },

  or: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  divider: {
    borderTopColor: '#fff',
    borderTopWidth: 3,
    width: '100%',
  },

  sign_button: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  sign_text: {
    color: '#000',
    fontFamily: 'Quicksand-Bold',
  },
  margin: {
    marginTop: 10,
  },

  policy: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Quicksand-Bold',
    fontSize: 12,
    marginTop: 20,
    marginBottom: 20,
  },

  span: {
    color: '#0F3460',
    fontFamily: 'Quicksand-Bold',
    fontSize: 12,
  },
});
