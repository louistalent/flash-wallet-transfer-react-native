import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import WalletIcon from '../../../../../assets/profile/wallet.svg';
import ProfileIcon from '../../../../../assets/profile/profile.svg';
import NotificationIcon from '../../../../../assets/profile/notification.svg';
import NFTIcon from '../../../../../assets/profile/nft.svg';
import LanguageIcon from '../../../../../assets/profile/language.svg';
import SettingIcon from '../../../../../assets/profile/setting.svg';
import LogoutIcon from '../../../../../assets/profile/logout.svg';

const SideMenu = props => {
    const [value, onChangeText] = React.useState('0');

    const onPressProfile = () => {
        props.navigation.navigate('ProfileScreen');
    }

    const onPressLogout = () => {
        props.navigation.closeDrawer();
    }

    const onPressMyWallet = () => {
        props.navigation.navigate('FirstScreen');
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../../../../assets/profile/profile.png')} />
            <View style={{ width: '100%' }}>
                <Text style={styles.name}>
                    Numan Xafar
                </Text>
                <Text style={styles.email}>
                    numanzafar003@gmail.com
                </Text>
            </View>
            <TouchableOpacity style={styles.rowStyle}>
                <WalletIcon />
                <Text style={styles.menuText} onPress={onPressMyWallet}>
                    My Wallet
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rowStyle} onPress={onPressProfile}>
                <ProfileIcon />
                <Text style={styles.menuText}>
                    Profile
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rowStyle}>
                <NotificationIcon />
                <Text style={styles.menuText}>
                    Notifications
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rowStyle}>
                <NFTIcon />
                <Text style={styles.menuText}>
                    NFT
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rowStyle}>
                <LanguageIcon />
                <Text style={styles.menuText}>
                    Language
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rowStyle}>
                <SettingIcon />
                <Text style={styles.menuText}>
                    Settings
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logout} onPress={onPressLogout}>
                <LogoutIcon />
                <Text style={styles.btnText}>
                    Log out
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
