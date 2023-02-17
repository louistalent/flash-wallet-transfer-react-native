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
        textAlign: 'center',
        marginBottom: hScaleRatio(20)
    },
    name: {
        width: '100%',
        fontFamily: "Inter",
        fontSize: 28,
        fontWeight: "600",
        lineHeight: 34,
        color: colors.black,
        textAlign: 'center',
        marginTop: hScaleRatio(20)
    },
    phone: {
        width: '100%',
        fontFamily: "Inter",
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 17,
        color: colors.grayTxtColor,
        textAlign: 'center',
        marginTop: hScaleRatio(10)
    },
    profileGroup: {
        width: '100%',
        alignItems: 'center'
    }
}
);

export default styles;
