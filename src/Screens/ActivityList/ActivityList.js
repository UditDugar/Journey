import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, FlatList, Keyboard} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {API_TYPE, APP_APIS} from '../../ApiLogic/API_URL';
import {ApiCall, PostApiCallWithBody} from '../../ApiLogic/Auth.Api';
import {AppColors} from '../../assets/AppColors';
import {AccentButton, Container, MainContainer} from '../../Components';
import {AppHeader} from '../../Components/AppHeader';
import {FontSize, Spacing, VertSpace} from '../../shared/Global.styles';
import {HorizontalLine} from '../Journey/JourneyScreen';
import {Gravities, showToast} from '../../shared/Functions/ToastFunctions';
import {ActivityIndicator} from 'react-native-paper';
export const ActivityList = ({route, navigation}) => {
  const {token} = route.params;
  console.log(token);
  const [search, setSearch] = React.useState([]);
  const [AddText, setAddText] = React.useState('');
  const [state, setState] = React.useState(false);
  React.useEffect(() => {
    ApiCall(APP_APIS.ACTIVITIES, API_TYPE.GET, token)
      .then(async data => {
        if (data.status === 1) {
          setSearch(data.respData);
          await AsyncStorage.setItem('Activity', JSON.stringify(data));
          setResult(data.respData);
        } else {
          null;
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [state]);

  const [Result, setResult] = React.useState([]);

  const searchFilterFunction = text => {
    if (text) {
      const newData = search.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setSearch(newData);
    } else {
      setSearch(Result);
    }
  };
  const data = {
    name: AddText,
  };
  const AddActivity = () => {
    PostApiCallWithBody(APP_APIS.ADD_ACTIVITY_NAME, API_TYPE.POST, token, data)
      .then(data => {
        if (data.status === 1) {
          setState(!state);
          showToast(data.message, Gravities.BOTTOM);
          console.log(data);
        } else {
          setState(!state);
          showToast('Error in name adding', Gravities.BOTTOM);
          console.log(data);
        }
      })
      .catch(error => {
        setState(!state);
        console.error('Error:', error);
        showToast('Error in name adding', Gravities.BOTTOM);
      });
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
          onChangeText={text => {
            searchFilterFunction(text), setAddText(text);
          }}
          autoCorrect={false}
          
        />
      </View>
      <VertSpace size={10} />
      {AddText.length != 0 ? (
        <Container
          padding={Spacing.xxlarge}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <AccentButton
            title="Add"
            style={{
              backgroundColor: 'transparent',
              borderWidth: 3,
              borderColor: 'gray',
            }}
            disabled={false}
            onPress={() => {
              AddActivity();
            }}
          />

          <Text
            style={{
              color: 'gray',
              paddingLeft: 20,
              fontWeight: '900',
              fontSize: 15,
            }}>
            {AddText}
          </Text>
        </Container>
      ) : null}
      {Result.length === 0? (
        <MainContainer>
        <ActivityIndicator color="#178" size={'large'} />
        </MainContainer>
        
      ) : (
        <Container padding={Spacing.xxlarge}>
          <VertSpace size={35} />
          <FlatList
            data={search}
            keyExtractor={(item, key) => item.name}
            renderItem={({item}) => (
              <View style={{flex: 1}}>
                <Text
                  style={styles.item}
                  onPress={() => {
                    route.params.onReturn({name: item.name, id: item.id}),
                      navigation.goBack();
                  }}>
                  {item.name}
                </Text>
                <VertSpace size={10} />

                <HorizontalLine
                  marginLeft={10}
                  height={0.7}
                  backgroundColor="gray"
                  width="50%"
                  alignItems="center"
                />

                <VertSpace size={10} />
              </View>
            )}
          />
        </Container>
      )}
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
    paddingLeft: 0,
  },
});
