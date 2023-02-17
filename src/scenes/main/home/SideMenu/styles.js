import { StyleSheet } from 'react-native';
import colors from '../../../../theme/colors';
import { hScaleRatio, wScale } from '../../../../utils/scailing';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        width: '100%',
        height: '100%',
        borderRadius: wScale(15),
        backgroundColor: colors.white,
        paddingHorizontal: wScale(20),
        paddingTop: hScaleRatio(32),
        borderRadius: 25
    },
    rowStyle: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginTop: hScaleRatio(10)
    },
    name: {
        marginTop: hScaleRatio(15),
        fontFamily: "Inter",
        fontSize: 20,
        fontWeight: "600",
        lineHeight: 24,
        textAlign: 'left',
        color: colors.black
    },
    menuText: {
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: "600",
        lineHeight: 20,
        textAlign: 'left',
        color: '#1E1E1E',
        marginLeft: wScale(10)

    },
    email: {
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 24,
        textAlign: 'left',
        color: colors.black,
        marginBottom: hScaleRatio(20)
    },
    logout: {
        width: wScale(150),
        height: hScaleRatio(50),
        borderRadius: hScaleRatio(30),
        backgroundColor: '#FF3E24',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: wScale(30),
        marginTop: hScaleRatio(30)
    },
    btnText: {
        fontFamily: "Inter",
        fontSize: 18,
        fontWeight: "500",
        lineHeight: 24,
        textAlign: 'left',
        color: colors.white,
        marginLeft: wScale(10)
    }
}
);

export default styles;
