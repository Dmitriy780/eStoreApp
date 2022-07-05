import {StyleSheet} from 'react-native';
import {WINDOW_WIDTH} from '@utils';
import {colors} from '@commons';

export const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  logo: {
    width: WINDOW_WIDTH * 0.2,
    height: WINDOW_WIDTH * 0.2 * 1.2394,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 18,
    color: colors.white,
    paddingTop: 10,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flex: 2.5,
    width: '70%',
    justifyContent: 'flex-end',
    bottom: 50,
  },
  btnSignIn: {
    backgroundColor: '#ffffff20',
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 6,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnRegister: {
    marginTop: 10,
    backgroundColor: colors.white,
    borderRadius: 6,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signIn: {
    fontFamily: 'Gilroy-Medium',
    fontSize: 16,
    color: colors.white,
  },
  createAccount: {
    fontFamily: 'Gilroy-Medium',
    fontSize: 16,
    color: colors.black,
  },
});
