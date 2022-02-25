import {useNavigation} from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {SafeAreaView} from 'react-native-safe-area-context';
import {AppColors} from '../../assets/AppColors';
import {AppFonts} from '../../assets/fonts/AppFonts';
import {NextButton} from '../../Components';
import {AppHeader} from '../../Components/AppHeader';
import {
  FontSize,
  GStyles,
  Spacing,
  VertSpace,
} from '../../shared/Global.styles';
import {LoginApi} from '../../ApiLogic/Auth.Api';
import {API_TYPE, APP_APIS} from '../../ApiLogic/API_URL';
import { Gravities, showToast } from '../../shared/Functions/ToastFunctions';

const OTP_INPUT_SIZE = 6;

export function OtpVerification({route}) {
  const [loading, setLoading] = React.useState(1);
  const [code, setCode] = React.useState('');

  const {number, is_new} = route.params;
  const navigation = useNavigation();

  const setLoginLocal = async () => {
    const data = {
      phone: number,
      otp: code,
    };

    LoginApi(APP_APIS.VERIFY_OTP, API_TYPE.POST, data)
      .then(async data => {
        console.log('Token:', data.status);
        setLoading(data.status);

        if (data.status === 1 && is_new === true) {
          await AsyncStorage.setItem('token', JSON.stringify(data));
          await AsyncStorage.setItem('is_login', 'true');

          navigation.navigate('ProfileScreen', {number: number});
          showToast("User Verified",Gravities.BOTTOM)

        } else if (data.status === 1 && is_new === false) {
          await AsyncStorage.setItem('token', JSON.stringify(data));
          await AsyncStorage.setItem('is_login', 'true');
          showToast("Login Successful",Gravities.BOTTOM)
          navigation.navigate('AddListScreen', {token: data.user.token});
        } else if (data.status === 0) {
          Alert.alert(
            "Alert ",
            "OTP is Incorrect",
            [
             
              { text: "OK", onPress: () => setLoading(1)}
            ]
          );

        } else {
          showToast("Login Error",Gravities.CENTER)
    
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[GStyles.wallpaperBackground, {backgroundColor: 'black'}]}>
        <AppHeader enableBack>
          <NextButton
            title={'Done'}
            disabled={code.length < OTP_INPUT_SIZE}
            ActiveColor="white"
            InActiveColor="black"
            onPress={() => {
              // loginMethod(code);
              setLoginLocal();
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
          }}>
          OTP VERIFICATION
        </Text>

        <VertSpace size={Spacing.size40} />

        <View style={{width: '100%', alignItems: 'center'}}>
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
        {loading == 0 ? <ActivityIndicator size="large" color="#fff" /> : null}
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
