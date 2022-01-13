import { useNavigation } from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppColors } from '../../assets/AppColors';
import { AppFonts } from '../../assets/fonts/AppFonts';
import { NextButton } from '../../Components';
import { AppHeader } from '../../Components/AppHeader';
import { FontSize, GStyles, Spacing, VertSpace } from '../../shared/Global.styles';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { AppColors } from '../../../assets/AppColors';
// import { FontSize, GStyles, Spacing, VertSpace } from 'shared/Global.styles';
// import { useDispatch } from 'react-redux';
// import OTPInputView from '@twotalltotems/react-native-otp-input';
// import { AppFonts } from 'assets/fonts/AppFonts';
// import { AppHeader } from 'components/AppHeader';
// import { useEffect } from 'react';
// import { AuthContext } from '../../../Navigator/router';
// import {
//   LoginApiCall,
//   sendOtpApiCall,
//   SendOtpAPiCall,
// } from '../../../ApiLogic/Auth.Api';
// import Spinner from '../../../components/Spinner';
// import { NextButton } from '../../../components/Mini';
// import Toast from 'react-native-simple-toast';
// import DeviceInfo from 'react-native-device-info';
// import { useClipboard } from '@react-native-clipboard/clipboard';
// import { saveVerifiedNumber } from 'redux/reducers/UserAuth.reducer';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { STR_KEYS } from 'shared/Storage';
// import { showToast } from 'shared/Functions/ToastFunctions';
// import { firebase } from '@react-native-firebase/messaging';
// import analytics from '@react-native-firebase/analytics';

const OTP_INPUT_SIZE = 6;

export function OtpVerification({ route }) {
//   const [data, setString] = useClipboard();
  const [code, setCode] = React.useState('');
  const [apiLoad, setApiLoad] = React.useState(false);
//   const { signIn } = React.useContext(AuthContext);
  const [asyncDeviceInfo, setAsyncDeviceInfo] = React.useState({});
//   const dispatch = useDispatch();

//   const { MobileNumber, countryCode, formattedMobileNumber } = route.params;

//   const loginMethod = async OtpCode => {
//     const { MobileNumber, countryCode } = route.params;

//     // var raw = JSON.stringify({
//     //   phone: MobileNumber,
//     //   otp: OtpCode,
//     //   deviceID: asyncDeviceInfo.deviceID,
//     //   deviceToken: asyncDeviceInfo.deviceToken,
//     //   deviceType: asyncDeviceInfo.deviceType,
//     // });
//     // LOGIN API CALL
//     const uniqueId = DeviceInfo.getUniqueId();
//     const fcmToken = await firebase.messaging().getToken();

//     console.log({ uniqueId, fcmToken, platform: Platform.OS });
//     LoginApiCall({
//       phone: MobileNumber,
//       otp: OtpCode,
//       deviceID: uniqueId,
//       deviceToken: fcmToken.toString(),
//       deviceType: Platform.OS.toString(),
//     })
//       .then(response => {
//         if (response.result === 'failure') {
//           setCode('');
//           Toast.showWithGravity(
//             'Wrong otp. Please try again',
//             Toast.LONG,
//             Toast.CENTER,
//           );
//         } else {
//           if (response.status === 'old') {
//             analytics().setUserProperties({
//               name: response.user.name,
//               phone: response.user.phone,
//             });

//             analytics().logLogin({ method: 'otp' });
//             signIn({
//               token: response.token,
//               userData: response.user,
//               countryCode,
//             });
//           } else {
//             const setVerifiedNumber = async () => {
//               try {
//                 await AsyncStorage.setItem(
//                   STR_KEYS.VERIFIED_NUMBER,
//                   MobileNumber,
//                 );
//               } catch (e) {}
//             };
//             const setCountryCodeLocal = async () => {
//               try {
//                 await AsyncStorage.setItem(STR_KEYS.COUNTRY_CODE, countryCode);
//               } catch (e) {}
//             };
//             setVerifiedNumber();
//             setCountryCodeLocal();
//             dispatch(saveVerifiedNumber({ verifiedNumber: MobileNumber }));
//           }
//         }
//       })
//       .catch(error => {});
//   };
const navigation=useNavigation()
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[GStyles.wallpaperBackground,{backgroundColor:"black"}]}>
        {/* LOADER */}
        {/* <Spinner visible={apiLoad} textContent={'Loading...'} /> */}

        {/* HEADER */}
        <AppHeader enableBack>
          <NextButton
            title={'Done'}
            disabled={code.length < OTP_INPUT_SIZE}
            ActiveColor='white'
            InActiveColor='black'
            onPress={() => {
            //   loginMethod(code);
            navigation.navigate('SettingScreen')
            }}
          />
        </AppHeader>

        {/* CONTENT MAIN DESING */}
        <VertSpace />
        <Text
          style={{
            fontSize: FontSize.xxlarge,
            textAlign: 'center',
            fontFamily: AppFonts.CalibriBold,
            color: AppColors.white,
          }}
        >
          OTP VERIFICATION
        </Text>

        <VertSpace size={Spacing.size40} />


        {/* {loading ? (
          <View style={{ padding: 40 }}>
            <ActivityIndicator color={'black'} size={FontSize.x4large} />
          </View>
        ) : null} */}
        {/* <Text style={{ fontSize: 15 }}>{code}</Text> */}

        <View style={{ width: '100%', alignItems: 'center' }}>
          <OTPInputView
            style={styles.otpcontainer}
            pinCount={OTP_INPUT_SIZE}
            selectionColor={AppColors.white}
            autoFocus={true}
            codeInputFieldStyle={styles.codeInputFieldStyle}
            codeInputHighlightStyle={styles.codeInputHighlightStyle}
            onCodeFilled={code => {
              setCode(code);
            }}
          />


          {/* <Timer initialMinute={2} initialSeconds={30} />
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.message_1}>Didn't receive the OTP ? </Text>
            <HoriSpace size={Spacing.medium} />
            <Ripple
              onPress={() => {
                Toast.showWithGravity(
                  'Please fill all details',
                  Toast.SHORT,
                  Toast.CENTER
                );
              }}
              rippleFades={true}
              rippleContainerBorderRadius={10}
            >
              <Text style={{ ...styles.message_1, color: AppColors.Red }}>
                Resend OTP
              </Text>
            </Ripple>
          </View> */}
        </View>
      </View>
    </SafeAreaView>
  );
}

// const Timer = ({ initialMinute = 2, initialSeconds = 10 }) => {
//   const [minutes, setMinutes] = React.useState(initialMinute);
//   const [seconds, setSeconds] = React.useState(initialSeconds);
//   useEffect(() => {
//     let myInterval = setInterval(() => {
//       if (seconds > 0) {
//         setSeconds(seconds - 1);
//       }
//       if (seconds === 0) {
//         if (minutes === 0) {
//           clearInterval(myInterval);
//         } else {
//           setMinutes(minutes - 1);
//           setSeconds(59);
//         }
//       }
//     }, 1000);

//     return () => {
//       clearInterval(myInterval);
//     };
//   });

//   return (
//     <View>
//       {minutes === 0 && seconds === 0 ? null : (
//         <Text>
//           {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
//         </Text>
//       )}
//     </View>
//   );
// };

const styles = StyleSheet.create({
  otpcontainer: {
    width: '90%',
    backgroundColor: '#00000000',
    height: 120,
  },

  codeInputFieldStyle: {
    color: AppColors.white,
    backgroundColor: AppColors.MediumGrey,
    borderRadius: 10,
    fontSize: FontSize.large,
    fontFamily: AppFonts.CalibriBold,
  },
  codeInputHighlightStyle: {
    color: AppColors.white,
    backgroundColor: AppColors.MediumGrey,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
  message_1: {
    fontFamily: AppFonts.CalibriBold,
    color: AppColors.MediumGrey,
    fontSize: FontSize.large,
  },
});
