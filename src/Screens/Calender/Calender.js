import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { MonthPicker } from './MonthPicker';

export const Calender = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#161616',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'white'}}>Calender</Text>

      {/* <Calendar
        markingType={'period'}
        markedDates={{
          '2022-05-15': {marked: true, dotColor: '#50cebb'},
          '2022-05-16': {marked: true, dotColor: '#50cebb'},
          '2022-05-21': {
            startingDay: true,
            color: '#50cebb',
            textColor: 'white',
          },
          '2022-05-22': {color: '#70d7c7', textColor: 'white'},
          '2022-05-23': {
            color: '#70d7c7',
            textColor: 'white',
            marked: true,
            dotColor: 'white',
          },
          '2022-05-24': {color: '#70d7c7', textColor: 'white'},
          '2022-05-25': {endingDay: true, color: '#50cebb', textColor: 'white'},
        }}
      /> */}
      <MonthPicker/>
    </View>
  );
};

const styles = StyleSheet.create({});
