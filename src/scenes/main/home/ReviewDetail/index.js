import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import BackButton from '../../../../components/BackButton';
import ProfileMenuItem from '../../../../components/ProfileMenuItem';
import { countryMenu } from '../../../../consts/const';
import LanguageSearch from '../../../../components/LanguageSearch';
import { wScale, hScaleRatio } from '../../../../utils/scailing';
import CountryList from '../../../../components/CountryList';
import MenuIcon from '../../../../../assets/menu.svg';
import RingIcon from '../../../../../assets/ring.svg';
import EditIcon from '../../../../../assets/edit.svg';
import MasterIcon from '../../../../../assets/master.svg'
import CashIcon from '../../../../../assets/cash.svg';
import { ScrollView } from 'react-navigation';

const LanguageScreen = props => {

    const onPressBack = () => {
        props.navigation.goBack();
    }
    return (
        <ScrollView style={styles.container}>
            <View style={{ padding: wScale(20) }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: hScaleRatio(20) }}>
                    <TouchableOpacity>
                        <MenuIcon />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <RingIcon />
                    </TouchableOpacity>
                </View>
                <BackButton onPressBack={onPressBack} />
                <Text style={styles.title}>Review Detail</Text>
                <Text style={styles.explain}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sin</Text>
                <View style={styles.senderDetail}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: hScaleRatio(10) }}>
                        <Text style={styles.subTitle}>
                            Sender Detail
                        </Text>
                        <TouchableOpacity style={styles.editBtn}>
                            <EditIcon />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.lineStyle}>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Image source={require('../../../../../assets/avatar1.png')} style={styles.image} />
                        <View style={{ position: 'absolute', marginLeft: wScale(50) }}>
                            <Text style={styles.name}>
                                Numan Xaffar
                            </Text>
                            <Text style={styles.subName}>
                                USA
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.kycBtn}>
                            <Text style={styles.kycText}>
                                KYC
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.lineStyle} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: hScaleRatio(10) }}>
                        <MasterIcon />
                        <View style={{ position: 'absolute', marginLeft: wScale(50) }}>
                            <Text style={styles.name}>
                                Master Card
                            </Text>
                            <Text style={styles.subName}>
                                Credit card
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.receiverDetail}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: hScaleRatio(10) }}>
                        <Text style={styles.subTitle}>
                            Receiver Detail
                        </Text>
                        <TouchableOpacity style={styles.editBtn}>
                            <EditIcon />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.lineStyle}>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Image source={require('../../../../../assets/avatar1.png')} style={styles.image} />
                        <View style={{ position: 'absolute', marginLeft: wScale(50) }}>
                            <Text style={styles.name}>
                                Numan Xaffar
                            </Text>
                            <Text style={styles.subName}>
                                USA
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: hScaleRatio(10) }}>
                        <CashIcon />
                        <View style={{ position: 'absolute', marginLeft: wScale(50) }}>
                            <Text style={styles.name}>
                                Cash Pickup
                            </Text>
                            <Text>
                                Collect cash from a partner Flash
                            </Text>
                        </View>
                    </View>
                    <View style={styles.lineStyle} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: hScaleRatio(10) }}>
                        <Text style={styles.name}>
                            Receiver Country
                        </Text>
                        <Text>
                            France
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: hScaleRatio(10) }}>
                        <Text style={styles.name}>
                            Purpose of transaction
                        </Text>
                        <Text>
                            Saving
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: hScaleRatio(10) }}>
                        <Text style={styles.name}>
                            Source of funds
                        </Text>
                        <Text>
                            Saving
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: hScaleRatio(10) }}>
                        <Text style={styles.name}>
                            Receiver Country
                        </Text>
                        <Text>
                            France
                        </Text>
                    </View>

                </View>
                <View style={styles.transferDetail}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: hScaleRatio(10) }}>
                        <Text style={styles.subTitle}>
                            Transfer Detail
                        </Text>
                        <TouchableOpacity style={styles.editBtn}>
                            <EditIcon />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.lineStyle}>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: hScaleRatio(10) }}>
                        <Text style={styles.name}>
                            You sent
                        </Text>
                        <Text style={styles.amount}>
                            100 EUR
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: hScaleRatio(10) }}>
                        <Text style={styles.name}>
                            Transfer Rate:
                        </Text>
                        <Text style={styles.amount}>
                            1 EUR = 1 EUR
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: hScaleRatio(10) }}>
                        <Text style={styles.name}>
                            Fee
                        </Text>
                        <Text style={styles.amount}>
                            +2.50 BUSD
                        </Text>
                    </View>
                    <View style={styles.lineStyle} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: hScaleRatio(10) }}>
                        <Text style={styles.result_left}>
                            Transfer Rate:
                        </Text>
                        <Text style={styles.result_right}>
                            102.50 EUR
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: hScaleRatio(10) }}>
                        <Text style={styles.result_left}>
                            Recipient Gets
                        </Text>
                        <Text style={styles.result_right}>
                            100.00 EUR
                        </Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.confirmBtn}>
                    <Text style={styles.btnText}>
                        Confirm
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelBtn}>
                    <Text style={styles.btnText}>
                        Cancel
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageScreen);
