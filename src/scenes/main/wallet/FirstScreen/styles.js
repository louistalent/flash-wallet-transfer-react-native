import { StyleSheet } from 'react-native';
import colors from '../../../../theme/colors';
import { hScaleRatio, wScale } from '../../../../utils/scailing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wScale(20)
  },
  tabBar: {
    height: hScaleRatio(40)
  },
  logo: {

  },
  title: {
    width: '100%',
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 24,
    textAlign: 'left',
    color: colors.black,
    marginTop: hScaleRatio(20)
  },
  name: {
    width: '100%',
    fontFamily: "Inter",
    fontSize: 40,
    fontWeight: "700",
    lineHeight: 47,
    textAlign: 'center',
    color: colors.white,
    marginTop: hScaleRatio(60)
  },
  importBtn: {
    marginTop: hScaleRatio(20),
    width: "100%",
    height: hScaleRatio(45),
    backgroundColor: '#252333',
    borderRadius: wScale(24),
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    width: '100%',
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 17,
    textAlign: 'center',
    color: colors.white,
  },
  createBtn: {
    marginTop: hScaleRatio(20),
    width: "100%",
    height: hScaleRatio(45),
    borderRadius: wScale(24),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFC000',
  }
});

export default styles;
