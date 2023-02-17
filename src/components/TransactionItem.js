import React, { memo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import colors from "../theme/colors";
import { hScaleRatio, wScale } from "../utils/scailing";
import SentIcon from '../../assets/sent.svg'
import ReceiveIcon from '../../assets/received.svg';


export default memo(({ style, active = false, size = 48, imgUri = "", transactionData = false, sent = true }) => {

    const defStyle = StyleSheet.create({
        container: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: colors.white,
            borderRadius: 12,
            padding: wScale(2)
        },
        image: {
            width: wScale(size),
            height: hScaleRatio(size),
            backgroundColor: 'transparent',
            borderColor: active ? colors.green : colors.none,
            borderWidth: active ? size > 40 ? 2 : 1 : 0,
            width: wScale(size),
            height: hScaleRatio(size),
            borderRadius: wScale(size / 2),
            alignItems: 'center',
            justifyContent: 'center'
        },
        nameText: {
            fontFamily: "Inter",
            fontSize: 16,
            fontWeight: "400",
            lineHeight: 24,
            textAlign: 'left',
            color: colors.black
        },
    });
    return (
        <View style={defStyle.container}>
            <Image style={[defStyle.image, style]} source={{ uri: 'https://reactjs.org/logo-og.png' }} />
            <View style={{ justifyContent: 'space-between' }}>
                <Text style={defStyle.nameText}>
                    Annette Black
                </Text>
                <Text>
                    24 May,2020
                </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                {sent == true ?
                    <SentIcon />
                    :
                    <ReceiveIcon />}
                <Text>
                    $396.84
                </Text>
            </View>
        </View>

    );
});
