import { StyleSheet } from 'react-native';
import colors from '../../../../theme/colors';
import { hScaleRatio, wScale } from '../../../../utils/scailing';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'F7FDFF'
    },
    tabBar: {
        height: hScaleRatio(40)
    },
    title: {
        marginTop: hScaleRatio(20),
        width: '100%',
        fontFamily: "Inter",
        fontSize: 20,
        fontWeight: "600",
        lineHeight: 24,
        color: colors.black,
        textAlign: 'left',
    },
    loginText: {
        width: '100%',
        fontFamily: "Inter",
        fontSize: 28,
        fontWeight: "600",
        lineHeight: 34,
        textAlign: 'left',
        color: colors.titleTextColor
    },
    transactionPanel: {
        backgroundColor: colors.white,
        width: '100%',
        height: hScaleRatio(572),
        paddingHorizontal: wScale(32),
        paddingTop: hScaleRatio(50),
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center'
    },
    amountPanel: {
        width: '100%',
        height: hScaleRatio(81),
        borderWidth: 1,
        borderRadius: 8,
        borderColor: colors.grayBorderColor,
        padding: 8,
    },
    amountInput: {
        fontFamily: "Inter",
        fontSize: 24,
        fontWeight: "800",
        lineHeight: 48,
        textAlign: 'left',
        color: colors.black
    },
    amountText: {
        fontFamily: "Inter",
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 17,
        textAlign: 'left',
        color: colors.black
    },
    busdText: {
        fontFamily: "Inter",
        fontSize: 18,
        fontWeight: "500",
        lineHeight: 28,
        textAlign: 'left',
        color: colors.primary
    },
    eurText: {
        fontFamily: "Inter",
        fontSize: 18,
        fontWeight: "500",
        lineHeight: 28,
        textAlign: 'left',
        color: colors.black
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
    btnText: {
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 24,
        textAlign: 'center',
        color: colors.white
    },
    lineStyle: {
        width: '100%',
        marginTop: hScaleRatio(20),
        marginBottom: hScaleRatio(10),
        borderBottomColor: colors.grayBorderColor,
        borderBottomWidth: StyleSheet.hairlineWidth
    }
}
);

export default styles;
