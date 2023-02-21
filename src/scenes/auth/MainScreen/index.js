import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import MenuIcon from '../../../../assets/menu.svg';
import RingIcon from '../../../../assets/ring.svg';

const ThemeModes = { Yellow: 'Yellow', White: 'White', Dark: 'Dark' };

const MainScreen = props => {


  return (
    <View style={styles.container}>

    </View>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
