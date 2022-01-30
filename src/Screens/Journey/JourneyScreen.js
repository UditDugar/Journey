import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {AppColors} from '../../assets/AppColors';
import {AppHeader} from '../../Components/AppHeader';
import {FontSize, VertSpace} from '../../shared/Global.styles';
import * as Progress from 'react-native-progress';
import {
  CalenderIcon,
  EditIcon,
  GalleryIcon,
  NotesIcon,
} from '../../shared/Icon.Comp';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import {ScrollView} from 'react-native-gesture-handler';
import {Container} from '../../Components';

export const HorizontalLine = ({
  height = 1,
  width = '80%',
  backgroundColor = 'white',
  alignItems = 'flex-start',
  rotate = '0deg',
  marginRight,
  marginTop,
  marginLeft,
  marginBottom,
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
        marginLeft: marginLeft,
        marginBottom: marginBottom,
      }}></View>
  );
};

export const MonthString = ({MonthIndex}) => {
  return (
    <Text>
      {MonthIndex == 1 ? (
        <Text>Jan</Text>
      ) : MonthIndex == 2 ? (
        <Text>Feb</Text>
      ) : MonthIndex == 3 ? (
        <Text>Mar</Text>
      ) : MonthIndex == 4 ? (
        <Text>Apr</Text>
      ) : MonthIndex == 5 ? (
        <Text>May</Text>
      ) : MonthIndex == 6 ? (
        <Text>Jun</Text>
      ) : MonthIndex == 7 ? (
        <Text>Jul</Text>
      ) : MonthIndex == 8 ? (
        <Text>Aug</Text>
      ) : MonthIndex == 9 ? (
        <Text>Sep</Text>
      ) : MonthIndex == 10 ? (
        <Text>Oct</Text>
      ) : MonthIndex == 11 ? (
        <Text>Nov</Text>
      ) : MonthIndex == 12 ? (
        <Text>Dec</Text>
      ) : null}
    </Text>
  );
};

const CalenderView = ({onPress, date = 3, month = 'Jan', year = '2022'}) => {
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
            {date}
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
            {month}, {year}
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
const Box = ({
  progress = 0.5,
  color = 'green',
  title = 'Sleep',
  progressDate = '50%',
}) => {
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
        <Text style={styles.progressText}>{progressDate}</Text>
        <Text style={{color: 'black'}}>{title}</Text>
      </View>
    </View>
  );
};

export const JourneyScreen = ({navigation}) => {
  const [notes, setNotes] = React.useState('');

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
    <View style={{flex: 1, backgroundColor: '#161616'}}>
      <AppHeader colorIcon={AppColors.white} enableBack>
        <Text
          style={{color: 'white'}}
          onPress={() =>
            navigation.navigate('MonthPicker', {
              onReturn: item => setState(item),
            })
          }>
          <CalenderIcon size={25} />
        </Text>
      </AppHeader>
      <ScrollView>
        <VertSpace size={25} />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            paddingLeft: 20,
          }}>
          <CalenderView
            date={newDate[2]}
            month={<MonthString MonthIndex={newDate[1]} />}
            year={newDate[0]}
          />
        </View>

        <VertSpace size={60} />
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Box progress={0.5} color="#18E670" />
          <Box progress={1} color="#4AA9E9" title="Read" progressDate="100%" />
        </View>
        <VertSpace size={50} />

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Box
            progress={0.1}
            color="#E61841"
            title="Gossip"
            progressDate="1%"
          />
          <Box progress={0.7} color="#E9D54A" title="Eat" progressDate="70%" />
        </View>
        <VertSpace size={50} />
        <Container>
          <View
            style={[
              styles.imageScroll,
              {
                backgroundColor: AppColors.LightGrey,
                height: 150,
             
                alignItems: 'center',
              },
            ]}>
            <ScrollView horizontal>
              <Image
                source={{uri: 'https://reactjs.org/logo-og.png'}}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                }}
                resizeMode="cover"
              />
                            <Image
                source={{uri: 'https://reactjs.org/logo-og.png'}}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                }}
                resizeMode="cover"
              />
                            <Image
                source={{uri: 'https://reactjs.org/logo-og.png'}}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                }}
                resizeMode="cover"
              />
                            <Image
                source={{uri: 'https://reactjs.org/logo-og.png'}}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                }}
                resizeMode="cover"
              />
            </ScrollView>
          </View>
          <VertSpace size={50} />

          <View style={[styles.Notes, {height: 100}]}>
            <Text style={{color: AppColors.white, fontSize: FontSize.large}}>
              {notes}{' '}
            </Text>
          </View>
        </Container>

        <VertSpace size={100} />
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#161616',
          height: 60,
          width: '100%',
          justifyContent: 'flex-end',
          alignItems: 'center',
          flexDirection: 'row',
          paddingRight: 20,
        }}>
        <TouchableOpacity
          style={{paddingRight: 20, color: 'white'}}
          onPress={() =>
            navigation.navigate('NotesScreen', {
              onReturn: item => {
                setNotes(item);
              },
            })
          }>
          <NotesIcon size={30} />
          <Text style={{color: 'white', fontSize: FontSize.shorter}}>
            Notes
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('GalleryScreen')}>
          <GalleryIcon color="white" size={30} />
          <Text style={{color: 'white', fontSize: FontSize.shorter}}>
            Photos
          </Text>
        </TouchableOpacity>
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
    fontSize: FontSize.shorter,
  },
});
