import React, { useState, useEffect } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Part1Icon from '../../../../../assets/part1.svg';
import Part2Icon from '../../../../../assets/part2.svg';
import { TextInput } from 'react-native-paper';
import { hScaleRatio } from '../../../../utils/scailing';
import CustomSwitch from '../../../../components/CustomSwitch';
import CheckBox from '@react-native-community/checkbox';
import colors from '../../../../theme/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CreateScreen = props => {

  const [text, setText] = useState('');
  const [isSelected, setSelection] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);

  const hasErrors = () => {
    return text.length > 8 ? true : false;
  };

  const onPressCreatePassword = () => {
    props.navigation.navigate('SecureScreen');
  }

  const onSelectSwitch = index => {
    console.log('Selected index: ' + index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Ionicons name="chevron-back-outline" style={styles.icon} />
        <Part1Icon />
        <Part2Icon />
        <Part2Icon />
        <Text>
          1/3
        </Text>
      </View>
      <View style={styles.titleGroup}>
        <Text style={styles.title}>
          Create Password
        </Text>
        <Text style={styles.subTitle}>
          This password will unlock your Metamaskwallet only on this device
        </Text>
      </View>
      <TextInput label='New Password'
        underlineColor='#fff'
        style={styles.textInput}
        theme={{ colors: { primary: 'black' } }}
        secureTextEntry right={<TextInput.Icon icon={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />} />
      <View style={styles.error}>
        <Text style={styles.strength}>
          Password strength:
        </Text>
        <Text style={styles.good}>
          Good
        </Text>
      </View>
      <TextInput label='New Password'
        underlineColor='#fff'
        style={styles.textInput}
        theme={{ colors: { primary: 'black' } }}
        secureTextEntry right={<TextInput.Icon icon={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />} />
      <Text style={styles.strength}>
        Must be at least 8 characters
      </Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hScaleRatio(20), alignItems: 'center' }}>
        <Text style={styles.faceId}>
          Sign in Face ID?
        </Text>
        <CustomSwitch selectionMode={1}
          onSelectSwitch={onSelectSwitch} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          tintColors={{ true: colors.primary, false: 'black' }}
        />
        <Text style={styles.understand}>
          I understand that DeGe cannot recover this password for me.
          <Text style={styles.learnMore}>
            Learn more
          </Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.createBtn} onPress={onPressCreatePassword}>
        <Text style={styles.btnText}>
          Create Password
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateScreen);
