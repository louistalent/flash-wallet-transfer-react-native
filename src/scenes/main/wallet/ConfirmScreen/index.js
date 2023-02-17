import React, { useState, useEffect } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Part1Icon from '../../../../../assets/part1.svg';
import Part2Icon from '../../../../../assets/part2.svg';
import { TextInput } from 'react-native-paper';
import { hScaleRatio, wScale } from '../../../../utils/scailing';
import CustomSwitch from '../../../../components/CustomSwitch';
import CheckBox from '@react-native-community/checkbox';
import colors from '../../../../theme/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MnemonicPanel from '../../../../components/MnemonicPanel';

const ConfirmScreen = props => {

  const [selectedText, setSelectedText] = useState('');
  const [step, setStep] = useState(1);

  const onPressMnemonic = (mnemonic) => {
    setStep(step + 1);
    setSelectedText(mnemonic)
  }

  const onPressNext = () => {
    props.navigation.navigate("WalletSuccessScreen");
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Ionicons name="chevron-back-outline" style={styles.icon} />
        <Part1Icon />
        <Part1Icon />
        <Part1Icon />
        <Text>
          3/3
        </Text>
      </View>
      <Text style={styles.title}>
        Confirm Seed Phrase
      </Text>
      <Text style={styles.content}>
        Select each word in the order it was
      </Text>
      <Text style={styles.content}>
        presented to you
      </Text>

      <View style={{ width: '100%', alignItems: 'center' }}>
        <Text style={styles.selectedText}>
          3.{selectedText}
        </Text>
        {
          step == 1 &&
          <View style={{ flexDirection: 'row', marginTop: hScaleRatio(30) }}>
            <View style={styles.progress1}>
            </View>
            <View style={styles.progress2}>
            </View>
            <View style={styles.progress2}>
            </View>
          </View>
        }
        {
          step == 2 &&
          <View style={{ flexDirection: 'row', marginTop: hScaleRatio(30) }}>
            <View style={styles.progress1}>
            </View>
            <View style={styles.progress1}>
            </View>
            <View style={styles.progress2}>
            </View>
          </View>
        }
        {
          step == 3 &&
          <View style={{ flexDirection: 'row', marginTop: hScaleRatio(30) }}>
            <View style={styles.progress1}>
            </View>
            <View style={styles.progress1}>
            </View>
            <View style={styles.progress1}>
            </View>
          </View>
        }
      </View>

      <MnemonicPanel onPress={onPressMnemonic} />


      <TouchableOpacity style={styles.nextBtnEnable} onPress={onPressNext}>
        <Text style={styles.nextBtnTextEnable}>
          Next
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

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmScreen);
