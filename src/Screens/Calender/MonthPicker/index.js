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
const MM='MM'
  //  alert(ABHAYA.length);
  const [selectedStartDate, setSelectedStartDate] = React.useState(null);
  const startDate = selectedStartDate ? selectedStartDate : '';
  return (
    <SafeAreaView style={{backgroundColor: '#161616', flex: 1}}>
      <AppHeader colorIcon={AppColors.white} enableBack>
        {/* <NextButton
          title="Done"
          disabled={false}
          onPress={() => {
            route.params.onReturn(startDate), navigation.goBack();
          }}
        /> */}
      </AppHeader>
      <VertSpace size={70} />
      {/* <Container>
        <DropdownHeader
          fontStyles={styles.yearStyles}
          title={YearSelected}
          onHeaderPress={() =>
            navigation.navigate('YearPicker', {
              onReturn: item => {
                setYearSelected(item);
              },
            })
          }
        />

        <VertSpace size={Spacing.xlarge} />
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{marginHorizontal: -Spacing.large}}>
          <HoriSpace size={Spacing.large} />

          {MonthNames.map((month, index) => {
            return (
              <View key={index} style={{flexDirection: 'row'}}>
                <Ripple
                  onPress={() => {
                    setMonthSelected(index);
                  }}
                  // disabled={index > MonthIndex}
                  rippleContainerBorderRadius={100}
                  style={{
                    ...styles.monthContainer,
                    backgroundColor:
                      // index > MonthIndex
                      //   ? AppColors.VeryLightGrey
                      index === MonthSelected
                        ? AppColors.white
                        : AppColors.DarkGrey,
                  }}>
                  <Text
                    style={{
                      ...styles.monthFontStyles,
                      color:
                        // index > MonthIndex
                        //   ? AppColors.LightGrey
                        index === MonthSelected
                          ? AppColors.DarkGrey
                          : AppColors.white,
                      fontWeight: '700',
                    }}>
                    {month}
                  </Text>
                </Ripple>
                <HoriSpace size={Spacing.medium} />
              </View>
            );
          })}
        </ScrollView>
      </Container> */}

      <CalendarList
        horizontal
        pagingEnabled
        futureScrollRange={12}
        
        current={maxDate}
        onDayPress={day => {
          setSelectedStartDate(day.dateString),
          route.params.onReturn(day.dateString), navigation.goBack()
        }}
        markingType="multi-period"
        markedDates={{
          '2022-01-01': {
            periods: [{startingDay: false, endingDay: true, color: '#5f9ea0'}],
          },
          '2022-01-02': {
            periods: [
              {startingDay: true, endingDay: false, color: '#ffa500'},
              {color: 'transparent'},
            ]
          }
   
        }}
        
        theme={{
          textDayFontFamily: AppFonts.CalibriBold,
          calendarBackground: '#161616',
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayTextColor: AppColors.DarkGrey,
          todayTextColor: AppColors.VeryDarkGrey,
          dayTextColor: AppColors.white,
          monthTextColor: AppColors.green,
          indicatorColor: AppColors.LightGrey,
          textMonthFontWeight:'900',
          textMonthFontSize:FontSize.xxlarge,
          
        }}
      />
      <Text style={{color: 'white', textAlign: 'center', fontWeight: '900'}}>
        {selectedStartDate}
      </Text>
    </SafeAreaView>
  );
};

const AppCalenderTheme = {
  textDayFontFamily: AppFonts.CalibriBold,
  calendarBackground: '#161616',
  textSectionTitleDisabledColor: '#d9e1e8',
  selectedDayTextColor: AppColors.white,
  todayTextColor: AppColors.white,
  dayTextColor: AppColors.white,
  monthTextColor: AppColors.white,
  indicatorColor: AppColors.LightGrey,
  todayBackgroundColor: AppColors.green,
};

const styles = StyleSheet.create({
  monthFontStyles: {
    fontSize: FontSize.inputText,
    fontFamily: AppFonts.CalibriBold,
    color: AppColors.DarkGrey,
  },
  monthContainer: {
    backgroundColor: AppColors.LightGrey,
    borderRadius: 50,
    height: 40,
    ...GStyles.containView,
    paddingHorizontal: Spacing.large,
  },
  yearStyles: {
    fontSize: FontSize.x6Large,
    color: AppColors.white,
    fontFamily: AppFonts.CalibriBold,
  },
});
