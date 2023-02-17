import { StyleSheet } from 'react-native';
import colors from '../../../theme/colors';
import { hScaleRatio, wScale } from '../../../utils/scailing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wScale(20)
  },
  tabBar: {
    height: hScaleRatio(40)
  },
  radioBtnGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hScaleRatio(60)
  },
  btnGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: hScaleRatio(53),
    borderRadius: hScaleRatio(26),
    marginTop: hScaleRatio(32),
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    paddingHorizontal: wScale(70)
  },
  lineStyle: {
    flex: 1,
    borderBottomColor: colors.lineColor,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  orStyle: {
    flex: 1,
    fontFamily: "Inter",
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 18,
    color: colors.lineColor,
    textAlign: 'center'
  },
  confirmPassword: {
    marginTop: hScaleRatio(32),
    width: '100%',
    height: hScaleRatio(50),
    backgroundColor: colors.primary,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20,
    color: colors.white,
  },
  sendFromTxt: {
    marginTop: hScaleRatio(32),
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 20,
    color: colors.radioTxtColor
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginText: {
    width: '100%',
    fontFamily: "Inter",
    fontSize: 28,
    fontWeight: "600",
    lineHeight: 34,
    textAlign: 'left',
    color: colors.titleTextColor
  },
  subTitle: {
    width: '100%',
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 25,
    textAlign: 'left',
    color: colors.grayTxtColor

  },
  smallTxt: {
    marginTop: hScaleRatio(30),
    width: '100%',
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20,
    color: colors.titleTextColor,
    textAlign: 'left',
  },
  forgetPassword: {
    marginTop: hScaleRatio(10),
    width: '100%',
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20,
    color: colors.subTitleColor,
    textAlign: 'right',
  },
  getRegistered: {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20,
    color: colors.subTitleColor,
  },
  arrowRight: {
    color: colors.subTitleColor
  },
  dontAccount: {
    marginTop: hScaleRatio(32),
    width: '100%',
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 17,
    color: colors.black,
    textAlign: 'right',
  },
  textInput: {
    borderRadius: 5,
    width: '100%',
    borderWidth: 1,
    backgroundColor: colors.white,
    borderColor: '#DDDDDD',
    marginTop: hScaleRatio(10)
  }
});

export default styles;
