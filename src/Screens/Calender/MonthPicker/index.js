import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import moment from 'moment';
import {Calendar, CalendarList} from 'react-native-calendars';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppColors} from '../../../assets/AppColors';
import {AppFonts} from '../../../assets/fonts/AppFonts';
import {AppHeader} from '../../../Components/AppHeader';
import {Container, DropdownHeader, NextButton} from '../../../Components/index';

import {MonthNames} from '../../../shared/Data.shared';
import {
  FontSize,
  GStyles,
  HoriSpace,
  Spacing,
  VertSpace,
} from '../../../shared/Global.styles';
import {NoideaIcon} from '../../../shared/Icon.Comp';
import Ripple from 'react-native-material-ripple';
import {useNavigation} from '@react-navigation/core';
import CalendarPicker from 'react-native-calendar-picker';

export const stringValueDate = (date, month, year) => {
  var dateString = `${date}`,
    monthString = `${month}`;
  if (date < 10) dateString = '0' + dateString;
  if (month < 10) monthString = '0' + monthString;

  return `${year}-${monthString}-${dateString}`;
};

// MONTH PICKER
export const MonthPicker = ({route}) => {
  const [YearSelected, setYearSelected] = React.useState(
    new Date().getFullYear(),
  );
  const [MonthIndex, setMonthIndex] = React.useState(0);
  const navigation = useNavigation();

  const [MonthSelected, setMonthSelected] = React.useState(
    new Date().getMonth(),
  );
  React.useEffect(() => {
    setMonthSelected(MonthIndex);
  }, [MonthIndex]);

  const ABHAYA = '2000-00-02';
  const maxDate = new Date(YearSelected, MonthSelected, 1);
  const MM = 'MM';
  
  //  alert(ABHAYA.length);
  const [selectedStartDate, setSelectedStartDate] = React.useState(null);
  const startDate = selectedStartDate ? selectedStartDate : '';
  return (
    <SafeAreaView style={{backgroundColor: '#161616', flex: 1}}>
      <AppHeader colorIcon={AppColors.white} enableBack></AppHeader>
      <VertSpace size={70} />

      <CalendarList
        horizontal
        pagingEnabled
        futureScrollRange={12}
        current={maxDate}
        onDayPress={day => {
          setSelectedStartDate(day.dateString),
            route.params.onReturn(day.dateString),
            navigation.goBack();
        }}
        markingType="multi-period"
        markedDates={{
          '2022-02-01': {
            periods: [{startingDay: false, endingDay: true, color: '#5f9ea0'}],
          },
          '2022-02-02': {
            periods: [
              {startingDay: true, endingDay: false, color: '#ffa500'},
              {color: 'transparent'},
            ],
          },
        }}
        // customHeaderTitle={
        //   <Text
        //     style={{
        //       fontWeight:"900",
        //       position: 'absolute',
        //       color: 'white',
        //       bottom: 10,
        //       fontSize:35
        //     }}>
        //     {maxDate.getMonth() }-{maxDate.getFullYear()}
            
        //   </Text>
        // }
        headerStyle={{marginTop: 100}}
        // renderHeader={maxD}
        theme={{
          textDayFontFamily: AppFonts.CalibriBold,
          calendarBackground: '#161616',
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayTextColor: AppColors.DarkGrey,
          todayTextColor: AppColors.blue,
          dayTextColor: AppColors.white,
          monthTextColor: AppColors.green,
          indicatorColor: AppColors.LightGrey,
          textMonthFontWeight: '900',
          textMonthFontSize: 35,
          
        }}
      />
      <Text style={{color: 'white', textAlign: 'center', fontWeight: '900'}}>
        {selectedStartDate}
      </Text>
    </SafeAreaView>
  );
};
