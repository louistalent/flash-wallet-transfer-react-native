import React, { memo } from "react";
import { StyleSheet, TouchableOpacity, TextInput, View, Text } from "react-native";
import colors from "../theme/colors";
import { hScaleRatio, wScale } from "../utils/scailing";
import SearchIcon from "../../assets/search.svg";

export default memo(({ style, onPress }) => {

    return (
        <View style={defStyle.container}>
            <TextInput style={defStyle.searchInput} placeholder='Search contacts...'>
            </TextInput>
            <TouchableOpacity style={defStyle.searchButton}>
                <SearchIcon />
            </TouchableOpacity>
        </View>
    );
});

const defStyle = StyleSheet.create({
    container: {
        borderRadius: wScale(15),
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    searchInput: {
        backgroundColor: colors.grayBorderColor,
        borderWidth: 1,
        width: '100%',
        height: hScaleRatio(38),
        borderRadius: wScale(5),
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchButton: {
        position: 'absolute',
    },
    icon: {
        fontSize: 24,
    }
});
