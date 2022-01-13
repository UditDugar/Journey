import React, { Component,useState } from 'react';
import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ripple from 'react-native-material-ripple';
import { AppColors } from '../assets/AppColors';
import { AppFonts } from '../assets/fonts/AppFonts';
import { FontSize ,GStyles,HoriSpace, Spacing} from '../shared/Global.styles';

export const NextButton = ({
  onPress = () => {},
  disabled = true,
  title = 'Next',
  ActiveColor='white',
  InActiveColor='black'
}) => {
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 10,
        paddingHorizontal: 10,
        right: -10,
      }}
      disabled={disabled}
      onPress={() => {
        if (disabled) {
        } else onPress();
      }}
    >
      <Text
        style={{
          fontFamily: AppFonts.CalibriBold,
          color: disabled ?InActiveColor: ActiveColor  ,
          fontSize: FontSize.xlarge,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export const AccentButton = ({
  onPress = () => {},
  title = 'Post',
  style = {},
  disabled = false,
}) => {
  return (
    <Ripple
      disabled={disabled}
      onPress={() => onPress()}
      style={{
        backgroundColor: disabled ? AppColors.LightGrey : AppColors.Red,
        paddingVertical: 5,
        paddingHorizontal: 16,
        borderRadius: 30,
        ...style,
        justifyContent:"center",
        alignItems:"center"
      }}
    >
      <Text
        style={{
          fontSize: FontSize.large,
          fontFamily: AppFonts.CalibriBold,
          color: AppColors.white,
          fontWeight:"900"
        }}
      >
        {title}
      </Text>
    </Ripple>
  );
};

export const Container = ({
  padding = Spacing.large,
  
  children,
  style = {},
}) => {
  return (
    <View style={{ ...style, paddingHorizontal: padding }}>{children}</View>
  );
};


export const SelectableRadioButton=({
  data = [],
  initial = 0,
  onSelected,
  editable,
  horizontal = true,
  RightComponent = null,
  RightButtonOnPress = () => {},
  enableIcon = false,
}) =>{
  // data -> for passing dropdown data
  // initial -> for
  const [value, setValue] = useState('');

  React.useEffect(() => {
    if (data.length > 0) setValue(data[initial].key);
  }, [data]);

  return (
    <View
      style={[
        horizontal ? GStyles.flexRow : GStyles.flexColumn,
        { backgroundColor: AppColors.Transparent },
      ]}
    >
      {data.map((res) => {
        return (
          <View
            style={[
              GStyles.flexRow,
              {
                paddingVertical: Spacing.large,
                marginLeft:-10,
                justifyContent:"center",
                alignItems:"center"
              },
            ]}
            key={res.key}
          >
            <Pressable
              onPress={() => {
                if (editable) {
                  setValue(res.key);
                  onSelected(res);
                }
              }}
              style={[
                GStyles.containView,
                {
                  backgroundColor:
                    value === res.key
                      ? AppColors.white
                      : AppColors.LightGrey,
                  paddingHorizontal: 22,
                  paddingVertical: 10,
                  borderRadius: 30,
                  marginRight: 30,
                  width:100
                },
              ]}
            >
              <Text
                style={{
                  // ...GStyles.radioText,
                  fontSize: FontSize.inputText,
                  fontFamily: AppFonts.CalibriBold,
                  color:value === res.key?'black':'white',
                }}
              >
                {res.text}
              </Text>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
}


