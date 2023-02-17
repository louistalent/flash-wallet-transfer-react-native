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
    marginTop: hScaleRatio(24),
    width: '100%',
    fontFamily: "Poppins",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 28,
    textAlign: 'center',
    color: colors.black
  },
  content: {
    marginTop: hScaleRatio(24),
    width: '100%',
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 24,
    textAlign: 'center',
    color: "#ABAFC4"
  },
  viewTitle: {
    marginTop: hScaleRatio(104),
    width: '100%',
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    textAlign: 'center',
    color: "#6A6A6A"
  },
  viewContent: {
    marginVertical: hScaleRatio(24),
    width: '100%',
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 18,
    textAlign: 'center',
    color: "#ABAFC4"
  },
  itemBtn: {
    width: wScale(130),
    height: hScaleRatio(32),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F4F5',
    borderRadius: 8,
    margin: hScaleRatio(5),
  },
  seedPanel: {
    height: hScaleRatio(330),
    alignItems: 'center',
    flexDirection: 'row',
    padding: hScaleRatio(20),
    marginTop: hScaleRatio(40),
    borderRadius: 12,

  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  btnView: {
    backgroundColor: '#2A2D3C',
    borderRadius: 8,
    width: wScale(104),
    height: hScaleRatio(56),
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewBtnText: {
    marginLeft: 5,
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
    textAlign: 'center',
    color: colors.primary
  },
  nextBtnDisable: {
    marginTop: hScaleRatio(20),
    backgroundColor: '#D1D5DB',
    borderRadius: 8,
    width: '100%',
    height: hScaleRatio(48),
    justifyContent: 'center',
    alignItems: 'center'
  },
  nextBtnTextDisable: {
    fontFamily: "Poppins",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 24,
    textAlign: 'center',
    color: "#4C516B"
  },
  nextBtnEnable: {
    marginTop: hScaleRatio(20),
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
  }
});

export default styles;
