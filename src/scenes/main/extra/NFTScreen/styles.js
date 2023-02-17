import { StyleSheet } from 'react-native';
import colors from '../../../../theme/colors';
import { hScaleRatio, wScale } from '../../../../utils/scailing';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'F7FDFF',
        paddingHorizontal: wScale(20),
        paddingTop: hScaleRatio(32),
    },
    tabBar: {
        height: hScaleRatio(40)
    },
    title: {
        width: '100%',
        fontFamily: "Inter",
        fontSize: 28,
        fontWeight: "600",
        lineHeight: 34,
        color: colors.black,
        textAlign: 'left',
        marginTop: hScaleRatio(22),
        marginBottom: hScaleRatio(20)
    },
}
);

export default styles;
