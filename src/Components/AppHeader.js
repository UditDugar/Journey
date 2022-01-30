import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {View, Text, Pressable} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {AppColors} from '../assets/AppColors';
import { AppFonts } from '../assets/fonts/AppFonts';
import {AppDimens, FontSize, GStyles, HoriSpace, Spacing} from '../shared/Global.styles';
import {BackArrowIcon, DownArrowIcon} from '../shared/Icon.Comp';

export const AppHeader = ({
  padding = Spacing.large,
  disabled = true,
  backgroundColor = AppColors.Transparent,
  enableBack = false,
  onBackPress = () => {},
  preventDefault = false,
  children,
  colorIcon,
}) => {
  const nav = useNavigation();
  return (
    <View
      style={[
        GStyles.flexRow,
        {
          paddingRight: padding,
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 100,
          // position: 'absolute',
          // elevation: 10,
          height: Platform.OS === 'android' ? 60 : 60,
          backgroundColor: backgroundColor,
        },
      ]}>
      {enableBack ? (
        <Pressable
          onPress={() => {
            if (preventDefault == false) nav.goBack();
            onBackPress();
          }}
          style={{padding: padding}}>
          {/* <BackArrow width={20} height={20} /> */}
          <BackArrowIcon color={colorIcon} size={25} />
        </Pressable>
      ) : (
        <View />
      )}
      {/* <View style={{ backgroundColor: 'wheat', flexGrow: 1 }}>
                  <Text>Jello</Text>
  
              </View> */}
      <View style={{paddingHorizontal: 0}}>{children}</View>
    </View>
  );
};

export const ModalHeader = ({
  disabled = true,
  backgroundColor = AppColors.Transparent,
  enableBack = false,
  onBackPress = () => {},
  children,
}) => {
  return (
    <View
      style={[
        GStyles.flexRow,
        {
          paddingRight: Spacing.large,
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 100,
          // elevation: 10,
          height: Platform.OS === 'android' ? 60 : 60,
          backgroundColor: backgroundColor,
        },
      ]}>
      {enableBack ? (
        <Pressable
          onPress={() => onBackPress()}
          style={{padding: Spacing.large}}>
          <BackArrowIcon width={25} height={25} />
        </Pressable>
      ) : null}
      <View style={{paddingHorizontal: 0}}>{children}</View>
    </View>
  );
};

export const DropdownHeader = ({
  title = 'Header',
  RightContainer = () => null,
  onHeaderPress = () => {},
  fontStyles = null,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: AppColors.green,
      }}
    >
      <Ripple
        onPress={() => onHeaderPress()}
        rippleContainerBorderRadius={20}
        rippleFades={true}
        style={{
          width: AppDimens.width * 0.6,
          flexDirection: 'row',
          alignItems: 'center',
          paddingRight: 10,
          // backgroundColor: AppColors.Red,
        }}
      >
        <Text
          ellipsizeMode={'tail'}
          numberOfLines={1}
          style={
            fontStyles !== null
              ? fontStyles
              : {
                  fontSize: FontSize.x4large,
                  color: AppColors.white,
                  fontFamily: AppFonts.CalibriBold,
                }
          }
        >
          {title}
        </Text>
        <HoriSpace size={Spacing.large} />
        <DownArrowIcon size={13} />
      </Ripple>
      <RightContainer />
    </View>
  );
};