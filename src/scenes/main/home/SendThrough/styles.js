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
        marginVertical: hScaleRatio(32),
        width: '100%',
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: "600",
        lineHeight: 34,
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
    errorText: {
        fontFamily: "Inter",
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 20,
        textAlign: 'center',
        color: colors.grayTxtColor
    },
    subTitle: {
        width: '100%',
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 25,
        textAlign: 'left',
        color: colors.grayTxtColor

    },

    btnContinue: {
        marginTop: hScaleRatio(20),
        width: '100%',
        height: hScaleRatio(50),
        borderRadius: 6,
        backgroundColor: colors.primary,
        justifyContent: 'center'
    },
    btnAddNew: {
        marginTop: hScaleRatio(20),
        width: wScale(158),
        height: hScaleRatio(50),
        borderRadius: 6,
        backgroundColor: colors.primary,
        justifyContent: 'center'
    },
    btnAddFrom: {
        marginTop: hScaleRatio(20),
        width: wScale(158),
        height: hScaleRatio(50),
        borderRadius: 6,
        backgroundColor: colors.white,
        justifyContent: 'center'
    },
    btnAddFromText: {
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 24,
        textAlign: 'center',
        color: colors.grayTxtColor
    },
    btnText: {
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 24,
        textAlign: 'center',
        color: colors.white
    },
    error: {
        width: '100%',
        height: hScaleRatio(34),
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: colors.errorColor,
        marginTop: hScaleRatio(32),
        borderRadius: 6
    },
    textInput: {
        borderRadius: 5,
        width: '100%',
        borderWidth: 1,
        borderColor: '#DDDDDD',
        marginTop: hScaleRatio(10)
    },
    addNewContact: {
        width: '100%',
        height: hScaleRatio(300),
        marginTop: hScaleRatio(5),
        borderRadius: 18,
        backgroundColor: colors.white,
        padding: wScale(24)
    }
}


);

export default styles;
