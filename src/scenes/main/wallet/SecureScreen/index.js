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
import WalletIcon from '../../../../../assets/wallet_1.svg';
import InforIcon from '../../../../../assets/information.svg';
import GreenBarIcon from '../../../../../assets/greenBar.svg'

const CreateScreen = props => {

  const [started, setStarted] = useState(false);

  const onPressStart = () => {
    setStarted(true);
  }

  const onPressStart2 = () => {
    props.navigation.navigate("WriteDownScreen");
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Ionicons name="chevron-back-outline" style={styles.icon} />
        <Part1Icon />
        <Part1Icon />
        <Part2Icon />
        <Text>
          2/3
        </Text>
      </View>
      {
        started == false ?
          <>
            <View style={{ alignItems: 'center', width: '100%', height: hScaleRatio(300), justifyContent: 'center' }}>
              <WalletIcon style={{ color: colors.black }} />
            </View>
            <Text style={styles.title}>
              Secure Your Wallet
            </Text>

            <Text style={styles.subTitle1}>
              Don't risk losing your funds. protect your wallet by saving your <Text style={styles.learnMore}>Seed phrase </Text> in a place you trust.
            </Text>
            <Text style={styles.subTitle2}>
              It's the only way to recover your wallet if you get locked out of the app or get a new device.
            </Text>
            <TouchableOpacity style={styles.remindBtn} onPress={onPressStart}>
              <Text style={styles.remindBtnText}>
                Remind Me Later
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.createBtn} onPress={onPressStart}>
              <Text style={styles.btnText}>
                Start
              </Text>
            </TouchableOpacity>
          </>
          :
          <>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: hScaleRatio(30) }}>
              <Text style={styles.title}>
                Secure Your Wallet
              </Text>
              <InforIcon style={{ position: 'absolute', right: 0 }} />
            </View>
            <Text style={styles.subTitle2}>
              Secure your wallet's "<Text style={styles.seedPhrase}>Seed Phrase</Text>"
            </Text>
            <Text style={styles.subTitle1}>
              Manual
            </Text>
            <Text style={styles.content}>
              Write down your seed phrase on a piece of paper and store in a safe place.
            </Text>
            <Text style={styles.content}>
              Secure Level: Very strong
            </Text>
            <View style={{ flexDirection: 'row', width: wScale(160), justifyContent: 'space-between', marginTop: hScaleRatio(20) }}>
              <GreenBarIcon />
              <GreenBarIcon />
              <GreenBarIcon />
            </View>
            <Text style={styles.content}>
              Risks are:
            </Text>
            <Text style={styles.content}>
              • You lose it
            </Text>
            <Text style={styles.content}>
              • You forget where you put it
            </Text>
            <Text style={styles.content}>
              • Someone else finds it
            </Text>
            <Text style={styles.content}>
              Other options: Doesn't have to be paper!
            </Text>
            <Text style={styles.content}>
              Tips:
            </Text>
            <Text style={styles.content}>
              • Store in bank vault
            </Text>
            <Text style={styles.content}>
              • Store in a safe
            </Text>
            <Text style={styles.content}>
              • Store in multiple secret places
            </Text>

            <TouchableOpacity style={styles.createBtn} onPress={onPressStart2}>
              <Text style={styles.btnText}>
                Start
              </Text>
            </TouchableOpacity>
          </>
      }

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
