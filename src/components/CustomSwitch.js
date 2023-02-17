import React, { memo, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Defs } from "react-native-svg";
import colors from "../theme/colors";
import { hScaleRatio, wScale } from "../utils/scailing";

export default memo(({
    selectionMode,
    onSelectSwitch,
}) => {
    const [getSelectionMode, setSelectionMode] = useState(selectionMode);

    const updatedSwitchData = val => {
        setSelectionMode(val);
        onSelectSwitch(val);
    };

    return (
        <View >
            {getSelectionMode == 1 ?
                <View style={defStyle.switchArea_active}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => updatedSwitchData(2)}
                        style={defStyle.switch_button}>
                    </TouchableOpacity>
                </View>
                : <View style={defStyle.switchArea_inactive}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => updatedSwitchData(1)}
                        style={defStyle.switch_button}>
                    </TouchableOpacity>
                </View>
            }
        </View >
    );
});


const defStyle = StyleSheet.create({
    switchArea_active: {
        width: wScale(68),
        height: hScaleRatio(32),
        borderRadius: 8,
        backgroundColor: colors.primary,
        paddingHorizontal: wScale(4),
        paddingVertical: hScaleRatio(4)
    },
    switchArea_inactive: {
        width: wScale(68),
        height: hScaleRatio(32),
        borderRadius: 8,
        backgroundColor: colors.primary,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: wScale(4),
        paddingVertical: hScaleRatio(4)
    },
    switch_button: {
        width: wScale(24),
        height: hScaleRatio(24),
        backgroundColor: 'white',
        borderRadius: 8
    }

});
