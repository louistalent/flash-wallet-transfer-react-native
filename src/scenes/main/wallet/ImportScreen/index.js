import React, { useState, useEffect, useRef } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SeedIcon from '../../../../../assets/seed.svg';
import { hScale, hScaleRatio } from '../../../../utils/scailing';
import CustomSwitch from '../../../../components/CustomSwitch';
import colors from '../../../../theme/colors';

const ImportScreen = props => {

  const [inputedText, setInputedText] = useState([]);
  const inputRef = useRef(null);
  const onSelectSwitch = index => {
    console.log('Selected index: ' + index);
  };
  const [error, setError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const [seedFlag, setSeedFlat] = useState(false);

  const changeNewPass = (txt) => {
    if (txt.length < 8) {
      setError("Must be at least 8 characters")
    }
    else {
      setError("")
    }
    setNewPass(txt)
  };

  const changeConfirmPass = (txt) => {
    setConfirmPass(txt)
    // if (newPass == confirmPass) {
    //   setConfirmError("")
    // }
    // else {
    //   setConfirmError("Confirm  password is not same!")
    // }
  };

  const Label = <Text color={styles.labelColor}>Seed Phrase</Text>;


  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Ionicons
          name="ellipse-sharp"
          style={styles.icon} />
        <Text style={styles.title}>
          Import From Seed
        </Text>
      </View>
      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: hScaleRatio(40) }}>
        <TextInput editable label={Label} underlineColor='#000000' color={colors.black} style={styles.amountInput} multiline></TextInput>
        <View style={styles.seed}>
          <TouchableOpacity>
            <SeedIcon />
          </TouchableOpacity>
        </View>
      </View>

      <TextInput editable ref={inputRef} onChangeText={text => changeNewPass(text)}
        value={newPass} style={styles.passwordInput} placeholder="New Password"></TextInput>
      <Text>
        {error}
      </Text>

      <TextInput editable onChangeText={text => changeConfirmPass(text)}
        value={confirmPass} style={styles.passwordInput} placeholder="Confirm Password"></TextInput>
      <Text>
        {confirmError}
      </Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hScaleRatio(20), alignItems: 'center' }}>
        <Text style={styles.faceId}>
          Sign in Face ID?
        </Text>
        <CustomSwitch selectionMode={1}
          onSelectSwitch={onSelectSwitch} />
      </View>
      <Text style={styles.termsText}>
        Byproceeding, you agree to these Term and Conditions.
      </Text>
      <TouchableOpacity style={styles.importBtn}>
        <Text style={styles.btnText}>
          Import
        </Text>
      </TouchableOpacity>
    </View >
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ImportScreen);
