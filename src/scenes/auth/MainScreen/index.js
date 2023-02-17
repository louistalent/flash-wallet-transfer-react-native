import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';

const ThemeModes = { Yellow: 'Yellow', White: 'White', Dark: 'Dark' };

const MainScreen = props => {
  const [mode, setMode] = useState(ThemeModes.Yellow);

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
