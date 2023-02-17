import { StyleSheet } from 'react-native';
import colors from '../../../../theme/colors';
import { hScaleRatio, wScale } from '../../../../utils/scailing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: hScaleRatio(40),
    width: '100%',
    fontFamily: "Poppins",
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 24,
    textAlign: 'center',
    color: colors.black
  },
  subTitle: {
    marginTop: hScaleRatio(10),
    width: '100%',
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    textAlign: 'center',
    color: '#ABAFC4'
  },
  icon: {
    fontSize: 20
  },
  titleGroup: {
    alignItems: 'center'
  },
  textInput: {
    backgroundColor: colors.white,
    borderRadius: 8,
    borderWidth: 1,
    overflow: 'hidden'
  },
  error: {
    flexDirection: 'row',
    marginBottom: hScaleRatio(24)
  },
  strength: {
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 24,
    textAlign: 'left',
    color: '#ABAFC4'
  },
  good: {
    width: '100%',
    fontFamily: "Poppins",
    fontSize: 144,
    fontWeight: "400",
    lineHeight: 24,
    textAlign: 'left',
    color: '#76E268'
  },
  faceId: {
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 24,
    textAlign: 'left',
    color: colors.black
  },
  understand: {
    fontFamily: "Poppins",
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 24,
    textAlign: 'left',
    color: '#ABAFC4'
  },
  learnMore: {
    color: '#5F97FF'
  },
  createBtn: {
    marginTop: hScaleRatio(100),
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
  }
});

export default styles;
