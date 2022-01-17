import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, TextInput, FlatList} from 'react-native';
import {AppColors} from '../../assets/AppColors';
import {AccentButton, Container} from '../../Components';
import {AppHeader} from '../../Components/AppHeader';
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
const ArrayHolder = [];
export const ActivityList = ({route, navigation}) => {
  const [search, setSearch] = React.useState(Activities);
  // const navigation = useNavigation();
  const searchFilterFunction = text => {
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = search.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setSearch(newData);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with search
      setSearch(Activities);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <VertSpace size={10} />

      <View style={{flexDirection: 'row', paddingLeft: 20}}>
        <AppHeader padding={-20} colorIcon={AppColors.white} enableBack />

        <TextInput
          placeholder="Search here ..."
          placeholderTextColor={AppColors.DarkGrey}
          style={styles.search}
          onChangeText={text => searchFilterFunction(text)}
          autoCorrect={false}
        />
      </View>

      <Container padding={Spacing.xxlarge}>
        <VertSpace size={20} />

        <VertSpace size={50} />
        <FlatList
          data={search}
          keyExtractor={item => item.key}
          renderItem={({item}) => (
            <View style={{flex: 1}}>
              <Text
                style={styles.item}
                onPress={() => {
                  route.params.onReturn(item.name), navigation.goBack();
                }}>
                {item.name}
              </Text>
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
    borderBottomWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: FontSize.large,
    width: '80%',
    marginRight: 20,
    paddingLeft: 20,
  },
  item: {
    color: 'white',
    fontSize: FontSize.large,
  },
});
