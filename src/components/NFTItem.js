import React, { memo } from "react";
import { StyleSheet, TouchableOpacity, Image, View, Text } from "react-native";
import colors from "../theme/colors";
import { hScaleRatio, wScale } from "../utils/scailing";
import SearchIcon from "../../assets/search.svg";

export default memo(({ style, onPress }) => {

    return (
        <View style={[defStyle.container, style]}>
            <Image source={require('../../assets/nft/nft1.png')} style={defStyle.image} />
            <Text style={[defStyle.text, { marginTop: hScaleRatio(10) }]}>
                Discount on
            </Text>
            <Text style={defStyle.text}>
                transaction fees -
            </Text>
            <Text style={defStyle.text}>
                Bronze #44
            </Text>
        </View>
    );
});

const defStyle = StyleSheet.create({
    container: {
        borderRadius: wScale(15),
        width: wScale(157),
        height: hScaleRatio(305),
        alignItems: 'center',
        flex: 1,
        backgroundColor: colors.white
    },
    image: {
        width: wScale(157),
        height: hScaleRatio(208)
    },
    text: {
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 27,
        textAlign: 'center',
        color: colors.black
    }
});
