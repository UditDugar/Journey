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

export const stringValueDate = (date, month, year) => {
  var dateString = `${date}`,
    monthString = `${month}`;
  if (date < 10) dateString = '0' + dateString;
  if (month < 10) monthString = '0' + monthString;

  return `${year}-${monthString}-${dateString}`;
};

// MONTH PICKER
export const MonthPicker = ({route}) => {
  const calenderRef = React.useRef(null);
  const [Data, setData] = React.useState(null);
  const [YearSelected, setYearSelected] = React.useState('2020');
  const [MonthIndex, setMonthIndex] = React.useState(0);
  const [SelectedDate, setSelectedDate] = React.useState('');
  const navigation = useNavigation();
  // const { routename, subRoutename } = route.params;
  const [MarkedDate, setMarkedDate] = React.useState({});
  // MarkedDate[`${SelectedDate}`] = { selected: true };

  React.useEffect(() => {
    let tempMarkedDate = {};
    tempMarkedDate[`${SelectedDate}`] = {selected: true};
    setMarkedDate(tempMarkedDate);
  }, [SelectedDate]);

  // USEFECT
  React.useLayoutEffect(() => {
    const CurrentDate = moment().date();
    const CurrentYear = moment().year();
    // const CurrentYear = 2000;
    const CurrentMonthIndex = moment().month();
    setMonthIndex(CurrentMonthIndex);
    setSelectedDate(
      stringValueDate(CurrentDate, CurrentMonthIndex+1, CurrentYear),
    );
    // alert(typeof CurrentYear)
  }, []);


  // const UpdateSelectedDate = (date, month, year) => {
  //   setSelectedDate(
  //     `${year}-${month < 10 ? '0' + month : month}-${
  //       date < 10 ? '0' + date : date
  //     }`
  //   );
  // };
  const ABHAYA = '2000-01-02';

  //  alert(ABHAYA.length);
 
  return (
    <SafeAreaView style={{backgroundColor: '#161616', flex: 1}}>
      <AppHeader colorIcon={AppColors.white} enableBack>
        <NextButton title="Done" InActiveColor="white" />
      </AppHeader>
      <HoriSpace size={20} />
      <Container>
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

        <MonthList
          MonthIndex={MonthIndex}
          onMonthPress={monthIndex => {
            var monthString =
              monthIndex < 10 ? '0' + (monthIndex + 1) : monthIndex;

            calenderRef?.current.scrollToMonth(`${2021}-${monthString}`);
          }}
        />
      </Container>
      <CalendarList
        ref={calenderRef}
        horizontal
        onVisibleMonthsChange={months => {}}
        pagingEnabled
        pastScrollRange={MonthIndex}
        futureScrollRange={12}
        scrollEnabled={false}
        showScrollIndicator={true}
        current={SelectedDate}
        minDate={'1950-01-01'}
        maxDate={'2100-01-01'}
        onDayPress={day => {
          setSelectedDate(day.dateString);
          setData(day);
        }}
        onDayLongPress={day => {}}
        markedDates={MarkedDate}
        monthFormat={'yyyy MM'}
        onMonth-Change={month => {}}
        disableAllTouchEventsForDisabledDays={true}
        theme={AppCalenderTheme}
      />
    </SafeAreaView>
  );
};

const MonthList = ({MonthIndex, onMonthPress = () => {}}) => {
  const [MonthSelected, setMonthSelected] = React.useState(-1);
  React.useEffect(() => {
    setMonthSelected(MonthIndex);
  }, [MonthIndex]);
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={{marginHorizontal: -Spacing.large}}>
      <HoriSpace size={Spacing.large} />
      {MonthNames.map((month, index) => {
        return (
          <View key={index.toString()} style={{flexDirection: 'row'}}>
            <Ripple
              onPress={() => {
                onMonthPress(index);
                setMonthSelected(index);
              }}
              disabled={index > MonthIndex}
              rippleContainerBorderRadius={100}
              style={{
                ...styles.monthContainer,
                backgroundColor:
                  index > MonthIndex
                    ? AppColors.VeryLightGrey
                    : index == MonthSelected
                    ? AppColors.DarkGrey
                    : AppColors.LightGrey,
              }}>
              <Text
                style={{
                  ...styles.monthFontStyles,
                  color:
                    index > MonthIndex
                      ? AppColors.LightGrey
                      : index == MonthSelected
                      ? AppColors.white
                      : AppColors.DarkGrey,
                }}>
                {month}
              </Text>
            </Ripple>
            <HoriSpace size={Spacing.medium} />
          </View>
        );
      })}
    </ScrollView>
  );
};
const AppCalenderTheme = {
  textDayFontFamily: AppFonts.CalibriBold,
  backgroundColor: '#161616',
  calendarBackground: '#161616',
  textSectionTitleColor: '#b6c1cd',
  textSectionTitleDisabledColor: '#d9e1e8',
  selectedDayBackgroundColor: AppColors.white,
  selectedDayTextColor: AppColors.DarkGrey,
  todayTextColor: AppColors.blue,
  dayTextColor: AppColors.white,
  textDisabledColor: AppColors.VeryLightGrey,
  dotColor: AppColors.VeryDarkGrey,
  selectedDotColor: '#ffffff',
  arrowColor: AppColors.VeryDarkGrey,
  disabledArrowColor: AppColors.VeryLightGrey,
  monthTextColor: AppColors.DarkGrey,
  indicatorColor: AppColors.LightGrey,
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

{
  /* <View style={{ flexDirection: 'row', alignItems: 'center' }}> */
}
{
  /* <Ripple
  onPress={() => {
    navigation.navigate('RecaptureActivity', { DatePicked: false });
  }}
> */
}

{
  /* </Ripple> */
}
{
  /* <HoriSpace size={20} /> */
}
{
  /* <NextButton
  title={'Done'}
  disabled={false}
  onPress={() => {
    if (
      subRoutename === undefined ||
      subRoutename === null ||
      subRoutename === ''
    ) {
      navigation.navigate(routename, {
        DatePicked: true,
        data: Data,
      });
    } else {
      navigation.navigate(routename, {
        screen: subRoutename,
        params: {
          DatePicked: true,
          data: Data,
        },
      });
    }
  }}
/> */
}
// </View>
