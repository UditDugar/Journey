import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {useNavigation} from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppColors} from '../../assets/AppColors';
import {AppFonts} from '../../assets/fonts/AppFonts';
import {NextButton, SelectableRadioButton} from '../../Components';
import {AppHeader} from '../../Components/AppHeader';
import {
  FontSize,
  GStyles,
  Spacing,
  VertSpace,
} from '../../shared/Global.styles';
import {Container} from '../../Components/index';
import {wp} from '../../shared/dimens';
import {
  BioCircleIcon,
  CameraWhiteIcon,
  EditIcon,
  EditWIcon,
} from '../../shared/Icon.Comp';
import {ImgSourceCheck} from '../../Components/BioImageView';

export const ProfilePicker = ({
  imageUrlParmas = null,
  style = {},
  size = wp(180),
  onSelected = () => {},
  onPress,
}) => {
  const navigation = useNavigation();

  // PHOTO LIST
  return (
    <View style={{width: size, height: size}}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        style={{...style, position: 'absolute'}}>
        <View>
          <BioCircleIcon size={size} />
          <Image
            resizeMode={'cover'}
            resizeMethod="resize"
            style={{
              width: size,
              height: size,
              borderRadius: size / 2,
              position: 'absolute',
            }}
            source={{uri: imageUrlParmas}}          />
          <View style={{position: 'absolute', bottom: 5, right: 0}}>
            <CameraButtonWhite size={size / 3} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const GenderOptions = [
  {
    key: '1',
    text: 'Male',
  },
  {
    key: '2',
    text: 'Female',
  },
  {
    key: '3',
    text: 'Others',
  },
];

export const CameraButtonWhite = ({size}) => {
  return (
    <View
      style={{
        ...GStyles.containView,
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: AppColors.DarkGrey,
      }}>
      <CameraWhiteIcon size={parseInt(size * 0.5)} />
    </View>
  );
};

export const ProfileScreen = ({route}) => {
  const {number} = route.params;
  const [loading, setLoading] = React.useState(false);
  const [Username, setUsername] = React.useState('');
  const [BirthDate, setBirthDate] = React.useState('');
  const [imageUri, setImageUri] = React.useState(null);
  const [Gender, setGender] = React.useState({key: 1, text: 'male'});
  const [disable, setDisable] = React.useState(true);
  const navigation = useNavigation();
  
  React.useEffect(() => {
    if (route.params?.imageList) {
      ImagePicker.openCropper({
        path: route.params.imageList[0],
        width: 400,
        height: 400,
        cropperCircleOverlay: true,
        cropperToolbarTitle: 'Crop Photo',
        cropperActiveWidgetColor: 'white',
        cropperStatusBarColor: 'black',
        cropperToolbarColor: 'black',
        cropperToolbarWidgetColor: 'white',
      }).then(image => {
        setImageUri(image.path);
        console.log(image.path);
      });
    }
  }, [route.params?.imageList]);

  const [asyncDeviceInfo, setAsyncDeviceInfo] = React.useState(null);
  React.useEffect(() => {
    retrieveData();
  });
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      setAsyncDeviceInfo(JSON.parse(value));
    } catch (error) {
      console.log(error);
    }
  };

  const timestamp = new Date();
  let imageFile = {
    uri: imageUri,
    type: 'image/jpeg',
    name: `${Username}${timestamp}.jpg`,
  };

  const Registration = async () => {
    var store = new FormData();
    store.append('file', imageFile);
    store.append('name', Username);
    store.append('year_of_birth', BirthDate);
    store.append('gender', Gender.text);
    store.append('phone', number);

    const url = 'https://bingehq.com/journey-app/api/update-user';
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${asyncDeviceInfo.user.token}`,
      },
      body: store,
    })
      .then(response => response.json())
      .then(async data => {
        if (data.status === 1) {
          await AsyncStorage.setItem('UserData', JSON.stringify(data.user));

          navigation.navigate('AddListScreen');
        } else {
          null;
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <SafeAreaView style={[GStyles.containerFlex, {backgroundColor: 'black'}]}>
      <AppHeader colorIcon={AppColors.white} enableBack>
        <NextButton
          disabled={disable}
          onPress={() => {
            Registration();
          }}
        />
      </AppHeader>

      <ScrollView keyboardShouldPersistTaps="always">

        <VertSpace size={10} />
        <Container padding={Spacing.xxlarge}>
          <View style={{alignItems: 'center'}}>
            <ProfilePicker
              imageUrlParmas={imageUri}
              onPress={() => {
                navigation.navigate('PhotosListScreen', {
                  onReturn: item => {
                    setImageUri(item);
                  },
                  reg: true,
                });
              }}
            />
          </View>

          <VertSpace size={40} />
          <View style={{paddingLeft: 0}}>
            <Label title={'Username'} required={true} />
            <View
              style={{
                ...styles.textInputContainer,
                backgroundColor:
                  Username.length == 0 ? AppColors.LightGrey : AppColors.white,
              }}>
              <TextInput
                autoFocus={false}
                style={{
                  fontFamily: AppFonts.CalibriBold,
                  fontSize: FontSize.inputText,
                  width: '90%',
                  color: 'black',
                  height: 50,
                }}
                maxLength={25}
                value={Username}
                onChangeText={textValue => {
                  setUsername(textValue), setDisable(false);
                }}
                placeholder={'Enter name'}
                placeholderTextColor={AppColors.white}
              />
            </View>
            <VertSpace size={Spacing.size40} />
          </View>

          <View style={{paddingLeft: 0}}>
            <Label title={'Year of birth'} required />
            <View
              style={{
                ...styles.textInputContainer,
                width: wp(100),
                ...GStyles.containView,
                backgroundColor:
                  BirthDate.length == 0 ? AppColors.LightGrey : AppColors.white,
              }}>
              <TextInput
                style={{
                  fontFamily: AppFonts.CalibriBold,
                  fontSize: FontSize.inputText,
                  width: wp(80),
                  color: 'black',
                  height: 50,
                }}
                keyboardType="numeric"
                maxLength={4}
                value={BirthDate}
                onChangeText={textValue => {
                  var currentYear = new Date().getFullYear();
                  var inputYear = parseInt(textValue);
                  if (textValue.length == 4) {
                    if (currentYear - inputYear >= 8) setBirthDate(textValue);
                  } else setBirthDate(textValue), setDisable(false);
                }}
                placeholder={'YYYY'}
                placeholderTextColor={AppColors.VeryLightGrey}
              />
            </View>
          </View>

          <VertSpace size={Spacing.size40} />
          <Label1 title={'Gender'} />
          <SelectableRadioButton
            ContainerWidth={125}
            buttonWidth={100}
            paddingHorizontal={10}
            data={GenderOptions}
            onSelected={value => {
              setGender(value), setDisable(false);
            }}
            editable={true}
          />

          <VertSpace size={50} />
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export const Label = ({title = 'Title', required = false, onPress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: 'wheat',
      }}>
      <Text
        style={{
          color: AppColors.MediumGrey,
          fontFamily: AppFonts.CalibriBold,
          fontSize: FontSize.large,
          lineHeight: FontSize.large,
        }}>
        {title}
      </Text>

      {required ? (
        <Text
          style={{
            color: AppColors.Red,
            fontFamily: AppFonts.CalibriBold,
            fontSize: FontSize.large,
            lineHeight: FontSize.large,
          }}>
          *
        </Text>
      ) : (
        <Text onPress={onPress}>
          <EditWIcon size={16} />
        </Text>
      )}
    </View>
  );
};

export const Label1 = ({title = 'Title', required = false, onPress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text
        style={{
          color: AppColors.MediumGrey,
          fontFamily: AppFonts.CalibriBold,
          fontSize: FontSize.large,
          lineHeight: FontSize.large,
        }}>
        {title}
      </Text>

      {required ? (
        <Text
          style={{
            color: AppColors.Red,
            fontFamily: AppFonts.CalibriBold,
            fontSize: FontSize.large,
            lineHeight: FontSize.large,
          }}>
          *
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    backgroundColor: AppColors.VeryLightGrey,
    flexDirection: 'row',
    width: '90%',
    borderRadius: 30,
    paddingHorizontal: 10,
    marginLeft: -10,
    marginTop: 10,
  },
});
