import React, { memo, useState } from 'react';
import {
  View, Image, StyleSheet, TouchableOpacity, TextInput
} from 'react-native';
import colors from '../theme/colors';
import { hScaleRatio, wScale } from '../utils/scailing';
import DropDownPicker from 'react-native-dropdown-picker';
import Ionicons from 'react-native-vector-icons/Ionicons'


export default memo((style, onPress) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' }
  ]);

  return (<View style={defStyle.container}>
    <Image source={require('../../assets/flag.png')} style={{ marginHorizontal: wScale(20) }} />
    <View style={defStyle.lineStyle} />
    <TouchableOpacity style={defStyle.dropBtn}>
      <Ionicons name="chevron-down-outline" />
    </TouchableOpacity>

  </View>
  );
});

const defStyle = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    height: hScaleRatio(53),
    borderRadius: 5,
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingVertical: 10,
    justifyContent: 'space-between'
  },
  lineStyle: {
    position: 'absolute',
    left: wScale(80),
    width: 1,
    height: hScaleRatio(33),
    backgroundColor: colors.lineColor,
  },
  textInput: {
    height: hScaleRatio(50),
    padding: 20
  },
  arrow: {
    fontSize: 14,
    color: colors.white,
  },
  dropBtn: {
    width: wScale(30),
  }
});
