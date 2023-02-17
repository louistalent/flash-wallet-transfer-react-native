import { StyleSheet } from 'react-native';
import colors from '../../../theme/colors';
import { wScale, hScaleRatio } from '../../../utils/scailing';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'space-between'
  },
  loginText: {
    width: '100%',
    fontFamily: "Inter",
    fontSize: 28,
    fontWeight: "600",
    lineHeight: 34,
    textAlign: 'left',
    color: colors.titleTextColor,
    marginTop: hScaleRatio(30)
  },
  subTitle: {
    width: '100%',
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 25,
    textAlign: 'left',
    padding: wScale(10),
    color: colors.grayTxtColor
  },
  textInputGroup: {
    flexDirection: 'row'
  },
  textInput: {
    flex: 1,
    backgroundColor: 'transparent',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    margin: wScale(20),
    fontFamily: "Inter",
    fontSize: 25,
    fontWeight: "600",
    lineHeight: 35,
    textAlign: 'left',
  },
  inputText: {
    fontFamily: "Inter",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 25,
    textAlign: 'left',
    padding: wScale(10),
    color: colors.grayTxtColor
  },
  resendText: {
    fontFamily: "Inter",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 25,
    textAlign: 'left',
    padding: wScale(10),
    textDecorationLine: 'underline',
    color: colors.radioBtnColor
  },
  backBtn: {
    backgroundColor: 'transparent',
    width: wScale(47),
    height: hScaleRatio(47),
    borderRadius: wScale(15),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    fontSize: 24,
  }
});

export default styles;
