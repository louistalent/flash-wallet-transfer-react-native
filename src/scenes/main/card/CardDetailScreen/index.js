import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { ScrollView } from 'react-navigation';

const BankTransfer = props => {

    const onPressBack = () => {
        props.navigation.goBack();
    }
    return (
        <ScrollView style={styles.container}>

        </ScrollView>
    );
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BankTransfer);
