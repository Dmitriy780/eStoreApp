import {StyleSheet} from 'react-native';
import {colors} from './Colors';

export const CommonStyles = StyleSheet.create({
  /** style */
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  flex_row_sb: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flex_row: {
    flexDirection: 'row',
  },

  /** font */
  font14_r: {
    fontFamily: 'Gilroy-Regular',
    fontSize: 14,
  },
  font14_m: {
    fontFamily: 'Gilroy-Medium',
    fontSize: 14,
  },
  font14_b: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 14,
  },
});
