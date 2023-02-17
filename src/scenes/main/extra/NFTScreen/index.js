import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import BackButton from '../../../../components/BackButton';
import ProfileMenuItem from '../../../../components/ProfileMenuItem';
import { profileMenu } from '../../../../consts/const';
import NFTItem from '../../../../components/NFTItem';

const NFTScreen = props => {
    const onPressBack = () => {
        props.navigation.goBack();
    }

    const onPressNFT = () => {
        props.navigation.navigate("NotificationScreen");
    }

    return (
        <ScrollView style={styles.container}>
            <BackButton onPress={onPressBack} />
            <Text style={styles.title}>
                NFT
            </Text>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={onPressNFT}>
                    <NFTItem />
                </TouchableOpacity>
                <TouchableOpacity>
                    <NFTItem />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NFTScreen);
