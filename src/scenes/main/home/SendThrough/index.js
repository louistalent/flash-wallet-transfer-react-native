import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import MenuIcon from '../../../../../assets/menu.svg';
import RingIcon from '../../../../../assets/ring.svg';
import SwapIcon from '../../../../../assets/swap.svg';
import { hScaleRatio, wScale } from '../../../../utils/scailing';
import { ScrollView } from 'react-native-gesture-handler';
import RecentTransactions from '../../../../components/RecentTransactions';
import BackButton from '../../../../components/BackButton';
import PaymentOption from '../../../../components/PaymentOption';
import ErrorIcon from '../../../../../assets/error.svg';
import ContactList from '../../../../components/ContactList';
import SearchBar from '../../../../components/SearchBar';
import CountryPicker from '../../../../components/CountryPicker';

const paymentMode = { cash: 'cash', crypto: 'crypto', card: 'card', bank: 'bank' }

const SendThrough = props => {
    const [addNew, setAddNew] = useState(true);
    const [cashSelected, setCashSelected] = useState(true);
    const [walletSelected, setWalletSelected] = useState(false);
    const [cardSelected, setCardSelected] = useState(false);
    const [bankSelected, setBankSelected] = useState(false);

    const [receiverCashSelected, setReceiverCashSelected] = useState(true);
    const [receiverBankSelected, setReceiverBankSelected] = useState(false);


    const onPressAddNew = () => {
        setAddNew(true);
    }

    const onPressAddFromContact = () => {
        setAddNew(false);

    }
    const onPressBack = () => {
        props.navigation.goBack();
    }

    const onPressContinue = () => {
        props.navigation.navigate('PaymentDetail');
    }

    const onUpdateReceiverState = (mode, selected) => {
        setReceiverCashSelected(false);
        setReceiverBankSelected(false);

        if (mode == paymentMode.cash) {
            selected == true ? setReceiverCashSelected(false) : setReceiverCashSelected(true)
        }
        else
            selected == true ? setReceiverBankSelected(false) : setReceiverBankSelected(true)
    }

    const onUpdateState = (mode, selected) => {

        setCashSelected(false);
        setWalletSelected(false);
        setCardSelected(false);
        setBankSelected(false);

        if (mode == paymentMode.cash) {
            selected == true ? setCashSelected(false) : setCashSelected(true)
        }
        else if (mode == paymentMode.crypto) {
            selected == true ? setWalletSelected(false) : setWalletSelected(true)
        }
        else if (mode == paymentMode.card) {
            selected == true ? setCardSelected(false) : setCardSelected(true)
        }
        else if (mode == paymentMode.bank) {
            selected == true ? setBankSelected(false) : setBankSelected(true)
        }
    }

    const onPressMenu = () => {
        props.navigation.openDrawer();
    }

    return (
        <ScrollView style={styles.container}>
            <View style={{ padding: wScale(20) }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={onPressMenu}>
                        <MenuIcon />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <RingIcon />
                    </TouchableOpacity>
                </View>
                <BackButton style={{ marginVertical: hScaleRatio(10) }} onPress={onPressBack} />
                <Text style={styles.title}>
                    How would you like to pay?
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <PaymentOption mode={paymentMode.cash} onPress={onUpdateState} selected={cashSelected} />
                    <PaymentOption mode={paymentMode.crypto} onPress={onUpdateState} selected={walletSelected} />
                    <PaymentOption mode={paymentMode.card} onPress={onUpdateState} selected={cardSelected} />
                    <PaymentOption mode={paymentMode.bank} onPress={onUpdateState} selected={bankSelected} />
                </View>
                <Text style={styles.title}>
                    How does your receiver want money?
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <PaymentOption mode={paymentMode.cash} width={158} height={90} onPress={onUpdateReceiverState} selected={receiverCashSelected} />
                    <PaymentOption mode={paymentMode.bank} width={158} height={90} onPress={onUpdateReceiverState} selected={receiverBankSelected} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={addNew ? styles.btnAddNew : styles.btnAddFrom} onPress={onPressAddNew}>
                        <Text style={addNew ? styles.btnText : styles.btnAddFromText}>
                            Add new
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={addNew ? styles.btnAddFrom : styles.btnAddNew} onPress={onPressAddFromContact}>
                        <Text style={addNew ? styles.btnAddFromText : styles.btnText}>
                            Add from Contact
                        </Text>
                    </TouchableOpacity>
                </View>
                {
                    addNew ?
                        <View>
                            <View style={styles.error}>
                                <ErrorIcon />
                                <Text style={styles.errorText}>
                                    Enter your receiver name exactly as it appears on their ID.
                                </Text>
                            </View>
                            <Text style={styles.title}>
                                Add New Contact
                            </Text>
                            <Text style={styles.subTitle}>
                                First Name
                            </Text>
                            <TextInput style={styles.textInput} />
                            <Text style={styles.subTitle}>
                                Second Name
                            </Text>
                            <TextInput style={styles.textInput} />
                            <Text style={styles.subTitle}>
                                Email Address
                            </Text>
                            <TextInput style={styles.textInput} />
                            <Text style={styles.subTitle}>
                                Country/Region
                            </Text>
                            <CountryPicker />
                            <Text style={styles.subTitle}>
                                Street Address
                            </Text>
                            <TextInput style={styles.textInput} />
                            <Text style={styles.subTitle}>
                                City
                            </Text>
                            <TextInput style={styles.textInput} />
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <View style={{ width: '40%' }}>
                                    <Text style={styles.subTitle}>
                                        State
                                    </Text>
                                    <TextInput style={styles.textInput} />
                                </View>
                                <View style={{ width: '40%' }}>
                                    <Text style={styles.subTitle}>
                                        ZIP
                                    </Text>
                                    <TextInput style={styles.textInput} />
                                </View>
                            </View>
                            <Text style={styles.subTitle}>
                                Purpose
                            </Text>
                            <TextInput style={styles.textInput} />
                            <Text style={styles.subTitle}>
                                Choose
                            </Text>
                            <TextInput style={styles.textInput} />

                            <TouchableOpacity style={styles.btnContinue} onPress={onPressContinue}>
                                <Text style={styles.btnText}>
                                    Continue
                                </Text>
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={styles.addNewContact}>
                            <Text style={[styles.title, { marginVertical: 0 }]}>
                                Add New Contact
                            </Text>
                            <SearchBar />
                            <ContactList />
                        </View>

                }
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

export default connect(mapStateToProps, mapDispatchToProps)(SendThrough);
