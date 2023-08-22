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
    color: '#000',
    borderColor: '#BDC6D9',
    borderWidth: 2,
    marginTop: 17,
    borderRadius: 5,
    backgroundColor: '#fff',
    padding: 5,
    paddingLeft: 10,
    fontFamily: 'Quicksand-Bold',
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
    borderTopColor: '#0F3460',
    borderTopWidth: 3,
    width: '100%',
  },

  or_text: {
    color: '#0F3460',
    fontFamily: 'Quicksand-Bold',
    marginHorizontal: 15,
    textAlign: 'center',
  },

  sign_button: {
    backgroundColor: '#0F3460',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  sign_text: {
    color: '#fff',
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
    fontSize: 12,
    fontFamily: 'Quicksand-Bold',
  },

  and: {
    marginHorizontal: 10,
  },
});
