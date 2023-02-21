import { StyleSheet } from 'react-native';
import colors from '../../../../theme/colors';
import { hScaleRatio, wScale } from '../../../../utils/scailing';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    },
    tabBar: {
        height: hScaleRatio(40)
    },
    title: {
        marginTop: hScaleRatio(20),
        width: '100%',
        fontFamily: "Inter",
        fontSize: 28,
        fontWeight: "600",
        lineHeight: 34,
        color: colors.black,
        textAlign: 'center',
    },
    subTitle: {
        marginTop: hScaleRatio(20),
        width: '100%',
        fontFamily: "Inter",
        fontSize: 20,
        fontWeight: "600",
        lineHeight: 24,
        color: colors.black,
        textAlign: 'left',
    },
    leftText: {
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 24,
        textAlign: 'left',
        color: '#6A6A6A'
    },
    rightText: {
        fontFamily: "Inter",
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 17,
        textAlign: 'left',
        color: colors.black
    },
    textGroup: {
        marginTop: hScaleRatio(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    btnContinue: {
        marginTop: hScaleRatio(20),
        width: '100%',
        height: hScaleRatio(50),
        borderRadius: 6,
        backgroundColor: colors.primary,
        justifyContent: 'center'
    },
    btnBack: {
        marginTop: hScaleRatio(20),
        width: '100%',
        height: hScaleRatio(50),
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#6A6A6A',
        backgroundColor: colors.primary,
        justifyContent: 'center'
    },
    btnText: {
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 24,
        textAlign: 'center',
        color: colors.black
    },
    trackingText: {
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: "500",
        textAlign: 'center',
        color: colors.radioBtnColor
    },
    tracking: {
        flexDirection: 'row',
        marginTop: hScaleRatio(20),
        width: '100%',
        height: hScaleRatio(50),
        borderRadius: 12,
        backgroundColor: 'rgba(93, 95, 239, 0.1)',
        justifyContent: 'space-around',
        alignItems: 'center',
    }

}
);

export default styles;
