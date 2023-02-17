import React, { memo, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import colors from "../theme/colors";
import { hScaleRatio, wScale } from "../utils/scailing";
import CashSeletedIcon from '../../assets/cash_activate.svg';
import CashNonSelectedIcon from '../../assets/cash_inactivate.svg';
import CryptoSeletedIcon from '../../assets/crypto_activate.svg';
import CryptoNonSelectedIcon from '../../assets/crypto_inactivate.svg';
import BankSeletedIcon from '../../assets/bank_activate.svg';
import BankNonSelectedIcon from '../../assets/bank_inactivate.svg';
import CardSeletedIcon from '../../assets/card_activate.svg';
import CardNonSelectedIcon from '../../assets/card_inactivate.svg';
const paymentMode = { cash: 'cash', crypto: 'crypto', card: 'card', bank: 'bank' }

export default memo(({ style, width = 77, height = 108, mode = 'cash', onPress, selected }) => {

    // const [selected, setSelected] = useState(false);

    const onPressSelect = () => {
        // setSelected(selected ? false : true);

        onPress(mode, selected);
    }

    const defStyle = StyleSheet.create({
        container: {
            width: wScale(width),
            height: hScaleRatio(height),
            alignItems: 'center',
            backgroundColor: selected ? colors.radioBtnColor : colors.white,
            justifyContent: 'center',
            borderRadius: 12,
            padding: wScale(2)
        },
        btnText: {
            fontFamily: "Inter",
            fontSize: 16,
            fontWeight: "400",
            lineHeight: 24,
            textAlign: 'left',
            color: selected ? colors.white : colors.black
        },
    });
    return (
        <TouchableOpacity style={defStyle.container} onPress={onPressSelect}>

            {
                mode == paymentMode.cash && <>
                    {
                        selected ?
                            <CashSeletedIcon />
                            :
                            <CashNonSelectedIcon />
                    }
                    {
                        width == 158 ?
                            <Text style={defStyle.btnText}>
                                Cash Pickup
                            </Text>
                            :
                            <Text style={defStyle.btnText}>
                                Cash
                            </Text>
                    }
                    {
                        width == 158 ?
                            <></>
                            :
                            <Text style={defStyle.btnText}>
                                Payment
                            </Text>

                    }
                </>
            }
            {
                mode == paymentMode.crypto && <>
                    {
                        selected ?
                            <CryptoSeletedIcon />
                            :
                            <CryptoNonSelectedIcon />
                    }
                    <Text style={defStyle.btnText}>
                        Crypto
                    </Text>
                    <Text style={defStyle.btnText}>
                        Wallet
                    </Text>
                </>
            }
            {
                mode == paymentMode.card && <>
                    {
                        selected ?
                            <CardSeletedIcon />
                            :
                            <CardNonSelectedIcon />
                    }
                    <Text style={defStyle.btnText}>
                        Credit
                    </Text>
                    <Text style={defStyle.btnText}>
                        Card
                    </Text>
                </>
            }
            {
                mode == paymentMode.bank && <>
                    {
                        selected ?
                            <BankSeletedIcon />
                            :
                            <BankNonSelectedIcon />
                    }

                    {
                        width == 158 ?
                            <Text style={defStyle.btnText}>
                                Bank Transfer
                            </Text>
                            :
                            <Text style={defStyle.btnText}>
                                Bank
                            </Text>
                    }
                    {
                        width == 158 ?
                            <></>
                            :
                            <Text style={defStyle.btnText}>
                                Transfer
                            </Text>

                    }

                </>
            }

        </TouchableOpacity>

    );
});
