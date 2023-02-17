import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import MenuIcon from '../../../../../assets/menu.svg';
import RingIcon from '../../../../../assets/ring.svg';
import SwapIcon from '../../../../../assets/swap.svg';
import { hScaleRatio, wScale } from '../../../../utils/scailing';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import colors from '../../../../theme/colors';
import { ScrollView } from 'react-native-gesture-handler';
import RecentTransactions from '../../../../components/RecentTransactions';

const TransferScreen = props => {
    const [value, onChangeText] = React.useState('0');

    const onPressMenu = () => {
        props.navigation.openDrawer();
    }

    return (
        <ScrollView style={styles.container}>
            <View style={{ padding: wScale(20) }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={onPressMenu}>
                        <MenuIcon />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <RingIcon />
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>
                    Flash Transfer
                </Text>
            </View>
            <View style={styles.transactionPanel}>
                <View style={styles.amountPanel}>
                    <Text style={styles.amountText}>
                        Amount Send
                    </Text>
                    <TextInput editable value={value} style={styles.amountInput}></TextInput>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: hScaleRatio(20), alignItems: 'center' }}>
                    <TouchableOpacity>
                        <SwapIcon />
                    </TouchableOpacity>
                    <View style={{ position: 'absolute', left: wScale(30), flexDirection: 'row' }}>
                        <Text style={styles.busdText}>
                            1BUSD
                        </Text>
                        <Text style={styles.eurText}>
                            =1EUR
                        </Text>
                    </View>
                </View>
                <View style={styles.amountPanel}>
                    <Text style={styles.amountText}>
                        Amount Send
                    </Text>
                    <TextInput editable value={value} style={styles.amountInput}></TextInput>
                </View>
                <View style={styles.textGroup}>
                    <Text style={styles.leftText}>
                        Fee
                    </Text>
                    <Text style={styles.rightText}>
                        +2.50BUSD
                    </Text>
                </View>
                <View style={styles.textGroup}>
                    <Text style={styles.leftText}>
                        Transer Time
                    </Text>
                    <Text style={styles.rightText}>
                        1Min
                    </Text>
                </View>

                <View style={styles.lineStyle} >
                </View>

                <View style={styles.textGroup}>
                    <Text style={styles.leftText}>
                        Total to pay
                    </Text>
                    <Text style={styles.rightText}>
                        +102.50 BUSD
                    </Text>
                </View>
                <View style={styles.textGroup}>
                    <Text style={styles.leftText}>
                        recipient Gets
                    </Text>
                    <Text style={styles.rightText}>
                        100.00 EUR
                    </Text>
                </View>
                <TouchableOpacity style={styles.btnContinue}>
                    <Text style={styles.btnText}>
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>

            <RecentTransactions />
        </ScrollView>
    );
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TransferScreen);
