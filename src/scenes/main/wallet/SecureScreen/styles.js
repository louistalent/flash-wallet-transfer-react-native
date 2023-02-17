import { StyleSheet } from 'react-native';
import colors from '../../../../theme/colors';
import { hScaleRatio, wScale } from '../../../../utils/scailing';

const styles = StyleSheet.create({
  container: {
    padding: wScale(20),
  },
  topBar: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
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
    fontFamily: "Poppins",
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 24,
    textAlign: 'center',
    color: colors.black
  },
  subTitle1: {
    marginTop: hScaleRatio(10),
    width: '100%',
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    textAlign: 'left',
    color: colors.grayTxtColor
  },
  subTitle2: {
    width: '100%',
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
    textAlign: 'left',
    color: colors.grayTxtColor
  },
  content: {
    marginTop: hScaleRatio(5),
    width: '100%',
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
    textAlign: 'left',
    color: colors.grayTxtColor
  },
  createBtn: {
    marginTop: hScaleRatio(30),
    width: '100%',
    height: hScaleRatio(50),
    backgroundColor: colors.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    width: '100%',
    fontFamily: "Poppins",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 28,
    textAlign: 'center',
    color: colors.white
  },
  remindBtn: {
    marginTop: hScaleRatio(30),
    width: '100%',
    height: hScaleRatio(50),
    backgroundColor: colors.white,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  remindBtnText: {
    width: '100%',
    fontFamily: "Poppins",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 28,
    textAlign: 'center',
    color: '#5D5FEF'
  }
});

export default styles;
