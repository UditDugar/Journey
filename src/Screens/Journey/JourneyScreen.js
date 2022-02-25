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
import ReadMore from 'react-native-read-more-text';

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
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {Container} from '../../Components';
import {ImageGridView} from '../PhotoList/PhotosList';

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
  progressData = '50',
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
        <Text style={styles.progressText}>{progressData}%</Text>
        <Text style={{color: 'black'}}>{title}</Text>
      </View>
    </View>
  );
};

export const JourneyScreen = ({route, navigation}) => {
  const {token, id} = route.params;

  const [notes, setNotes] = React.useState('');
  const [images, setImages] = React.useState([]);
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
  const [line, setLine] = React.useState(true);

  const [Entry, setEntry] = React.useState([]);
  const [Details, setDetails] = React.useState([]);

  // React.useEffect(() => {
  //   getData();
  // }, [state]);

  // const getData = async () => {
  //   const data = {
  //     user_id: id,
  //     activity_date: state,
  //   };

  //   const url = 'https://bingehq.com/journey-app/api/get-activities-by-date';
  //   await fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then(response => response.json())
  //     .then(async data => {
  //       if (data.status === 1) {
  //         setEntry(data.respData);
  //         await AsyncStorage.setItem('Response', JSON.stringify(data));
  //       } else {
  //         null;
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });
  // };

  const [box0, setBox0] = React.useState(0);
  const [box1, setBox1] = React.useState(0);
  const [box2, setBox2] = React.useState(0);
  const [box3, setBox3] = React.useState(0);
  console.log(box0, box1, box2, box3);
  var a = 0;
  var b = 0;
  var c = 0;
  var d = 0;
  // React.useEffect(() => {
  //   {
  //     Entry == null
  //       ? null
  //       : Entry.map((item, key) => {
  //           {
  //             item.is_important === 'yes' && item.is_liked === 'yes'
  //               ? setBox0(
  //                   (a =
  //                     +a +
  //                     +(
  //                       (+Number(item.activity_time.split(':')[0]) * 60 +
  //                         +Number(item.activity_time.split(':')[1])) /
  //                       1440
  //                     ).toFixed(2)),
  //                 )
  //               : setBox0(0);
  //             item.is_important === 'no' && item.is_liked === 'no'
  //               ? setBox1(
  //                   (b =
  //                     +b +
  //                     +(
  //                       (+Number(item.activity_time.split(':')[0]) * 60 +
  //                         +Number(item.activity_time.split(':')[1])) /
  //                       1440
  //                     ).toFixed(2)),
  //                 )
  //               : setBox1(0);
  //             item.is_important === 'yes' && item.is_liked === 'no'
  //               ? setBox2(
  //                   (c =
  //                     +c +
  //                     +(
  //                       (+Number(item.activity_time.split(':')[0]) * 60 +
  //                         +Number(item.activity_time.split(':')[1])) /
  //                       1440
  //                     ).toFixed(2)),
  //                 )
  //               : setBox2(0);
  //             item.is_important === 'no' && item.is_liked === 'yes'
  //               ? setBox3(
  //                   (d =
  //                     +d +
  //                     +(
  //                       (+Number(item.activity_time.split(':')[0]) * 60 +
  //                         +Number(item.activity_time.split(':')[1])) /
  //                       1440
  //                     ).toFixed(2)),
  //                 )
  //               : setBox3(0);
  //           }
  //         });
  //   }
  // });
  const MAX_LINES = 4;
  const [showText, setShowText] = React.useState(false);
  const [numberOfLines, setNumberOfLines] = React.useState(undefined);
  const [showMoreButton, setShowMoreButton] = React.useState(false);

  const onTextLayout = React.useCallback(
    e => {
      if (e.nativeEvent.lines.length > MAX_LINES && !showText) {
        setShowMoreButton(true);
        setNumberOfLines(MAX_LINES);
      }
    },
    [showText],
  );

  React.useEffect(() => {
    if (showMoreButton) {
      setNumberOfLines(showText ? undefined : MAX_LINES);
    }
  }, [showText, showMoreButton]);

  return (
    <View style={{flex: 1, backgroundColor: '#161616'}}>
      <AppHeader colorIcon={AppColors.white} enableBack>
        <Text
          style={{color: 'white'}}
          onPress={() => {
            navigation.navigate('MonthPicker', {
              onReturn: item => setState(item),
            });
          }}>
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
        <VertSpace size={30} />

        <Container>
          <View
            style={[
              styles.imageScroll,
              {
                maxHeight: 110,
                alignItems: 'center',
                minHeight: 0,
              },
            ]}>
            <ScrollView horizontal>
              {images.map((item, key) => {
                return (
                  <ImageGridView
                    imageUrl={item}
                    selectIconView={false}
                    key={key}
                    onPress={() => {
                      navigation.navigate('ImageViewScreen', {
                        imagesList: images.map(s => ({
                          url: s,
                        })),
                        clickedImageIndex: key,
                      });
                    }}
                  />
                );
              })}
            </ScrollView>
          </View>

          <View style={{}}>
            <Text
              style={{color: '#fff', fontSize: 18}}
              onTextLayout={onTextLayout}
              numberOfLines={numberOfLines}>
              {notes}
            </Text>
            {showMoreButton && (
              <TouchableOpacity
                onPress={() => setShowText(showText => !showText)}
                accessibilityRole="button">
                <Text style={{color: '#3b6fff'}}>
                  {showText ? 'Read Less' : 'Read More'}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </Container>

        <VertSpace size={20} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('UserActivity');
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Box
              progress={box0}
              color="#18E670"
              title="Yes Yes"
              progressData={box0 * 100}
            />
            <Box
              progress={box2}
              color="#4AA9E9"
              title="No Yes"
              progressData={box2 * 100}
            />
          </View>
          <VertSpace size={10} />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            height: 160,
          }}>
          <Box
            progress={box1}
            color="#E61841"
            title="No No"
            progressData={box1 * 100}
          />
          <Box
            progress={box3}
            color="#E9D54A"
            title="Yes No"
            progressData={box3 * 100}
          />
        </View>

        <VertSpace size={50} />
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

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('GalleryScreen', {
              onReturn: item => {
                setImages(item);
              },
            })
          }>
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
