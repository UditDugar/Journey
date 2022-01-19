import {useNavigation} from '@react-navigation/native';
import React, {Component, Fragment} from 'react';
import {ScrollView, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import {AppColors} from '../../../assets/AppColors';
import {AppFonts} from '../../../assets/fonts/AppFonts';
import {AppHeader} from '../../../Components/AppHeader';
import {Container} from '../../../Components/index';
import {
  FontSize,
  GStyles,
  HoriSpace,
  Spacing,
  VertSpace,
} from '../../../shared/Global.styles';

const dataArray = [
  {name: 1950},
  {name: 1960},
  {name: 1970},
  {name: 1980},
  {name: 1990},
  {name: 2000},
  {name: 2010},
  {name: 2020},
  {name: 2030},
];
export const YearPicker = ({route}) => {
  const navigation = useNavigation();
  const [YearSelected, setYearSelected] = React.useState('2020');
  const [state, setState] = React.useState('');

  React.useEffect(() => {
    return () => {};
  }, []);

  const tempArray = new Array(10).fill({});

  return (
    <SafeAreaView style={{backgroundColor: '#161616', flex: 1}}>
      <AppHeader enableBack></AppHeader>

      <ScrollView
        snapToInterval={200}
        pagingEnabled
        snapToAlignment={'center'}
        decelerationRate="fast">
        <View style={{height: 200}} />
        {dataArray.map((yearData, index) => {
          return (
            <View
              key={index.toString()}
              style={{height: 200, margin: Spacing.large}}>
              <Text
                style={[
                  styles.monthFontStyles,
                  {color: '#707070' },
                ]}>
                {yearData.name}
                <Text
                  style={{fontSize: FontSize.x4large, color: AppColors.white}}>
                  s
                </Text>
              </Text>
              <VertSpace size={40} />
              {/* YEAR LIST */}
              <ScrollView
                style={{margin: -Spacing.large}}
                showsHorizontalScrollIndicator={false}
                horizontal={true}>
                <HoriSpace />
                {tempArray.map((_, index) => {
                  var yearString = yearData.name + index;
                  return (
                    <Fragment key={index.toString()}>
                      <TouchableRipple
                        onPress={() => {
                          route.params.onReturn(yearString),
                            navigation.goBack(),
                            setYearSelected(yearString),
                            setState(yearString);
                        }}
                        style={{
                          height: 50,
                          paddingHorizontal: Spacing.large,
                          borderRadius: 30,
                          ...GStyles.containView,
                          backgroundColor:
                            yearString == YearSelected
                              ? AppColors.VeryLightGrey
                              : AppColors.DarkGrey,
                        }}>
                        <Text
                          style={[
                            styles.dateStyles,
                            {
                              color:
                                yearString == YearSelected
                                  ? AppColors.DarkGrey
                                  : AppColors.white,
                            },
                          ]}>
                          {yearString}
                        </Text>
                      </TouchableRipple>
                      <HoriSpace />
                    </Fragment>
                  );
                })}
              </ScrollView>
            </View>
          );
        })}
        <View style={{height: 200}} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  monthFontStyles: {
    fontSize: FontSize.x6Large,
    fontFamily: AppFonts.CalibriBold,
    color: AppColors.DarkGrey,
  },
  dateStyles: {
    fontSize: FontSize.xxlarge,
    fontFamily: AppFonts.CalibriBold,
    color: AppColors.DarkGrey,
  },
  // monthContainer: {
  //   backgroundColor: AppColors.LightGrey,
  //   borderRadius: 50,
  //   height: 40,
  //   ...GStyles.containView,
  //   paddingHorizontal: Spacing.large,
  // },
  // yearStyles: {
  //   fontSize: FontSize.x6Large,
  //   color: AppColors.DarkGrey,
  //   fontFamily: AppFonts.CalibriBold,
  // },
});
