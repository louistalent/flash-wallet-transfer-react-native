import React, { useState, useEffect } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Part1Icon from '../../../../../assets/part1.svg';
import Part2Icon from '../../../../../assets/part2.svg';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { hScaleRatio } from '../../../../utils/scailing';
import { mnemonic } from '../../../../consts/const';
import { BlurView } from "@react-native-community/blur";
import colors from '../../../../theme/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ViewIcon from '../../../../../assets/view.svg'


const WriteDownScreen = props => {

  const [viewFlag, setViewFlag] = useState(false);

  const tMnemonic = mnemonic;

  const onPressView = () => {
    setViewFlag(true)
  }

  const onPressNext = () => {
    props.navigation.navigate('ConfirmScreen')
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
      <Text style={styles.title}>
        Write Down Your Seed Phrase
      </Text>
      <Text style={styles.content}>
        This is your seed phrase. Write it down on a paper and keep it in a safe place. You'll be asked to re-enter this phrase (in order) on the next step.
      </Text>
      <View>
        <View style={{ overflow: 'hidden', borderRadius: 12 }}>
          <View style={styles.seedPanel}>
            {tMnemonic.map(
              (i, k) =>
                k % 6 == 0 && (
                  <View key={i}>
                    {tMnemonic.slice(k, k + 6).map((ii, kk) => (
                      <View style={styles.itemBtn} key={ii}>
                        <Text style={styles.itemText}>{ii}</Text>
                      </View>
                    ))}
                  </View>
                ),
            )}
          </View>
          {
            viewFlag == false
              ?
              <BlurView
                style={styles.absolute}
                blurType="light"
                blurAmount={10}
                reducedTransparencyFallbackColor="white"
              />
              :
              <></>
          }
        </View>
        {
          viewFlag == false ?
            <View style={{ position: 'absolute', width: '100%', alignItems: 'center' }}>
              <Text style={styles.viewTitle}>
                Tap to reveal your seed phrase
              </Text>
              <Text style={styles.viewContent}>
                Make sure no one is watching your screen.
              </Text>
              <TouchableOpacity style={styles.btnView} onPress={onPressView}>
                <View style={{ flexDirection: 'row' }}>
                  <ViewIcon />
                  <Text style={styles.viewBtnText}>
                    View
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            :
            <></>
        }
      </View>
      <TouchableOpacity disabled={!viewFlag} style={viewFlag == false ? styles.nextBtnDisable : styles.nextBtnEnable} onPress={onPressNext}>
        <Text style={viewFlag == false ? styles.nextBtnTextDisable : styles.nextBtnTextEnable}>
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

export default connect(mapStateToProps, mapDispatchToProps)(WriteDownScreen);
