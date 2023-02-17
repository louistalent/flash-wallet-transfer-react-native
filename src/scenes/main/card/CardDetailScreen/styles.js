import { StyleSheet } from 'react-native';
import colors from '../../../../theme/colors';
import { hScaleRatio, wScale } from '../../../../utils/scailing';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'F7FDFF',
        paddingHorizontal: wScale(20),
        paddingTop: hScaleRatio(20),
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
        textAlign: 'left',
    },
    explain: {
        marginTop: hScaleRatio(20),
        width: '100%',
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 24,
        color: colors.grayTxtColor,
        textAlign: 'left',
    },
    subTitle: {
        fontFamily: "Inter",
        fontSize: 20,
        fontWeight: "600",
        lineHeight: 24,
        color: colors.grayTxtColor,
        textAlign: 'left',
    },
    senderDetail: {
        padding: wScale(20),
        marginTop: hScaleRatio(20),
        borderRadius: 18,
        width: '100%',
        height: hScaleRatio(200),
        backgroundColor: colors.white
    },
    receiverDetail: {
        padding: wScale(20),
        marginTop: hScaleRatio(20),
        borderRadius: 18,
        width: '100%',
        height: hScaleRatio(330),
        backgroundColor: colors.white
    },
    transferDetail: {
        padding: wScale(20),
        marginTop: hScaleRatio(20),
        borderRadius: 18,
        width: '100%',
        height: hScaleRatio(268),
        backgroundColor: colors.white
    },
    editBtn: {
        width: wScale(20),
        height: hScaleRatio(20),
        borderRadius: 4,
        backgroundColor: colors.radioBtnColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lineStyle: {
        marginVertical: hScaleRatio(10),
        borderBottomColor: colors.grayTxtColor,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    kycBtn: {
        width: wScale(53),
        height: hScaleRatio(38),
        backgroundColor: '#4AD66F',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: wScale(19)
    },
    kycText: {
        fontFamily: "Inter",
        fontSize: 14,
        fontWeight: "600",
        lineHeight: 24,
        color: '#34A853',
        textAlign: 'left',
    },
    name: {
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: "600",
        lineHeight: 24,
        color: '#6A6A6A',
        textAlign: 'left',
    },
    subName: {
        fontFamily: "Inter",
        fontSize: 14,
        fontWeight: "600",
        lineHeight: 24,
        color: '#6A6A6A',
        textAlign: 'left',
    },
    amount: {
        fontFamily: "Inter",
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 24,
        color: colors.black,
        textAlign: 'left',
    },
    result_left: {
        fontFamily: "Inter",
        fontSize: 18,
        fontWeight: "500",
        lineHeight: 24,
        color: colors.subTitleColor,
        textAlign: 'left',
    },
    result_right: {
        fontFamily: "Inter",
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 24,
        color: colors.subTitleColor,
        textAlign: 'left',
    },
    confirmBtn: {
        width: '100%',
        height: hScaleRatio(50),
        borderRadius: 6,
        backgroundColor: '#26C000',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hScaleRatio(20)
    },
    cancelBtn: {
        width: '100%',
        height: hScaleRatio(50),
        borderRadius: 6,
        backgroundColor: '#6A6A6A',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: hScaleRatio(20)
    },
    btnText: {
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 24,
        color: colors.white,
        textAlign: 'left',
    }
}
);

export default styles;
