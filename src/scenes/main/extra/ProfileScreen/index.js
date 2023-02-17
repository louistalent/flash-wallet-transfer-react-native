import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import BackButton from '../../../../components/BackButton';
import ProfileMenuItem from '../../../../components/ProfileMenuItem';
import { profileMenu } from '../../../../consts/const';

const ProfileScreen = props => {

    const onPressAccount = () => {
        props.navigation.navigate("LanguageScreen");
    }

    const onPressBack = () => {
        props.navigation.goBack();
    }

    return (
        <ScrollView style={styles.container}>
            <BackButton onPress={onPressBack} />
            <View style={styles.profileGroup}>
                <Text style={styles.title}>
                    Profile
                </Text>
                <Image source={require('../../../../../assets/profile/profile.png')} />
                <Text style={styles.name}>
                    Numan Xafar
                </Text>
                <Text style={styles.phone}>
                    +923123994944
                </Text>
            </View>
            <TouchableOpacity onPress={onPressAccount}>
                <ProfileMenuItem profilemode={profileMenu.account} />
            </TouchableOpacity>
            <TouchableOpacity>
                <ProfileMenuItem profilemode={profileMenu.friend} />
            </TouchableOpacity>
            <TouchableOpacity>
                <ProfileMenuItem profilemode={profileMenu.transaction} />
            </TouchableOpacity>
            <TouchableOpacity>
                <ProfileMenuItem profilemode={profileMenu.recipient} />
            </TouchableOpacity>
            <TouchableOpacity>
                <ProfileMenuItem profilemode={profileMenu.policy} />
            </TouchableOpacity>
            <TouchableOpacity>
                <ProfileMenuItem profilemode={profileMenu.setting} />
            </TouchableOpacity>
            <TouchableOpacity>
                <ProfileMenuItem profilemode={profileMenu.help} />
            </TouchableOpacity>
            <TouchableOpacity>
                <ProfileMenuItem profilemode={profileMenu.contact} />
            </TouchableOpacity>
            <TouchableOpacity>
                <ProfileMenuItem profilemode={profileMenu.logout} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
