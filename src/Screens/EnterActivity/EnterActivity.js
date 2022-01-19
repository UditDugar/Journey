import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AppColors} from '../../assets/AppColors';
import {Container, NextButton, SelectableRadioButton} from '../../Components';
import {AppHeader} from '../../Components/AppHeader';
import {AccentButton} from '../../Components/index';
import {FontSize, Spacing, VertSpace} from '../../shared/Global.styles';
import {CancelIcon, EditIcon, EditWIcon} from '../../shared/Icon.Comp';
import {Label} from '../Profile/ProfileScreen';
import moment from 'moment';
import { MonthString } from '../Journey/JourneyScreen';

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

  // const {data}=route.params
  // console.log(data);
  const [selector, setSelector] = React.useState({key: 1, text: 'Yes'});
  const [disable, setDisable] = React.useState(true);
  // const navigation = useNavigation();
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

  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <AppHeader colorIcon={AppColors.white} enableBack>
        <AccentButton title="Submit" />
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
                style={[styles.EnterActivity, {color: '#707070', maxWidth: 200}]}>
                {item}
              </Text>
              <Text onPress={() => setItem(null)}>
              <EditWIcon   size={16} />
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
          {newDate[2]}th{' '}
          <MonthString MonthIndex={newDate[1]}/>
          , {newDate[0]}
        </Text>
        <VertSpace size={40} />
        <Label title="Time Duration" onPress={() => alert('Abhaya')} />
        <VertSpace size={10} />
        <Text style={{color: 'white', fontSize: FontSize.inputText}}>
          30 minutes
        </Text>
        <VertSpace size={40} />
        <Text
          style={{
            color: AppColors.MediumGrey,
            fontSize: FontSize.large,
            fontWeight: '900',
          }}>
          What is important
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
            setSelector(value), setDisable(false);
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
