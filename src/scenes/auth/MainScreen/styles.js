import { StyleSheet } from 'react-native';
import colors from '../../../theme/colors';
import { hScaleRatio } from '../../../utils/scailing';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bla_black,
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1
  },
  tabBar: {
    height: hScaleRatio(40)
  }
});

export default styles;
