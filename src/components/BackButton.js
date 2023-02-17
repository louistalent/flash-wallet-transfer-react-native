import React, { memo } from "react";
import { GestureResponderEvent, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import colors from "../theme/colors";
import { hScaleRatio, wScale } from "../utils/scailing";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BoxShadow } from 'react-native-shadow'


export default memo(({ style, onPress }) => {

  return (
    <TouchableOpacity style={[defStyle.container, style]}
      onPress={onPress}
    >
      <Ionicons
        name="arrow-back-outline"
        style={defStyle.icon} />
    </TouchableOpacity>

  );
});

const defStyle = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    width: wScale(47),
    height: hScaleRatio(47),
    borderRadius: wScale(15),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    fontSize: 24,
  }
});
