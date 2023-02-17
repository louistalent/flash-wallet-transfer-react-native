import React, { memo } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../theme/colors";
import { hScaleRatio, wScale } from "../utils/scailing";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BoxShadow } from 'react-native-shadow'
import { mnemonic } from "../consts/const";


export default memo(({ style, onPress, data = mnemonic }) => {

    return (
        <View style={defStyle.container}>
            <View style={defStyle.rowStyle}>
                <TouchableOpacity style={defStyle.btnStyle} onPress={() => { onPress(data[1]) }} >
                    <Text style={defStyle.numberText}>{data[1]}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={defStyle.btnStyle} onPress={() => { onPress(data[2]) }} >
                    <Text style={defStyle.numberText}>{data[2]}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={defStyle.btnStyle} onPress={() => { onPress(data[3]) }}>
                    <Text style={defStyle.numberText}>{data[3]}</Text>
                </TouchableOpacity>
            </View>
            <View style={defStyle.rowStyle}>
                <TouchableOpacity style={defStyle.btnStyle} onPress={() => { onPress(data[4]) }} >
                    <Text style={defStyle.numberText}>{data[4]}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={defStyle.btnStyle} onPress={() => { onPress(data[5]) }} >
                    <Text style={defStyle.numberText}>{data[5]}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={defStyle.btnStyle} onPress={() => { onPress(data[6]) }}>
                    <Text style={defStyle.numberText}>{data[6]}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
});

const defStyle = StyleSheet.create({
    container: {
        width: '100%',
        height: hScaleRatio(144),
        backgroundColor: 'rgba(23, 23, 26, 0.02)',
        borderRadius: 8,
        marginTop: hScaleRatio(20),
        justifyContent: 'center'
    },
    rowStyle: {
        flexDirection: 'row',
        marginTop: hScaleRatio(10)
    },
    btnStyle: {
        flex: 1,
        borderRadius: wScale(5),
        height: hScaleRatio(40),
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: wScale(10)
    },
    numberText: {
        width: '100%',
        fontFamily: "Inter",
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 24,
        textAlign: 'center',
        color: colors.black
    },
    smallText: {
        position: 'absolute',
        bottom: hScaleRatio(-3),
        width: '100%',
        fontFamily: "Inter",
        fontSize: 10,
        fontWeight: "700",
        lineHeight: 30,
        textAlign: 'center',
        color: colors.black
    },
    backspace: {
        fontSize: 24
    }
});
