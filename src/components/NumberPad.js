import React, { memo } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../theme/colors";
import { hScaleRatio, wScale } from "../utils/scailing";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BoxShadow } from 'react-native-shadow'


export default memo(({ style, onPress }) => {

    return (
        <View style={defStyle.container}>
            <View style={defStyle.rowStyle}>
                <TouchableOpacity style={defStyle.btnStyle} onPress={() => { onPress("1") }} >
                    <Text style={defStyle.numberText}>1</Text>
                    <Text style={defStyle.smallText}></Text>
                </TouchableOpacity>
                <TouchableOpacity style={defStyle.btnStyle} onPress={() => { onPress("2") }} >
                    <Text style={defStyle.numberText}>2</Text>
                    <Text style={defStyle.smallText}>ABC</Text>
                </TouchableOpacity>
                <TouchableOpacity style={defStyle.btnStyle} onPress={() => { onPress("3") }}>
                    <Text style={defStyle.numberText}>3</Text>
                    <Text style={defStyle.smallText}>DEF</Text>
                </TouchableOpacity>
            </View>
            <View style={defStyle.rowStyle}>
                <TouchableOpacity style={defStyle.btnStyle} onPress={() => { onPress("4") }} >
                    <Text style={defStyle.numberText}>4</Text>
                    <Text style={defStyle.smallText}>GHI</Text>
                </TouchableOpacity>
                <TouchableOpacity style={defStyle.btnStyle} onPress={() => { onPress("5") }}>
                    <Text style={defStyle.numberText}>5</Text>
                    <Text style={defStyle.smallText}>JKL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={defStyle.btnStyle} onPress={() => { onPress("6") }}>
                    <Text style={defStyle.numberText}>6</Text>
                    <Text style={defStyle.smallText}>MNO</Text>
                </TouchableOpacity>
            </View>
            <View style={defStyle.rowStyle}>
                <TouchableOpacity style={defStyle.btnStyle} onPress={() => { onPress("7") }}>
                    <Text style={defStyle.numberText}>7</Text>
                    <Text style={defStyle.smallText}>PQRS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={defStyle.btnStyle} onPress={() => { onPress("8") }}>
                    <Text style={defStyle.numberText}>8</Text>
                    <Text style={defStyle.smallText}>TUV</Text>
                </TouchableOpacity>
                <TouchableOpacity style={defStyle.btnStyle} onPress={() => { onPress("9") }}>
                    <Text style={defStyle.numberText}>9</Text>
                    <Text style={defStyle.smallText}>WXYZ</Text>
                </TouchableOpacity>
            </View>
            <View style={defStyle.rowStyle}>
                <View style={{ flex: 1, margin: wScale(10) }} onPress={() => { onPress("0") }}>
                </View>
                <TouchableOpacity style={defStyle.btnStyle} >
                    <Text style={defStyle.numberText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={defStyle.btnStyle} >
                    <Ionicons name="backspace-outline" style={defStyle.backspace} />
                </TouchableOpacity>
            </View>
        </View>
    );
});

const defStyle = StyleSheet.create({
    container: {
        width: '100%',
        height: hScaleRatio(320),
        backgroundColor: 'rgba(0,0,0,0.1)',
    },
    rowStyle: {
        flexDirection: 'row',
        marginTop: hScaleRatio(10)
    },
    btnStyle: {
        flex: 1,
        borderRadius: wScale(5),
        height: hScaleRatio(53),
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: wScale(10)
    },
    numberText: {
        width: '100%',
        fontFamily: "Inter",
        fontSize: 25,
        fontWeight: "400",
        lineHeight: 30,
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
