import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import MenuIcon from '../../../../../assets/menu.svg';
import RingIcon from '../../../../../assets/ring.svg';
import { hScaleRatio, wScale } from '../../../../utils/scailing';
import colors from '../../../../theme/colors';
import { ScrollView } from 'react-native-gesture-handler';
import LogoLight from '../../../../../assets/logo_light.svg';
import EyeIcon from '../../../../../assets/eye.svg';
import PhoneIcon from '../../../../../assets/phone.svg';

const FirstScreen = props => {
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
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <LogoLight />
                </View>
                <Text style={styles.title}>
                    Transfer Detail
                </Text>
                <View style={styles.textGroup}>
                    <Text style={styles.leftText}>
                        You Sent
                    </Text>
                    <Text style={styles.rightText}>
                        100 BUSD
                    </Text>
                </View>
                <View style={styles.textGroup}>
                    <Text style={styles.leftText}>
                        Transfer Rate
                    </Text>
                    <Text style={styles.rightText}>
                        1 BUSD = 1 EUR
                    </Text>
                </View>
                <View style={styles.textGroup}>
                    <Text style={styles.leftText}>
                        Fee
                    </Text>
                    <Text style={styles.rightText}>
                        +2.50 EUR
                    </Text>
                </View>
                <View style={styles.textGroup}>
                    <Text style={styles.leftText}>
                        Transfer Time
                    </Text>
                    <Text style={styles.rightText}>
                        1 Min
                    </Text>
                </View>
                <View style={styles.textGroup}>
                    <Text style={styles.leftText}>
                        Recepient Gets
                    </Text>
                    <Text style={styles.rightText}>
                        100.00 EUR
                    </Text>
                </View>
                <View style={styles.textGroup}>
                    <Text style={styles.leftText}>
                        Total to pay
                    </Text>
                    <Text style={styles.rightText}>
                        102.50 BUSD
                    </Text>
                </View>
                <View style={styles.tracking}>
                    <EyeIcon />
                    <Text style={styles.trackingText}>
                        Tracking number (FTN): 771 824 9542
                    </Text>
                </View>
                <Text style={styles.subTitle}>
                    Receiver Instructions
                </Text>
                <View>
                    <Text style={[styles.leftText, { margin: 5 }]}>
                        1. Lorem Ipsum text here
                    </Text>
                    <Text style={[styles.leftText, { margin: 5 }]}>
                        2. Lorem Ipsum text here
                    </Text>
                    <Text style={[styles.leftText, { margin: 5 }]}>
                        3. Lorem Ipsum text here
                    </Text>
                </View>
                <TouchableOpacity style={[styles.btnContinue, { backgroundColor: colors.white }]}>
                    <Text style={styles.btnText}>
                        Track Order
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnBack}>
                    <Text style={styles.btnText}>
                        Back to Home
                    </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', marginTop: hScaleRatio(20), width: '100%' }}>
                    <PhoneIcon />
                    <View>
                        <Text style={{ marginLeft: 10 }}>
                            Don’t miss out on the benefits of the my wu SM problem !
                        </Text>
                        <Text style={{ marginLeft: 10 }}>
                            you can earn point on future transactions. register todat!
                        </Text>
                    </View>
                </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(FirstScreen);
