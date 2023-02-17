import React, { useState, useEffect } from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import BackButton from '../../../components/BackButton';
import NumberPad from '../../../components/NumberPad';
import { hScaleRatio, wScale } from '../../../utils/scailing';
import colors from '../../../theme/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';


const VerifyScreen = props => {
  const [firstLetter, setFirstLetter] = useState('');
  const [secondLetter, setSecondLetter] = useState('');
  const [thirdLetter, setThirdLetter] = useState('');
  const [fourthLetter, setFourthLetter] = useState('');

  useEffect(() => {
    if (firstLetter != '' && secondLetter != '' && thirdLetter != '' && fourthLetter != '') {
      props.navigation.navigate('SuccessScreen');
    }
    else { return; }
  }, [fourthLetter]);

  const onBackPress = () => {
    props.navigation.goBack();
  }

  const onPressNumber = (number) => {
    if (firstLetter == "") {
      setFirstLetter(number)
    } else if (secondLetter == "") {
      setSecondLetter(number)
    } else if (thirdLetter == "") {
      setThirdLetter(number)
    } else if (fourthLetter == "") {
      setFourthLetter(number)
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ padding: wScale(20) }}>
        <TouchableOpacity style={styles.backBtn} onPress={onBackPress}>
          <Ionicons
            name="arrow-back-outline"
            style={styles.icon} />
        </TouchableOpacity>
        {/* <BackButton onPress={onBackPress} /> */}
        <Text style={styles.loginText}>
          Verify Code
        </Text>
        <Text style={styles.subTitle}>
          Check your SMS inbox, we have sent
          you the code at numanzafar@gmail.com
        </Text>
        <View style={styles.textInputGroup}>
          <TextInput
            editable
            maxLength={1}
            style={styles.textInput}
            value={firstLetter}
            onChangeText={text => setFirstLetter(text)}
          />
          <TextInput
            editable
            maxLength={1}
            style={styles.textInput}
            value={secondLetter}
            onChangeText={text => setSecondLetter(text)}
          />
          <TextInput
            editable
            maxLength={1}
            value={thirdLetter}
            style={styles.textInput}
            onChangeText={text => setThirdLetter(text)}
          />
          <TextInput
            editable
            maxLength={1}
            style={styles.textInput}
            value={fourthLetter}
            onChangeText={text => setFourthLetter(text)}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.inputText}>
            Didn’t receive a code?
          </Text>
          <TouchableOpacity>
            <Text style={styles.resendText}>
              Resend Code
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <NumberPad onPress={onPressNumber} />
    </View>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyScreen);
