import React, { memo, useState } from 'react';
import {
    View, Image, StyleSheet, TouchableOpacity, Text
} from 'react-native';
import colors from '../theme/colors';
import { hScaleRatio, wScale } from '../utils/scailing';
import DropDownPicker from 'react-native-dropdown-picker';
import Ionicons from 'react-native-vector-icons/Ionicons'


export default memo((style, placeholderText) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);

    return (
        <View style={defStyle.container}>
            <View style={defStyle.item}>
                <Text style={defStyle.placeholderText}>
                    Year
                </Text>
                <TouchableOpacity style={defStyle.dropBtn}>
                    <Ionicons name="chevron-down-outline" />
                </TouchableOpacity>
            </View>
            <View style={defStyle.item}>
                <Text style={defStyle.placeholderText}>
                    Month
                </Text>
                <TouchableOpacity style={defStyle.dropBtn}>
                    <Ionicons name="chevron-down-outline" />
                </TouchableOpacity>
            </View>
            <View style={defStyle.item}>
                <Text style={defStyle.placeholderText}>
                    Day
                </Text>
                <TouchableOpacity style={defStyle.dropBtn}>
                    <Ionicons name="chevron-down-outline" />
                </TouchableOpacity>
            </View>
        </View>
    );
});

const defStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 5,
        alignItems: 'center',
        paddingVertical: 10,
        justifyContent: 'space-between'
    },
    placeholderText: {
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 24,
        color: '#6B7280',
        textAlign: 'left',
    },
    item: {
        flex: 1,
        marginHorizontal: wScale(10),
        flexDirection: 'row',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#D1D5DB',
        padding: wScale(10),
        alignItems: 'center',
        height: hScaleRatio(53),
    },
    dropBtn: {
        position: 'absolute',
        right: 0,
        width: wScale(30),
    }
});
