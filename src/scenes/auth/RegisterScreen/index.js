import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
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
import { RadioButton } from 'react-native-paper';
import CountryPicker from '../../../components/CountryPicker';

const RegisterScreen = props => {
  const [checked, setChecked] = React.useState('first');
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(true);

  const onPressConfirmPassword = () => {
    console.log("pressed!");
    props.navigation.navigate('Register2Screen');
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.loginText}>
        Register
      </Text>
      <Text style={styles.subTitle}>
        Sign with username or email and password to use your account.
      </Text>

      <View style={styles.radioBtnGroup}>
        <Text style={styles.stepTxt}>
          Step 1 of 2
        </Text>
        <RadioButton
          value="first"
          status='checked'
          onPress={() => setChecked('first')}
          color={colors.radioBtnColor} />
        <RadioButton
          value="second"
          status={'checked'}
          color={colors.radioBtnColor}
        />
      </View>
      <Text style={styles.sendFromTxt}>
        Send From
      </Text>
      <CountryPicker />
      <Text style={styles.smallTxt}>
        Enter Your Email
      </Text>
      <TextInput style={styles.textInput} />
      <Text style={styles.smallTxt}>
        Set Password
      </Text>
      <TextInput style={styles.textInput} theme={{ colors: { primary: '#DDDDDD' } }} secureTextEntry right={<TextInput.Icon icon={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />} />
      <Text style={styles.smallTxt}>
        Confirm Password
      </Text>
      <TextInput style={styles.textInput} theme={{ colors: { primary: '#DDDDDD' } }} secureTextEntry right={<TextInput.Icon icon={confirmPasswordVisible ? "eye" : "eye-off"} onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)} />} />
      <TouchableOpacity
        style={styles.confirmPassword}
        onPress={onPressConfirmPassword}>
        <Text style={styles.btnText}>Continue</Text>
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
        Already have an account?
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: hScaleRatio(20) }}>
        <Text style={styles.getRegistered}>
          LOGIN
        </Text>
        <FontAwesome name="arrow-right" color={colors.subTitleColor}></FontAwesome>
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
