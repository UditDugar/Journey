import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {AppColors} from '../../assets/AppColors';
import {Container, NextButton, SelectableRadioButton} from '../../Components';
import {AppHeader} from '../../Components/AppHeader';
import {AccentButton} from '../../Components/index';
import {FontSize, Spacing, VertSpace} from '../../shared/Global.styles';
import {CancelIcon, EditIcon, EditWIcon} from '../../shared/Icon.Comp';
import {Label, Label1} from '../Profile/ProfileScreen';
import moment from 'moment';
import {MonthString} from '../Journey/JourneyScreen';
import DateTimePicker from '@react-native-community/datetimepicker';
import {TextInput} from 'react-native-gesture-handler';

export const YesNoOptions = [
  {
    key: '1',
    text: 'Yes',
  },
  {
    key: '2',
    text: 'No',
  },
];

export const EnterActivity = ({route, navigation}) => {
  const [item, setItem] = useState(null);
  const [selector, setSelector] = React.useState({key: 1, text: 'Yes'});
  const [selector1, setSelector1] = React.useState({key: 1, text: 'Yes'});
  const [disable, setDisable] = React.useState(true);
  const stringValueDate = (date, month, year) => {
    var dateString = `${date}`,
      monthString = `${month}`;

    return `${year}-${monthString}-${dateString}`;
  };
  const CurrentDate = moment().date();
  const CurrentYear = moment().year();
  const CurrentMonthIndex = moment().month();
  const [state, setState] = React.useState(
    stringValueDate(CurrentDate, CurrentMonthIndex + 1, CurrentYear),
  );

  const newDate = state.split('-');
  const [group, setGroup] = useState('');

  const EnterActivities = async () => {
    if (item === null) {
      alert('Please add any activities');
    }else{
      let obj = {
        activity: item,
        imp: selector.key,
        like: selector1.key,
        time: TextData,
      };
      try {
        await AsyncStorage.setItem('ActivitiesList', JSON.stringify(obj));
        // alert("stored")
        navigation.goBack();
      } catch (err) {
        console.log(err);
      }
    }
    
  };
  
  const [TextData, setText] = useState('30');

  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <AppHeader colorIcon={AppColors.white} enableBack>
        <AccentButton title="Submit" onPress={EnterActivities} />
      </AppHeader>
      <Container padding={Spacing.xxlarge} style={{flex: 1}}>
        <VertSpace size={40} />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ActivityListScreen', {
              onReturn: item => {
                setItem(item);
                // alert(item)
              },
            })
          }>
          {item === null ? (
            <Text style={styles.EnterActivity}>Enter Activity ...</Text>
          ) : (
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={[
                  styles.EnterActivity,
                  {color: AppColors.white, maxWidth: 200},
                ]}>
                {item}
              </Text>
              <Text onPress={() => setItem(null)}>
                <EditWIcon size={16} />
              </Text>
            </View>
          )}
        </TouchableOpacity>

        <VertSpace size={40} />
        <Label
          title="Date"
          onPress={() =>
            navigation.navigate('MonthPicker', {
              onReturn: item => setState(item),
            })
          }
        />
        <VertSpace size={10} />
        <Text style={{color: 'white', fontSize: FontSize.inputText}}>
          {newDate[2]}th <MonthString MonthIndex={newDate[1]} />, {newDate[0]}
        </Text>
        <VertSpace size={40} />
        <Label1 title="Time Duration" onPress={() => alert('Abhaya')} />
        <VertSpace size={10} />

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
            placeholder="Enter Time duration"
            style={{
              borderBottomWidth: 1,
              borderColor: AppColors.MediumGrey,
              width: 40,
              height: 40,
              color: AppColors.white,
              fontSize: FontSize.large,
              paddingBottom: 5,
            }}
            placeholderTextColor={AppColors.Blackop1}
            value={TextData}
            numberOfLines={1}
            maxLength={3}
            onChangeText={text => setText(text)}
            keyboardType="numeric"
          />
          <Text style={{color: 'white', fontSize: FontSize.inputText}}>
            min
          </Text>
        </View>
        <VertSpace size={40} />
        <Text
          style={{
            color: AppColors.MediumGrey,
            fontSize: FontSize.large,
            fontWeight: '900',
          }}>
          Is it important ?
        </Text>
        <SelectableRadioButton
          data={YesNoOptions}
          onSelected={value => {
            setSelector(value), setDisable(false);
          }}
          editable={true}
        />
        <VertSpace size={20} />
        <Text
          style={{
            color: AppColors.MediumGrey,
            fontSize: FontSize.large,
            fontWeight: '900',
          }}>
          Do you like it ?
        </Text>
        <SelectableRadioButton
          data={YesNoOptions}
          onSelected={value => {
            setSelector1(value), setDisable(false);
          }}
          editable={true}
        />
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  EnterActivity: {
    fontWeight: '900',
    fontSize: FontSize.xxlarge,
    color: AppColors.MediumGrey,
  },
});
