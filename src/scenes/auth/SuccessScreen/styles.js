import { StyleSheet } from 'react-native';
import colors from '../../../theme/colors';
import { hScaleRatio, wScale } from '../../../utils/scailing';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabBar: {
    height: hScaleRatio(40)
  },
  getStarted: {
    marginTop: hScaleRatio(50),
    width: wScale(330),
    height: hScaleRatio(50),
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: hScaleRatio(25),
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    width: '100%',
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
    textAlign: 'center',
    color: colors.white
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: '100%',
    fontFamily: "Inter",
    fontSize: 40,
    fontWeight: "600",
    lineHeight: 48,
    textAlign: 'center',
    color: colors.black,
    marginTop: hScaleRatio(100)
  },
  subTitle: {
    width: '100%',
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: "400",
    lineHeight: 30,
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
