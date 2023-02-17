import React, { memo } from "react";
import { GestureResponderEvent, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import colors from "../theme/colors";
import { hScaleRatio, wScale } from "../utils/scailing";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BoxShadow } from 'react-native-shadow'


export default memo(({ style, onPress }) => {

    const shadowOpt = {
        width: wScale(47),
        height: hScaleRatio(47),
        color: colors.white,
        border: 2,
        radius: 3,
        opacity: 0.2,
        x: 0,
        y: 3,
        style: { marginVertical: 5 }
    }


    return (
        <BoxShadow setting={shadowOpt}>
            <TouchableOpacity style={[defStyle.container, style]} onPress={onPress}>
                <Ionicons
                    name="arrow-back-outline"
                    style={defStyle.icon} />
            </TouchableOpacity>
        </BoxShadow>
    );
});

const defStyle = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%',
        borderRadius: wScale(15),
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        fontSize: 24,
    }
});
