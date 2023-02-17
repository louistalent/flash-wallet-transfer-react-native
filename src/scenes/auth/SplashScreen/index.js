import React, { useState, useEffect } from 'react';
import { View, ImageBackground, Text, Pressable } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import LogoLight from '../../../../assets/logo_light.svg'
import { hScaleRatio, wScale } from '../../../utils/scailing';


const SplashScreen = props => {

  const useEffect = (() => {
    setTimeout(() => {
      console.log('+++++++++++++++++++++++++')
      props.navigation.navigate('LoginScreen');
    }, 3000)
  }, [])

  const onPressView = () => {
    props.navigation.navigate('LoginScreen');
  }

  return (
    <Pressable style={styles.container} onPress={onPressView}>
      <ImageBackground source={require('../../../../assets/splash.png')} style={styles.imageBackground}>
        <LogoLight width={wScale(100)} height={hScaleRatio(100)} style={styles.logo} />
        <Text style={styles.title}>
          Flash Transfer
        </Text>
        <Text style={styles.subTitle}>
          Your Best Money
        </Text>
        <Text style={styles.subTitle}>
          Transfer Partner
        </Text>
        <Text style={styles.bottomText}>
          Secured by flash-transfer
        </Text>
      </ImageBackground>
    </Pressable>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
