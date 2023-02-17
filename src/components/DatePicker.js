import React, { memo, useState } from 'react';
import {
    View, Image, StyleSheet, TouchableOpacity, TextInput
} from 'react-native';
import colors from '../theme/colors';
import { hScaleRatio, wScale } from '../utils/scailing';
import { Dropdown } from 'react-native-element-dropdown';


export default memo((style, onPress) => {
    const [value, setValue] = useState("1");
    const renderItem = (item) => {
        return (
            <View style={defStyle.item} >
                <Text style={defStyle.text} numberOfLines={1} ellipsizeMode={"tail"}>{item.label}</Text>
            </View>
        )
    };

    return (<View style={defStyle.container}>
        <Dropdown
            style={defStyle.dropdown}
            containerStyle={defStyle.containerStyle}
            data={[{ label: 'asdf', value: 'asdf' }]}
            labelField="label"
            valueField="value"
            maxHeight={hScaleRatio(400)}
            placeholderStyle={defStyle.placeholderStyle}
            selectedTextStyle={defStyle.selectedTextStyle}
            selectedTextProps={{ numberOfLines: 1, ellipsizeMode: "tail" }}
            placeholder={"year"}
            onChange={item => {
                setValue(item.value);
            }}
            renderItem={renderItem}
        />
        <Dropdown
            statusBarIsTranslucent={true}
            style={defStyle.dropdown}
            containerStyle={defStyle.containerStyle}
            data={['123123', '123123', '123123', '123123', '123123',]}
            labelField="label"
            valueField="value"
            maxHeight={hScaleRatio(400)}
            placeholderStyle={defStyle.placeholderStyle}
            selectedTextStyle={defStyle.selectedTextStyle}
            selectedTextProps={{ numberOfLines: 1, ellipsizeMode: "tail" }}
            value={value}
            placeholder={"All"}
            onChange={item => {
                setValue(item.value);
            }}
            renderItem={renderItem}
        />
        <Dropdown
            statusBarIsTranslucent={true}
            style={defStyle.dropdown}
            containerStyle={defStyle.containerStyle}
            data={['123123', '123123', '123123', '123123', '123123',]}
            labelField="label"
            valueField="value"
            maxHeight={hScaleRatio(400)}
            placeholderStyle={defStyle.placeholderStyle}
            selectedTextStyle={defStyle.selectedTextStyle}
            selectedTextProps={{ numberOfLines: 1, ellipsizeMode: "tail" }}
            value={value}
            placeholder={"All"}
            onChange={item => {
                setValue(item.value);
            }}
            renderItem={renderItem}
        />
    </View>
    );
});

const defStyle = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        height: hScaleRatio(53),
        borderRadius: 5,
        backgroundColor: colors.white,
        alignItems: 'center',
        paddingVertical: 10
    },
    lineStyle: {
        width: 0.1,
        height: '100%',
        backgroundColor: colors.grayTxtColor
    },
    textInput: {
        height: hScaleRatio(50),
        padding: 20
    },
    arrow: {
        fontSize: 14,
        color: colors.white,
    },
    dropdown: {
        backgroundColor: 'transparent',
        borderRadius: wScale(5),
        borderColor: colors.grayTxtColor,
        borderWidth: 1,
        paddingHorizontal: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    textItem: {
        fontFamily: "Noto Sans",
        fontSize: 12,
        textAlign: 'center'
    },
    item: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: colors.background,
        borderWidth: 1,
        borderColor: colors.onBg,
        height: hScaleRatio(40),
        paddingHorizontal: wScale(6)
    },
    selectedTextStyle: {
        color: colors.white,
        fontSize: 12,
        textAlign: "center",
    },
    placeholderStyle: {
        color: colors.white,
        fontSize: 12,
        textAlign: "center",
    }
});
