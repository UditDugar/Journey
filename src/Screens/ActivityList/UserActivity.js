import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppHeader} from '../../Components/AppHeader';
import {AppColors} from '../../assets/AppColors';
import {Container} from '../../Components';
import {FontSize, VertSpace} from '../../shared/Global.styles';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

const Activities = [
  {
    name: 'Sleeping',
    key: 0,
  },
  {
    name: 'Eating',
    key: 1,
  },
  {
    name: 'Playing games',
    key: 2,
  },
  {
    name: 'Browsing social apps',
    key: 3,
  },
  {
    name: 'Doing Exercise',
    key: 4,
  },
  {
    name: 'Office work',
    key: 5,
  },
  {
    name: 'Studing',
    key: 6,
  },
  {
    name: 'Reading books',
    key: 7,
  },
  {
    name: 'Watching Movies/TV series',
    key: 8,
  },
  {
    name: 'Taking shower',
    key: 9,
  },
  {
    name: 'Driving',
    key: 10,
  },
  {
    name: 'Learning new languages',
    key: 11,
  },
  {
    name: 'Listening music',
    key: 12,
  },
  {
    name: 'Talking to friends/family',
    key: 13,
  },
  {
    name: 'Drawing',
    key: 14,
  },
  {
    name: 'Painting',
    key: 15,
  },
  {
    name: 'Cooking/Baking',
    key: 16,
  },
  {
    name: 'Cleaning house',
    key: 17,
  },
  {
    name: 'Singing',
    key: 18,
  },
  {
    name: 'Dancing',
    key: 19,
  },
  {
    name: 'Gossiping',
    key: 20,
  },
  {
    name: 'Drinking',
    key: 21,
  },
  {
    name: 'Partying',
    key: 22,
  },
];

export const UserActivity = () => {
  const [search, setSearch] = React.useState(Activities);
  return (
    <View style={{flex: 1, backgroundColor: '#161616'}}>
      <AppHeader colorIcon={AppColors.white} enableBack />
      <Container>
        <VertSpace size={20} />
        <Text
          style={{
            color: '#fff',
            fontSize: FontSize.x3large,
            fontWeight: '900',
          }}>
          25th Jan, 2022
        </Text>
        <VertSpace size={30} />
        <ScrollView style={{height: 900}}>
          {Activities.map((item, key) => {
            return (
              <View
                key={key}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width:"100%",
                  paddingTop:20
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{
                      backgroundColor: 'red',
                      width: 8,
                      height: 8,
                      borderRadius: 20,
                    }}
                  />
                  <Text style={styles.item}>{item.name}</Text>
                </View>

                <View>
                  <Text style={styles.item}>1h 10m</Text>
                </View>

                
              </View>
            );
          })}
        </ScrollView>
      </Container>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          height: 30,
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          backgroundColor: AppColors.DarkGrey,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <Text style={styles.item}> Total</Text>
        <Text style={styles.item}>21h 10m</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    color: 'white',
    fontSize: FontSize.large,
    paddingLeft: 10,
  },
});
