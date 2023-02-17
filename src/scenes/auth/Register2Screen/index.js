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
import DOBPicker from '../../../components/DOBPicker';
import CheckBox from '@react-native-community/checkbox';

const Register2Screen = props => {
  const [isSelected, setSelection] = useState(false);
  const [checked, setChecked] = React.useState('first');

  const onPressConfirmPassword = () => {
    console.log("pressed!");
    props.navigation.navigate('VerifyScreen');
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
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')}
          color={colors.radioBtnColor} />
        <RadioButton
          value="second"
          status='checked'
          color={colors.radioBtnColor}
        />
      </View>
      <Text style={styles.sendFromTxt}>
        Send From
      </Text>
      <CountryPicker />
      <Text style={styles.smallTxt}>
        First Name
      </Text>
      <TextInput style={styles.textInput} />
      <Text style={styles.smallTxt}>
        Second Name
      </Text>
      <TextInput style={styles.textInput} secureTextEntry right={<TextInput.Icon icon="eye" />} />
      <Text style={styles.smallTxt}>
        Gender
      </Text>

      <View style={[styles.radioBtnGroup, { marginTop: hScaleRatio(10) }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton
            value="first"
            status='unchecked'
            onPress={() => setChecked('first')}
            color={colors.black} />
          <Text style={styles.genderText}>
            Male
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: wScale(20) }}>
          <RadioButton
            value="second"
            status={'checked'}
            color={colors.black}
          />
          <Text style={styles.genderText}>
            Female
          </Text>
        </View>
      </View>
      <Text style={styles.smallTxt}>
        DOB
      </Text>
      <DOBPicker />
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: hScaleRatio(10) }}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          tintColors={{ true: '#5D5FEF', false: 'black' }}
        />
        <Text style={styles.understand}>
          I agree with
          <Text style={styles.terms}> Learn more</Text>
        </Text>
      </View>
      <TouchableOpacity
        style={styles.confirmPassword}
        onPress={onPressConfirmPassword}>
        <Text style={styles.btnText}>Get Registered</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Register2Screen);
