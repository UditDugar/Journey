import React from 'react';
import {StyleSheet, Text, View, TextInput, FlatList} from 'react-native';
import {AppColors} from '../../assets/AppColors';
import {Container} from '../../Components';
import {
  FontSize,
  HoriSpace,
  Spacing,
  VertSpace,
} from '../../shared/Global.styles';
import {HorizontalLine} from '../Journey/JourneyScreen';
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

export const ActivityList = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Container padding={Spacing.xxlarge}>
        <VertSpace size={20} />
        <TextInput
          placeholder="Search"
          placeholderTextColor={AppColors.DarkGrey}
          style={styles.search}
        />
        <VertSpace size={50} />
        <FlatList
          data={Activities}
          
          keyExtractor={item => item.key}
          renderItem={({item}) => (
            <View>
              <Text style={styles.item}>{item.name}</Text>
              <VertSpace size={20} />
            </View>
          )}
        />
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    height: 50,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    fontSize: FontSize.large,
  },
  item: {
    color: 'white',
    fontSize: FontSize.large,
  },
});
