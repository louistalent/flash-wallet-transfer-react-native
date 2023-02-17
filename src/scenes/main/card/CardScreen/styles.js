import { StyleSheet } from 'react-native';
import colors from '../../../../theme/colors';
import { hScaleRatio, wScale } from '../../../../utils/scailing';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    tabBar: {
        height: hScaleRatio(40)
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        marginTop: hScaleRatio(20),
        backgroundColor: '#EFF3F8',
        width: '100%',
        flexDirection: 'row',
        height: hScaleRatio(56),
        borderRadius: 10,
        padding: wScale(10),
        alignItems: 'center'
    },
    subTitle: {
        width: '100%',
        fontFamily: "Inter",
        fontSize: 20,
        fontWeight: "600",
        lineHeight: 24,
        color: colors.black,
        textAlign: 'left',
    },
    itemText: {
        marginLeft: wScale(20),
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: "600",
        lineHeight: 24,
        color: colors.black,
        textAlign: 'left',
    },
    modal: {
        width: '100%',
        height: '70%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: colors.white,
        padding: wScale(20)
    },
    mainStyle: {
        width: '100%',
        height: '30%',
        padding: wScale(20)
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
    title1: {
        width: '100%',
        fontFamily: "Inter",
        fontSize: 28,
        fontWeight: "600",
        lineHeight: 34,
        color: colors.black,
        textAlign: 'left',
    }
}
);

export default styles;
