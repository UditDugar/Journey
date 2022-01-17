import React from 'react';
import {StyleSheet, Text, Touchable, View} from 'react-native';
import {AppColors} from '../../assets/AppColors';
import {AppHeader} from '../../Components/AppHeader';
import {Container} from '../../Components/index';
import {FontSize, Spacing, VertSpace} from '../../shared/Global.styles';
import * as Progress from 'react-native-progress';
import {CalenderIcon, CalenderViewIcon} from '../../shared/Icon.Comp';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Calendar, CalendarList,WeekCalendar} from 'react-native-calendars';

const dates = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 26, 27, 28, 29, 30, 31,
];

export const HorizontalLine = ({
  height = 1,
  width = '80%',
  backgroundColor = 'white',
  alignItems = 'flex-start',
  rotate = '0deg',
  marginRight,
  marginTop,
}) => {
  return (
    <View
      style={{
        height: height,
        width: width,
        backgroundColor: backgroundColor,
        alignItems: alignItems,
        transform: [{rotate: rotate}],
        marginRight: marginRight,
        marginTop: marginTop,
      }}></View>
  );
};

const CalenderView = ({onPress}) => {
  return (
    <TouchableOpacity style={{flexDirection: 'row'}}>
      <View style={styles.square}>
        <VertSpace size={30} />
        <HorizontalLine />
        <VertSpace size={3} />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{fontSize: FontSize.x6Large, color: 'white'}}
            onPress={onPress}>
            3
          </Text>
          <VertSpace size={5} />

          <HorizontalLine width="50%" />
          <VertSpace size={10} />
          <Text
            style={{
              fontSize: FontSize.short,
              fontWeight: '700',
              color: 'white',
            }}>
            Jan, 20
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'column'}}>
        <View style={styles.square1}>
          <HorizontalLine
            rotate="-12deg"
            height="100%"
            width="4%"
            marginRight={23}
            marginTop={0}
          />
        </View>
        <View style={styles.box2}></View>
      </View>
    </TouchableOpacity>
  );
};
const Box = ({progress = 0.5, color = 'green', title = 'Sleep'}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Progress.Bar
        progress={progress}
        color={color}
        borderColor="black"
        height={80}
        width={150}
        backgroundColor="white"
        borderRadius={20}
      />
      <View
        style={{
          marginTop: -70,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.progressText}>50%</Text>
        <Text style={{color: 'black'}}>{title}</Text>
      </View>
    </View>
  );
};

export const JourneyScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: '#161616'}}>
      <AppHeader colorIcon={AppColors.white} enableBack />

      <VertSpace size={25} />
      <View
        style={{justifyContent: 'center', alignItems: 'center', width: '100%'}}>
        <CalenderView onPress={() => navigation.navigate('MonthPicker')} />
      </View>

      <VertSpace size={60} />
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <Box progress={0.12} color="#18E670" />
        <Box progress={0.22} color="#4AA9E9" title="Read" />
      </View>
      <VertSpace size={50} />

      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <Box progress={0.32} color="#E61841" title="Gossip" />
        <Box progress={0.42} color="#E9D54A" title="Eat" />
      </View>
      
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          borderTopWidth: 0.5,
          borderColor: 'white',
          height:85,
          justifyContent:"center",
          alignItems:"center",
          paddingTop:20
        }}>
        <FlatList
          data={dates}
          horizontal
          renderItem={({item}) => (
            <View style={styles.circle}>
              <Text style={styles.dates}>{item}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    borderWidth: 2,
    borderColor: 'white',
    width: 130,
    height: 170,
    transform: [{rotate: '1deg'}],
  },
  square1: {
    borderWidth: 0,
    width: 40,
    height: 150,
    alignItems: 'flex-end',
  },
  box2: {
    borderWidth: 2,
    borderColor: 'white',
    width: 33.5,
    height: 16,
    marginTop: -2,
    borderWidth: 0,
    borderTopWidth: 2,
    marginLeft: -1,
    borderTopEndRadius: 0.5,
  },
  box: {
    backgroundColor: 'white',
    width: 140,
    height: 80,
    borderRadius: 18,
  },
  progressText: {
    color: 'black',
    // marginTop: -70,
    fontWeight: '600',
    fontSize: FontSize.inputText,
  },
  dates: {
    color: 'white',
    fontSize: FontSize.medium,
  },
  circle: {
    width: 50,
    height: 50,
    borderWidth: 0.7,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    borderRadius: 50,


  },
});
