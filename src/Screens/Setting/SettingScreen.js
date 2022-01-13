import {
  AsyncStorage,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
} from 'react-native';
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
import {BioCircleIcon, CameraWhiteIcon, EditIcon} from '../../shared/Icon.Comp';
import {ImgSourceCheck} from '../../Components/BioImageView';

export const ProfilePicker = ({
  imageUrlParmas = null,
  style = {},
  size = wp(180),
  onSelected = () => {},
}) => {
  const navigation = useNavigation();

  // PHOTO LIST
  return (
    <View style={{width: size, height: size}}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          navigation.navigate('PhotosList', {
            pickerType: 'single',
            routeName: 'ProfileScreen',
          });
        }}
        style={{...style, position: 'absolute'}}>
        <View>
          {/* <View style={{ backgroundColor: 'red' }}>
                        <Text>nice</Text>
                    </View> */}
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
            source={{uri: ImgSourceCheck(imageUrlParmas)}}
            // source={{ uri: `https://picsum.photos/id/1/${size}` }}
          />
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

export const SettingScreen = () => {
  const [loading, setLoading] = React.useState(false);
  const [Username, setUsername] = React.useState('');
  const [BirthDate, setBirthDate] = React.useState('');
  const [imageUri, setimageUri] = React.useState(null);
  const [Gender, setGender] = React.useState({key: 1, text: 'male'});
  const [disable, setDisable] = React.useState(true);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[GStyles.containerFlex, {backgroundColor: 'black'}]}>
      <AppHeader colorIcon={AppColors.white} enableBack>
        <NextButton
          disabled={disable}
          onPress={() => {
            // UpdateDetails(),
            navigation.navigate('AddListScreen');
          }}
        />
      </AppHeader>

      <ScrollView keyboardShouldPersistTaps="always">
        {/* <Spinner visible={loading} textContent={'Loading...'} /> */}

        <VertSpace size={10} />
        <Container padding={Spacing.xxlarge}>
          <View style={{alignItems: 'center'}}>
            {/* <AppButton title="tets" onPress={() => CropPhoto()} /> */}
            <ProfilePicker imageUrlParmas={imageUri} />
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
          <Label title={'Gender'} />
          <SelectableRadioButton
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
          <EditIcon size={16} />
        </Text>
      )}
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
