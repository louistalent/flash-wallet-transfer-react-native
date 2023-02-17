import { StyleSheet } from 'react-native';
import colors from '../../../../theme/colors';
import { hScaleRatio, wScale } from '../../../../utils/scailing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wScale(20)
  },
  icon: {
    left: 0,
    position: 'absolute',
    fontSize: 24,
    color: colors.black
  },
  title: {
    width: '100%',
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 19,
    textAlign: 'center',
    color: colors.black
  },
  amountInput: {
    padding: wScale(5),
    width: wScale(270),
    height: hScaleRatio(112),
    borderWidth: 1,
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 17,
    textAlign: 'left',
    borderRadius: 8,
    backgroundColor: colors.white

  },
  passwordInput: {
    padding: wScale(5),
    marginTop: hScaleRatio(10),
    width: '100%',
    height: hScaleRatio(54),
    borderWidth: 1,
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 17,
    textAlign: 'left',
    borderRadius: 8,
    backgroundColor: colors.white
  },
  seed: {
    width: wScale(50),
    justifyContent: 'center',
    alignItems: 'center'
  },
  faceId: {
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 24,
    textAlign: 'left',
    color: colors.white
  },
  termsText: {
    marginTop: hScaleRatio(24),
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 24,
    textAlign: 'left',
    color: colors.black
  },
  importBtn: {
    marginTop: hScaleRatio(100),
    width: '100%',
    height: hScaleRatio(48),
    borderRadius: 8,
    backgroundColor: "#222531",
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
    textAlign: 'left',
    color: colors.white
  },
  labelColor: {
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
    textAlign: 'left',
    color: colors.black
  }
});

export default styles;
