import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {View, Text, Pressable} from 'react-native';
import {AppColors} from '../assets/AppColors';
import {GStyles, Spacing} from '../shared/Global.styles';
import {BackArrowIcon} from '../shared/Icon.Comp';

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
