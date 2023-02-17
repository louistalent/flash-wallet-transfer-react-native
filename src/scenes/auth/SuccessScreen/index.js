import React, { useState, useEffect } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import LogoLight from '../../../../assets/logo_light.svg'
import { hScaleRatio, wScale } from '../../../utils/scailing';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SuccessScreen = props => {

  const getStarted = () => {
    props.navigation.navigate('TransferScreen');
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../../assets/success.png')} style={styles.imageBackground}>
        <Text style={styles.title}>
          Your Account Set
        </Text>
        <Text style={styles.subTitle}>
          You Have Successfully
        </Text>
        <Text style={styles.subTitle}>
          top up the wallet
        </Text>
        <TouchableOpacity style={styles.getStarted} onPress={getStarted}>
          <Text style={styles.btnText}>
            Get Started
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SuccessScreen);
