import { StyleSheet } from 'react-native';
import colors from '../../../../theme/colors';
import { hScaleRatio, width, wScale } from '../../../../utils/scailing';

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
        fontFamily: "Inter",
        fontSize: 28,
        fontWeight: "600",
        lineHeight: 34,
        color: colors.black,
        textAlign: 'left',
        marginTop: hScaleRatio(22),
        marginBottom: hScaleRatio(20)
    },
    successGroup: {
        marginTop: hScaleRatio(3),
        flexDirection: 'row',
        backgroundColor: colors.white,
        width: '100%',
        height: hScaleRatio(63),
        alignItems: 'center',
        paddingHorizontal: wScale(10)
    },
    failedGroup: {
        marginTop: hScaleRatio(3),
        flexDirection: 'row',
        backgroundColor: colors.white,
        width: '100%',
        height: hScaleRatio(63),
        alignItems: 'center',
        paddingHorizontal: wScale(10)
    },
    successText: {
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: "600",
        lineHeight: 20,
        color: '#10AE3A',
        textAlign: 'left',
    },
    inviteText: {
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: "600",
        lineHeight: 20,
        color: '#F9A000',
        textAlign: 'left',
    },
    failedText: {
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: "600",
        lineHeight: 20,
        color: '#FF0000',
        textAlign: 'left',
    },
    normalText: {
        fontFamily: "Inter",
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 18,
        color: colors.grayTxtColor,
        textAlign: 'left',
    }
}
);

export default styles;
