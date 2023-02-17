import React, { memo, useRef, useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View, FlatList } from "react-native";
import colors from "../theme/colors";
import { hScaleRatio, wScale } from "../utils/scailing";
import ContactItem from "./ContactItem";
import { contactItemLists } from "../consts/const";

export default memo(({ style, onPress }) => {
    const contactRef = useRef(null);
    const data = contactItemLists;

    const renderContactItem = (item) => {
        return (<ContactItem style={defStyle.contactItem} size={45} sent={item.item.sent} />);
    };

    const renderSeparator = () => {
        return <View style={{ height: 15 }} />;
    };

    return (
        <View style={defStyle.container}>
            <FlatList
                ref={contactRef}
                style={defStyle.historyContainer}
                data={data}
                renderItem={renderContactItem}
                ItemSeparatorComponent={renderSeparator}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </View>
    );
});

const defStyle = StyleSheet.create({
    container: {
        width: '100%',
        height: hScaleRatio(309),
    },
    title: {
        fontFamily: "Inter",
        fontSize: 20,
        fontWeight: "600",
        lineHeight: 24,
        color: colors.black,
        textAlign: 'left',
    },
    blueTxt: {
        fontFamily: "Inter",
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 18,
        color: colors.subTitleColor,
        textAlign: 'left',
    },
    historyContainer: {
        width: '100%',
        marginTop: hScaleRatio(20),
    },
    contactItem: {

    }


});
