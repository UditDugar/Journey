import React, {useState} from 'react';
import {Keyboard, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  AppDimens,
  FontSize,
  GStyles,
  HoriSpace,
  Spacing,
  VertSpace,
} from '../../shared/Global.styles';
import {AppColors} from '../../assets/AppColors';
import {AppFonts} from '../../assets/fonts/AppFonts';
import Country1 from '../../assets/svg/Flags/Country1.svg';
import Country2 from '../../assets/svg/Flags/Country2.svg';
import Ripple from 'react-native-material-ripple';
import {ActivityIndicator, Modal, Portal} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import DeviceInfo from 'react-native-device-info';

import {wp} from '../../shared/dimens';
import {ScreenLoader} from '../../Components/ScreenLoader';
import {Container, NextButton} from '../../Components';
import {AppHeader, ModalHeader} from '../../Components/AppHeader';
import {DownArrowIcon} from '../../shared/Icon.Comp';
import {useNavigation} from '@react-navigation/native';
import {LoginApi, SendOtpAPiCall} from '../../ApiLogic/Auth.Api';
import {Gravities, showToast} from '../../shared/Functions/ToastFunctions';
import {API_TYPE, APP_APIS} from '../../ApiLogic/API_URL';
import AsyncStorage from '@react-native-community/async-storage';

let CountryData = {
  india: {
    key: 'India',
    value: 'India (IN)',
    dropdownData: 'India (+91)',
    countrCode: '91',
    limit: 10,
  },

  uae: {
    key: 'UAE',
    value: 'United Arab Emirates (UAE)',
    dropdownData: 'UAE (+971)',
    countrCode: '971',
    limit: 9,
  },
};

export function LoginScreen() {
  const [loading, setLoading] = React.useState(1);
  const [MobileNumber, setMobileNumber] = React.useState('');
  const [countryOptionsVisible, setcountryOptionsVisible] =
    React.useState(false);
  const [Country, setCountry] = React.useState('india');

  let countryCode = CountryData[Country].countrCode;
  let formattedMobileNumber = `${countryCode} ${MobileNumber.substring(
    0,
    3,
  )}-${MobileNumber.substring(3, 6)}-${MobileNumber.substring(6, 10)}`;
  const navigation = useNavigation();
  const [userData, setUserData] = React.useState([]);

  const setLoginLocal = async () => {
    AsyncStorage.clear();
    setLoading(0);
    const phone = {
      phone: MobileNumber,
    };

    LoginApi(APP_APIS.LOGIN, API_TYPE.POST, phone)
      .then(data => {
        console.log('Success:', data);
        setUserData(data);
        setLoading(data.status);
        if (data.status == 1) {
          navigation.navigate('OtpVerificationScreen', {
            number: MobileNumber,
            is_new: data.is_new_user,
          });
          showToast("OTP sent!",Gravities.BOTTOM)

          alert(`Your OTP:-${data.user.otp}`);
        } else if(data.status==0) {
          showToast("OTP sent error",Gravities.BOTTOM)
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.white}}>
      <View style={[GStyles.wallpaperBackground, {backgroundColor: 'black'}]}>
        <AppHeader colorIcon={'white'}>
          <NextButton
            disabled={
              MobileNumber.length < CountryData[Country].limit ? true : false
            }
            onPress={() => {setLoginLocal()}}
          />
        </AppHeader>

        <CountrySelect
          onSubmit={country => {
            setCountry(country);
          }}
          isVisible={countryOptionsVisible}
          onclose={() => setcountryOptionsVisible(false)}
        />

        <VertSpace size={50} />
        <View
          style={{alignItems: 'center', paddingHorizontal: Spacing.xxlarge}}>
          <Text
            style={{
              color: '#fff',
              fontFamily: AppFonts.CalibriBold,
              fontSize: FontSize.x3large,
            }}>
            OTP Verification
          </Text>
          <VertSpace size={20} />

          <VertSpace size={Spacing.xxlarge} />

          <TextInput
            placeholderTextColor={AppColors.white}
            autoFocus
            onFocus={() => Keyboard.addListener()}
            style={{
              // width: '100%',
              paddingHorizontal: 40,
              color: '#000',
              fontFamily: AppFonts.CalibriBold,
              fontSize: FontSize.xlarge,
              textAlign: 'center',
              backgroundColor:
                MobileNumber.length > 0 ? AppColors.white : AppColors.DarkGrey,
              borderRadius: 40,
            }}
            maxLength={10}
            keyboardType="number-pad"
            value={MobileNumber}
            onChangeText={MobileNumber => setMobileNumber(MobileNumber)}
            placeholder={'Enter mobile Number'}
            placeholderTextColor={AppColors.LightGrey}
          />

          <VertSpace size={Spacing.xlarge} />

          <View>
            <Ripple
              rippleContainerBorderRadius={30}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => setcountryOptionsVisible(true)}>
              <TextInput
                editable={false}
                style={{
                  width: wp(180),
                  textAlign: 'center',
                  fontFamily: AppFonts.CalibriBold,
                  fontSize: FontSize.inputText,
                  color: AppColors.white,
                }}
                placeholder={'Country Code'}
                value={CountryData[Country].dropdownData}
              />
              <DownArrowIcon size={FontSize.short} />
            </Ripple>
          </View>
        </View>

        {loading == 0 ? <ActivityIndicator size="large" color="#fff" /> : null}
      </View>
    </SafeAreaView>
  );
}

export const CountrySelect = ({
  isVisible,
  onclose = () => {},
  onSubmit = () => {},
}) => {

  const [Country, setCountry] = React.useState('india');
  return (
    <View>
      <Portal>
        <Modal
          visible={isVisible}
          onDismiss={onclose}
          style={{justifyContent: 'center', alignItems: 'center'}}
          contentContainerStyle={{
            backgroundColor: 'white',
            width: AppDimens.width * 0.8,
            borderRadius: 30,
          }}>
          <View style={{backgroundColor: 'white', ...GStyles.ModalContainer}}>
            <View style={GStyles.ModalContainer}>
              <VertSpace size={10} />
              <Container padding={5}>
                <ModalHeader enableBack onBackPress={() => onclose()}>
                  <NextButton
                    disabled={false}
                    ActiveColor={AppColors.DarkGrey}
                    title="Done"
                    onPress={() => {
                      onSubmit(Country);
                      onclose();
                    }}
                  />
                </ModalHeader>
              </Container>

              <VertSpace size={10} />
              <Container padding={20}>
                <Text
                  style={{
                    ...GStyles.headerStyles,
                    fontSize: FontSize.inputText,
                  }}>
                  Select a Country
                </Text>

                <VertSpace size={20} />
                <TouchableOpacity
                  onPress={() => setCountry('india')}
                  style={GStyles.flexRow}>
                  <View
                    rippleColor={AppColors.DarkGrey}
                    style={GStyles.radioCircle}>
                    <View>
                      {Country === 'india' ? (
                        <View style={GStyles.selectedRb} />
                      ) : null}
                    </View>
                  </View>

                  <HoriSpace size={10} />
                  <Country1 width={25} height={25} />
                  <HoriSpace size={10} />
                  <Text
                    style={{
                      fontFamily: AppFonts.CalibriRegular,
                      color: AppColors.DarkGrey,
                      fontSize: FontSize.medium,
                    }}>
                    India (IN)
                  </Text>
                </TouchableOpacity>

                <VertSpace size={20} />
                <TouchableOpacity
                  onPress={() => setCountry('uae')}
                  style={GStyles.flexRow}>
                  <View
                    rippleColor={AppColors.DarkGrey}
                    style={GStyles.radioCircle}>
                    <View>
                      {Country === 'uae' ? (
                        <View style={GStyles.selectedRb} />
                      ) : null}
                    </View>
                  </View>
                  <HoriSpace size={10} />
                  <Country2 width={25} height={25} />
                  <HoriSpace size={10} />
                  <Text
                    style={{
                      fontFamily: AppFonts.CalibriRegular,
                      color: AppColors.DarkGrey,
                      fontSize: FontSize.medium,
                    }}>
                    United Arab Emirates (UAE)
                  </Text>
                </TouchableOpacity>
              </Container>
            </View>
          </View>
        </Modal>
      </Portal>
    </View>
  );
};
