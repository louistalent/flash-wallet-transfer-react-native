import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import BackButton from '../../../../components/BackButton';
import ProfileMenuItem from '../../../../components/ProfileMenuItem';
import { countryMenu } from '../../../../consts/const';
import LanguageSearch from '../../../../components/LanguageSearch';
import { hScale, hScaleRatio } from '../../../../utils/scailing';
import CountryList from '../../../../components/CountryList';

const CardScreen = props => {

    const onPressBack = () => {
        props.navigation.goBack();
    }
    const onPressTaiwan = () => {
        props.navigation.navigate('NFTScreen');
    }
    return (
        <ScrollView style={styles.container}>
            <BackButton onPress={onPressBack} />
            <LanguageSearch style={{ marginTop: hScaleRatio(10) }} />
            <TouchableOpacity onPress={onPressTaiwan}>
                <CountryList countryMode={countryMenu.taiwan} />
            </TouchableOpacity>
            <TouchableOpacity>
                <CountryList countryMode={countryMenu.togo} />
            </TouchableOpacity>
        </ScrollView>
    );
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CardScreen);
