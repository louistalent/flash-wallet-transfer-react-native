import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import BackButton from '../../../../components/BackButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AddIcon from '../../../../../assets/add.svg';
import VisaIcon from '../../../../../assets/visa.svg';
import MasterIcon from '../../../../../assets/master.svg';

const CardScreen = props => {

    const onPressBack = () => {
        props.navigation.goBack();
    }

    const onPressAddNew = () => {
        props.navigation.navigate("CardDetailScreen");
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../../../assets/card_back.png')} style={styles.imageBackground}>
                <View style={styles.mainStyle}>
                    <TouchableOpacity onPress={onPressBack}>
                        <BackButton onPress={onPressBack} />
                    </TouchableOpacity>
                    <Text style={styles.title}>
                        How would you
                    </Text>
                    <Text style={styles.title1}>
                        like to pay?
                    </Text>
                </View>
                <View style={styles.modal}>
                    <Text style={styles.subTitle}>
                        Credit/Debit card
                    </Text>
                    <TouchableOpacity onPress={onPressAddNew}>
                        <View style={styles.item}>
                            <AddIcon />
                            <Text style={styles.itemText}>
                                Add New Card
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.item}>
                            <VisaIcon />
                            <Text style={styles.itemText}>
                                MasterCard
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.item}>
                            <MasterIcon />
                            <Text style={styles.itemText}>
                                MasterCard
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </ImageBackground>

        </View>
    );
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CardScreen);
