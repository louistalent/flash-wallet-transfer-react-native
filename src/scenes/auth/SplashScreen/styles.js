import { StyleSheet } from 'react-native';
import colors from '../../../theme/colors';
import { hScaleRatio } from '../../../utils/scailing';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabBar: {
    height: hScaleRatio(40)
  },
  logo: {

  },

  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    width: '100%',
    fontFamily: "Inter",
    fontSize: 40,
    fontWeight: "600",
    lineHeight: 48,
    textAlign: 'center',
    color: colors.black
  },
  subTitle: {
    width: '100%',
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 25,
    color: colors.black,
    textAlign: 'center',

  },
  bottomText: {
    position: 'absolute',
    bottom: hScaleRatio(40),
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    color: colors.black,
    textAlign: 'center',
  }
});

export default styles;
