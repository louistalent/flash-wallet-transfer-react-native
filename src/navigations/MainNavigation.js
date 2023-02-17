import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import MainScreen from '../scenes/auth/MainScreen';
import SplashScreen from '../scenes/auth/SplashScreen';
import LoginScreen from '../scenes/auth/LoginScreen';
import RegisterScreen from '../scenes/auth/RegisterScreen';
import Register2Screen from '../scenes/auth/Register2Screen';
import VerifyScreen from '../scenes/auth/VerifyScreen';
import SuccessScreen from '../scenes/auth/SuccessScreen';
import TransferScreen from '../scenes/main/home/Transfer';
import SendThrough from '../scenes/main/home/SendThrough';
import PaymentDetail from '../scenes/main/home/PaymentDetail';
import PaymentDone from '../scenes/main/home/PaymentDone';
import SideMenu from '../scenes/main/home/SideMenu';
import ProfileScreen from '../scenes/main/extra/ProfileScreen';
import LanguageScreen from '../scenes/main/extra/LanguageScreen';
import NFTScreen from '../scenes/main/extra/NFTScreen';
import NotificationScreen from '../scenes/main/extra/NotificationScreen';
import CardScreen from '../scenes/main/card/CardScreen';
import CardDetailScreen from '../scenes/main/card/CardDetailScreen';
import FirstScreen from '../scenes/main/wallet/FirstScreen';
import ConfirmScreen from '../scenes/main/wallet/ConfirmScreen';
import CreateScreen from '../scenes/main/wallet/CreateScreen';
import ImportScreen from '../scenes/main/wallet/ImportScreen';
import SecureScreen from '../scenes/main/wallet/SecureScreen';
import WriteDownScreen from '../scenes/main/wallet/WriteDownScreen';
import WalletSuccessScreen from '../scenes/main/wallet/WalletSuccessScreen';
import BankTransfer from '../scenes/main/home/ReviewDetail';


const DrawerNavigation = createDrawerNavigator({
  MainScreen: {
    screen: MainScreen,
  },
  SplashScreen: {
    screen: SplashScreen
  },
  LoginScreen: {
    screen: LoginScreen
  },
  RegisterScreen: {
    screen: RegisterScreen
  },
  Register2Screen: {
    screen: Register2Screen
  },
  VerifyScreen: {
    screen: VerifyScreen
  },
  SuccessScreen: {
    screen: SuccessScreen
  },
  TransferScreen: {
    screen: TransferScreen
  },
  SendThrough: {
    screen: SendThrough
  },
  PaymentDetail: {
    screen: PaymentDetail
  },
  PaymentDone: {
    screen: PaymentDone
  },
  ProfileScreen: {
    screen: ProfileScreen
  },
  SideMenu: {
    screen: SideMenu
  },
  LanguageScreen: {
    screen: LanguageScreen
  },
  NFTScreen: {
    screen: NFTScreen
  },
  NotificationScreen: {
    screen: NotificationScreen
  },
  CardScreen: {
    screen: CardScreen
  },
  CardDetailScreen: {
    screen: CardDetailScreen
  },
  FirstScreen: {
    screen: FirstScreen
  },
  ConfirmScreen: {
    screen: ConfirmScreen
  },
  CreateScreen: {
    screen: CreateScreen
  },
  ImportScreen: {
    screen: ImportScreen
  },
  SecureScreen: {
    screen: SecureScreen
  },
  WalletSuccessScreen: {
    screen: WalletSuccessScreen
  },
  WriteDownScreen: {
    screen: WriteDownScreen
  },
  BankTransfer: {
    screen: BankTransfer
  }
},
  {
    initialRouteName: 'SplashScreen',
    drawerPosition: 'left',
    backBehavior: "history",
    contentComponent: SideMenu,
    defaultNavigationOptions: {
      gestureEnabled: false,
      headerShown: false,
      headerTitle: () => null,
    }
  },
);

export default DrawerNavigation;
