import React, { memo } from "react";
import { StyleSheet, TouchableOpacity, TextInput, View, Text } from "react-native";
import colors from "../theme/colors";
import { hScaleRatio, wScale } from "../utils/scailing";
import SearchIcon from "../../assets/search.svg";
import { profileMenu } from "../consts/const";
import ProfileIcon from "../../assets/profile/profile.svg";
import FriendIcon from "../../assets/profile/friend.svg";
import TransactionIcon from "../../assets/profile/transaction.svg";
import RecipientIcon from "../../assets/profile/profile.svg";
import PolicyIcon from "../../assets/profile/privacy.svg";
import SettingIcon from "../../assets/profile/setting.svg";
import HelpIcon from "../../assets/profile/help.svg";
import ContactIcon from "../../assets/profile/phone.svg";
import LogoutIcon from "../../assets/profile/logout.svg";
import Ionicons from 'react-native-vector-icons/Ionicons';



export default memo(({ style, onPress, profilemode }) => {

    return (
        <View style={defStyle.container}>
            {profilemode == profileMenu.account &&
                <View style={defStyle.item}>
                    <ProfileIcon />
                    <Text style={defStyle.itemText}>
                        My Account
                    </Text>
                    <Ionicons
                        name="chevron-forward-outline"
                        style={defStyle.icon} />
                </View>
            }
            {profilemode == profileMenu.friend &&
                <View style={defStyle.item}>
                    <FriendIcon />
                    <Text style={defStyle.itemText}>
                        Refer A Friend
                    </Text>
                    <Ionicons
                        name="chevron-forward-outline"
                        style={defStyle.icon} />
                </View>
            }
            {profilemode == profileMenu.transaction &&
                <View style={defStyle.item}>
                    <TransactionIcon />
                    <Text style={defStyle.itemText}>
                        My Transaction
                    </Text>
                    <Ionicons
                        name="chevron-forward-outline"
                        style={defStyle.icon} />
                </View>
            }
            {profilemode == profileMenu.recipient &&
                <View style={defStyle.item}>
                    <RecipientIcon />
                    <Text style={defStyle.itemText}>
                        My Recipients
                    </Text>
                    <Ionicons
                        name="chevron-forward-outline"
                        style={defStyle.icon} />
                </View>
            }
            {profilemode == profileMenu.policy &&
                <View style={defStyle.item}>
                    <PolicyIcon />
                    <Text style={defStyle.itemText}>
                        Privacy Policy
                    </Text>
                    <Ionicons
                        name="chevron-forward-outline"
                        style={defStyle.icon} />
                </View>
            }
            {profilemode == profileMenu.setting &&
                <View style={defStyle.item}>
                    <ProfileIcon />
                    <Text style={defStyle.itemText}>
                        Setting
                    </Text>
                    <Ionicons
                        name="chevron-forward-outline"
                        style={defStyle.icon} />
                </View>
            }
            {profilemode == profileMenu.help &&
                <View style={defStyle.item}>
                    <ProfileIcon />
                    <Text style={defStyle.itemText}>
                        Help Center
                    </Text>
                    <Ionicons
                        name="chevron-forward-outline"
                        style={defStyle.icon} />
                </View>
            }
            {profilemode == profileMenu.contact &&
                <View style={defStyle.item}>
                    <ContactIcon />
                    <Text style={defStyle.itemText}>
                        Contact
                    </Text>
                    <Ionicons
                        name="chevron-forward-outline"
                        style={defStyle.icon} />
                </View>
            }
            {profilemode == profileMenu.logout &&
                <View style={defStyle.item}>
                    <ContactIcon />
                    <Text style={defStyle.itemText}>
                        Logout
                    </Text>
                    <Ionicons
                        name="chevron-forward-outline"
                        style={defStyle.icon} />
                </View>
            }
        </View>
    );
});

const defStyle = StyleSheet.create({
    container: {
        borderRadius: wScale(15),
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginVertical: hScaleRatio(5)
    },
    icon: {
        fontSize: 24,
    },
    itemText: {
        position: 'absolute',
        left: wScale(70),
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: "600",
        lineHeight: 20,
        color: colors.black,
        textAlign: 'left',
    },
    item: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});
