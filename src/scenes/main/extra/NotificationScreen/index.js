import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import BackButton from '../../../../components/BackButton';
import ProfileMenuItem from '../../../../components/ProfileMenuItem';
import { profileMenu } from '../../../../consts/const';
import NFTItem from '../../../../components/NFTItem';
import RemoveIcon from '../../../../../assets/remove.svg';
import SuccessIcon from '../../../../../assets/payment_success.svg';
import FailedIcon from '../../../../../assets/payment_failed.svg';
import InviteIcon from '../../../../../assets/invite_friend.svg';
import colors from '../../../../theme/colors';
import { wScale } from '../../../../utils/scailing';

const NFTScreen = props => {

    const onPressBack = () => {
        props.navigation.goBack();
    }


    return (
        <ScrollView style={styles.container}>
            <BackButton onPress={onPressBack} />
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.title}>
                    Notifications
                </Text>
                <TouchableOpacity>
                    <RemoveIcon />
                </TouchableOpacity>
            </View>
            <View style={styles.successGroup}>
                <SuccessIcon />
                <View style={{ marginLeft: wScale(10) }}>
                    <Text style={styles.successText}>
                        Payment sent!
                    </Text>
                    <Text style={styles.normalText}>
                        Your payment #1234 has been send
                    </Text>
                </View>
            </View>
            <View style={styles.failedGroup}>
                <FailedIcon />
                <View style={{ marginLeft: wScale(10) }}>
                    <Text style={styles.failedText}>
                        Payment sent!
                    </Text>
                    <Text style={styles.normalText}>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    </Text>
                </View>
            </View>
            <View style={styles.successGroup}>
                <SuccessIcon />
                <View style={{ marginLeft: wScale(10) }}>
                    <Text style={styles.successText}>
                        Payment sent!
                    </Text>
                    <Text style={styles.normalText}>
                        Your payment #1234 has been send
                    </Text>
                </View>
            </View>
            <View style={styles.failedGroup}>
                <FailedIcon />
                <View style={{ marginLeft: wScale(10) }}>
                    <Text style={styles.failedText}>
                        Payment sent!
                    </Text>
                    <Text style={styles.normalText}>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    </Text>
                </View>
            </View>
            <View style={styles.failedGroup}>
                <InviteIcon />
                <View style={{ marginLeft: wScale(10) }}>
                    <Text style={styles.inviteText}>
                        Invite friend
                    </Text>
                    <Text style={styles.normalText}>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(NFTScreen);
