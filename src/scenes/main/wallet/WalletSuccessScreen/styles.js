import { StyleSheet } from 'react-native';
import colors from '../../../../theme/colors';
import { hScaleRatio, wScale } from '../../../../utils/scailing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wScale(20)
  },
  topBar: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    marginTop: hScaleRatio(64),
    width: '100%',
    fontFamily: "Poppins",
    fontSize: 40,
    fontWeight: "300",
    lineHeight: 56,
    textAlign: 'center',
    color: colors.black
  },
  content: {
    marginTop: hScaleRatio(54),
    width: '100%',
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 24,
    textAlign: 'center',
    color: "#ABAFC4"
  },
  nextBtnEnable: {
    marginTop: hScaleRatio(150),
    backgroundColor: colors.primary,
    borderRadius: 8,
    width: '100%',
    height: hScaleRatio(48),
    justifyContent: 'center',
    alignItems: 'center'
  },
  nextBtnTextEnable: {
    fontFamily: "Poppins",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 24,
    textAlign: 'center',
    color: colors.white
  },
});

export default styles;
