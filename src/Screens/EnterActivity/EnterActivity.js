import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {AppColors} from '../../assets/AppColors';
import {
  CenterRowContainer,
  Container,
  NextButton,
  SelectableRadioButton,
} from '../../Components';
import {AppHeader} from '../../Components/AppHeader';
import {AccentButton} from '../../Components/index';
import {FontSize, Spacing, VertSpace} from '../../shared/Global.styles';
import {EditWIcon} from '../../shared/Icon.Comp';
import {Label, Label1} from '../Profile/ProfileScreen';
import moment from 'moment';
import {MonthString} from '../Journey/JourneyScreen';
import {API_TYPE, APP_APIS} from '../../ApiLogic/API_URL';
import {PostApiCallWithBody} from '../../ApiLogic/Auth.Api';

export const YesNoOptions = [
  {
    key: '1',
    text: 'yes',
  },
  {
    key: '2',
    text: 'no',
  },
];

export const EnterActivity = ({route, navigation}) => {
  const [item, setItem] = useState(null);
  const [selector, setSelector] = React.useState({key: 1, text: 'yes'});
  const [selector1, setSelector1] = React.useState({key: 1, text: 'yes'});
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
  const [asyncDeviceInfo, setAsyncDeviceInfo] = React.useState(null);
  const newDate = state.split('-');
  const [user, setUser] = useState(null);
  const EnterActivities = async () => {
    const data = {
      user_id: user.user.id,
      activity_id: item.id,
      activity_date: state,
      activity_time: `${time.hour}:${time.min}`,
      is_important: selector.text,
      is_liked: selector1.text,
    };

    console.log(data);
    PostApiCallWithBody(
      APP_APIS.ACTIVITY_ADD,
      API_TYPE.POST,
      asyncDeviceInfo.user.token,
      data,
    )
      .then(data => {
        console.log('message:', data);
        navigation.goBack();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const [time, setTime] = useState({hour: 1, min: 30});

  React.useEffect(() => {
    retrieveData();
  }, []);
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('UserData');
      const user = await AsyncStorage.getItem('token');
      setAsyncDeviceInfo(JSON.parse(user));
      setUser(JSON.parse(user));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <AppHeader colorIcon={AppColors.white} enableBack>
        <AccentButton
          title="Submit"
          disabled={item === null ? true : false}
          onPress={() => {
            EnterActivities();
          }}
        />
      </AppHeader>
      <Container padding={Spacing.xxlarge} style={{flex: 1}}>
        <VertSpace size={40} />

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ActivityListScreen', {
              onReturn: item => {
                setItem(item);
              },
              token: asyncDeviceInfo.user.token,
            })
          }>
          {item === null ? (
            <Text style={styles.EnterActivity}>Enter Activity ...</Text>
          ) : (
            <CenterRowContainer>
              <Text
                style={[
                  styles.EnterActivity,
                  {color: AppColors.white, maxWidth: 200},
                ]}>
                {item.name}
              </Text>
              <Text onPress={() => setItem(null)}>
                <EditWIcon size={16} />
              </Text>
            </CenterRowContainer>
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
        <Text
          style={{
            color: 'white',
            fontSize: FontSize.inputText,
            fontWeight: '900',
          }}>
          {newDate[2]}th <MonthString MonthIndex={newDate[1]} />, {newDate[0]}
        </Text>
        <VertSpace size={40} />
        <Label
          title="Time Duration"
          onPress={() =>
            navigation.navigate('TimePicker', {
              onReturn: item => {
                setTime(item), console.log(item);
              },
            })
          }
        />
        <VertSpace size={10} />

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              color: 'white',
              fontSize: FontSize.inputText,
              fontWeight: '900',
            }}>
            {time.hour}h {time.min}min
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
