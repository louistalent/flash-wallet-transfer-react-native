import React, { memo } from "react";
import { StyleSheet, TouchableOpacity, TextInput, View, Text } from "react-native";
import colors from "../theme/colors";
import { hScaleRatio, wScale } from "../utils/scailing";
import SearchIcon from "../../assets/search.svg";

export default memo(({ style, onPress }) => {

    return (
        <View style={[defStyle.container, style]}>
            <View style={defStyle.searchButton}>
                <TouchableOpacity >
                    <SearchIcon />
                </TouchableOpacity>
            </View>
            <TextInput style={defStyle.searchInput} placeholder='Search Language'>
            </TextInput>

        </View>
    );
});

const defStyle = StyleSheet.create({
    container: {
        borderRadius: wScale(15),
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        flex: 1
    },
    searchInput: {
        backgroundColor: colors.white,
        flex: 8,
        height: hScaleRatio(38),
        borderTopRightRadius: wScale(5),
        borderBottomRightRadius: wScale(5),
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchButton: {
        flex: 1,
        backgroundColor: colors.white,
        height: hScaleRatio(38),
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: wScale(5),
        borderBottomLeftRadius: wScale(5),
    },
    icon: {
        fontSize: 24,
    }
});
