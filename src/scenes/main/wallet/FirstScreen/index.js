import React, { useState, useEffect } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import BackButton from '../../../../components/BackButton';
import LogoDark from '../../../../../assets/logo_dark.svg';
import { hScale, hScaleRatio } from '../../../../utils/scailing';
import { TouchableOpacity } from 'react-native-gesture-handler';


const FirstScreen = props => {

  const onPressGoBack = () => {
    props?.navigation?.goBack();
  }

  const onPressImportScreen = () => {
    props.navigation.navigate('ImportScreen');
  }

  const onPressCreateScreen = () => {
    props.navigation.navigate('CreateScreen');
  }

  return (
    <View style={styles.container}>
      <BackButton onPress={onPressGoBack} />
      <Text style={styles.title}>
        Wallet Connected
      </Text>
      <View style={{ width: '100%', alignItems: 'center', marginTop: hScaleRatio(50) }}>
        <LogoDark width={250} height={250} />
        <Text style={styles.name} >
          Wallet setup
        </Text>
      </View>
      <TouchableOpacity style={styles.importBtn} onPress={onPressImportScreen}>
        <Text style={styles.btnText}>
          Import Using Seed Phrase
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.createBtn} onPress={onPressCreateScreen}>
        <Text style={styles.btnText}>
          Create A New Wallet
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

export default connect(mapStateToProps, mapDispatchToProps)(FirstScreen);
