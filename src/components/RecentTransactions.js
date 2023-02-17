import React, { memo, useRef, useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View, FlatList } from "react-native";
import colors from "../theme/colors";
import { hScaleRatio, wScale } from "../utils/scailing";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BoxShadow } from 'react-native-shadow';
import TransactionItem from "./TransactionItem";
import { transactionItemLists } from "../consts/const";

export default memo(({ style, onPress }) => {
    const transactionRef = useRef(null);
    const data = transactionItemLists;

    const onTransactionItemPress = (tournamentId) => {
    };

    const renderTransactionItem = (item) => {
        return (<TransactionItem style={defStyle.transactionItem} sent={item.item.sent} />);
    };

    const renderSeparator = () => {
        return <View style={{ height: 15 }} />;
    };

    return (
        <View style={defStyle.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={defStyle.title}>
                    Recent Transactions
                </Text>
                <TouchableOpacity>
                    <Text style={defStyle.blueTxt}>
                        See All
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                ref={transactionRef}
                style={defStyle.historyContainer}
                nestedScrollEnabled
                data={data}
                renderItem={renderTransactionItem}
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
        height: hScaleRatio(335),
        padding: wScale(20)
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
    transactionItem: {

    }


});
