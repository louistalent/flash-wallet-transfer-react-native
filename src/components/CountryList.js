import React, { memo } from "react";
import { StyleSheet, TouchableOpacity, TextInput, View, Text } from "react-native";
import colors from "../theme/colors";
import { hScaleRatio, wScale } from "../utils/scailing";
import SearchIcon from "../../assets/search.svg";
import { countryMenu } from "../consts/const";
import TaiwanIcon from "../../assets/country/taiwan.svg";
import TogoIcon from "../../assets/country/togo.svg";

export default memo(({ style, onPress, countryMode }) => {

    return (
        <View style={defStyle.container}>
            {countryMode == countryMenu.taiwan &&
                <View style={defStyle.item}>
                    <TaiwanIcon />
                    <Text style={defStyle.itemText}>
                        Taïwan  - TWD
                    </Text>
                </View>
            }
            {countryMode == countryMenu.togo &&
                <View style={defStyle.item}>
                    <TogoIcon />
                    <Text style={defStyle.itemText}>
                        Togo - XOF
                    </Text>
                </View>
            }

        </View>
    );
});

const defStyle = StyleSheet.create({
    container: {
        borderRadius: wScale(15),
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginVertical: hScaleRatio(10)
    },
    icon: {
        fontSize: 24,
    },
    itemText: {
        position: 'absolute',
        left: wScale(70),
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: "600",
        lineHeight: 20,
        color: colors.black,
        textAlign: 'left',
    },
    item: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});
