import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from './styles';
import { connect } from 'react-redux';
import LogoLight from '../../../../assets/logo_light.svg'
import { hScaleRatio, wScale } from '../../../utils/scailing';
import BinanceIcon from '../../../../assets/binance.svg';
import AppleIcon from '../../../../assets/apple.svg';
import GoogleIcon from '../../../../assets/google.svg';
import FacebookIcon from '../../../../assets/facebook.svg';
import WalletIcon from '../../../../assets/wallet.svg';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import colors from '../../../theme/colors';

const LoginScreen = props => {
  const [passwordVisible, setPasswordVisible] = useState(true);

  const onPressConfirmPassword = () => {
    console.log("pressed!");
    props.navigation.navigate('RegisterScreen');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>
        Login
      </Text>
      <Text style={styles.subTitle}>
        Sign with username or email and password to use your account.
      </Text>
      <Text style={styles.smallTxt}>
        Email Or Phone
      </Text>
      <TextInput theme={{ colors: { primary: '#DDDDDD' } }} style={styles.textInput} />
      <Text style={styles.smallTxt}>
        Password
      </Text>
      <TextInput style={styles.textInput} theme={{ colors: { primary: '#DDDDDD' } }} secureTextEntry right={<TextInput.Icon icon={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />} />
      <Text style={styles.forgetPassword}>
        Forget Password
      </Text>
      <TouchableOpacity
        style={styles.confirmPassword}
        onPress={onPressConfirmPassword}>
        <Text style={styles.btnText}>Button Text</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', height: hScaleRatio(20), alignItems: 'center', marginTop: hScaleRatio(40) }}>
        <View style={styles.lineStyle} />
        <Text style={styles.orStyle}>
          or
        </Text>
        <View style={styles.lineStyle} />
      </View>
      <View style={styles.btnGroup}>
        <TouchableOpacity>
          <BinanceIcon />
        </TouchableOpacity>
        <TouchableOpacity>
          <AppleIcon />
        </TouchableOpacity>
        <TouchableOpacity>
          <GoogleIcon />
        </TouchableOpacity>
        <TouchableOpacity>
          <FacebookIcon />
        </TouchableOpacity>
        <TouchableOpacity>
          <WalletIcon />
        </TouchableOpacity>
      </View>
      <Text style={styles.dontAccount}>
        Don't have an account?
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: hScaleRatio(20) }}>
        <Text style={styles.getRegistered}>
          Get Registered
        </Text>
        <FontAwesome name="arrow-right" color={colors.subTitleColor}></FontAwesome>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
