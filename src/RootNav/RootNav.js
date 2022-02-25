// In App.js in a new project
import * as React from 'react';
import {View, Text, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../Screens/Login/LoginScreen';
import {OtpVerification} from '../Screens/Login/OtpVerification';
import {ProfileScreen} from '../Screens/Profile/ProfileScreen';
import {AddList} from '../Screens/AddList/AddList';
import {EnterActivity} from '../Screens/EnterActivity/EnterActivity';
import {JourneyScreen} from '../Screens/Journey/JourneyScreen';
import {ActivityList} from '../Screens/ActivityList/ActivityList';
import {PhotosList} from '../Screens/PhotoList/PhotosList';
import {TimePicker} from '../Screens/Calender/TimePicker';
import {YearPicker} from '../Screens/Calender/YearPicker';
import {MonthPicker} from '../Screens/Calender/MonthPicker';
import {AppColors} from '../assets/AppColors';
import Gallery from '../Screens/Gallery/Gallery';
import Notes from '../Screens/Notes/Notes';
import {AlbumList} from '../Screens/PhotoList/AlbumList';
import {AlbumThumbNail} from '../Screens/PhotoList/Albums.View';
import {ImageViewScreen} from '../Screens/Gallery/ViewImage';
import {ContactsList} from '../Screens/Contacts/ContactsList';
import {UserActivity} from '../Screens/ActivityList/UserActivity';
import SplashScreen from '../Screens/SplashScreen/SplashScreen';
const Stack = createNativeStackNavigator();

const LoginNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AddListScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="AddListScreen" component={AddList} />
        <Stack.Screen name="EnterActivityScreen" component={EnterActivity} />
        <Stack.Screen name="JourneyScreen" component={JourneyScreen} />
        <Stack.Screen name="ActivityListScreen" component={ActivityList} />
        <Stack.Screen name="PhotosListScreen" component={PhotosList} />
        <Stack.Screen name="TimePicker" component={TimePicker} />
        <Stack.Screen name="YearPicker" component={YearPicker} />
        <Stack.Screen name="MonthPicker" component={MonthPicker} />
        <Stack.Screen name="GalleryScreen" component={Gallery} />
        <Stack.Screen name="NotesScreen" component={Notes} />
        <Stack.Screen name="AlbumList" component={AlbumList} />
        <Stack.Screen name="AlbumThumbNail" component={AlbumThumbNail} />
        <Stack.Screen name="ImageViewScreen" component={ImageViewScreen} />
        <Stack.Screen name="ContactsList" component={ContactsList} />
        <Stack.Screen name="UserActivity" component={UserActivity} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const MainNav = ({initialScreen=''}) => {
  const [asyncDeviceInfo, setAsyncDeviceInfo] = React.useState(false);

  const not = true;
  React.useEffect(() => {
    retrieveData();
  },[]);
  const retrieveData = async () => {
    try {
     
      const is_login = await AsyncStorage.getItem('is_login');
      setAsyncDeviceInfo(JSON.parse(is_login));
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName={!asyncDeviceInfo ? 'LoginScreen' : 'AddListScreen'}
        initialRouteName={initialScreen}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="OtpVerificationScreen"
          component={OtpVerification}
        />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="AddListScreen" component={AddList} />
        <Stack.Screen name="EnterActivityScreen" component={EnterActivity} />
        <Stack.Screen name="JourneyScreen" component={JourneyScreen} />
        <Stack.Screen name="ActivityListScreen" component={ActivityList} />
        <Stack.Screen name="PhotosListScreen" component={PhotosList} />
        <Stack.Screen name="TimePicker" component={TimePicker} />
        <Stack.Screen name="YearPicker" component={YearPicker} />
        <Stack.Screen name="MonthPicker" component={MonthPicker} />
        <Stack.Screen name="GalleryScreen" component={Gallery} />
        <Stack.Screen name="NotesScreen" component={Notes} />
        <Stack.Screen name="AlbumList" component={AlbumList} />
        <Stack.Screen name="AlbumThumbNail" component={AlbumThumbNail} />
        <Stack.Screen name="ImageViewScreen" component={ImageViewScreen} />
        <Stack.Screen name="ContactsList" component={ContactsList} />
        <Stack.Screen name="UserActivity" component={UserActivity} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const RootNav = ({initialScreen=''}) => {
  const [asyncDeviceInfo, setAsyncDeviceInfo] = React.useState(null);
  const [appLoading, setAppLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setAppLoading(false);
    }, 2000);
  }, []);
  React.useEffect(() => {
    retrieveData();
  }, []);
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      setAsyncDeviceInfo(JSON.parse(value));
    } catch (error) {
      console.log(error);
    }
  };
  //console.log(asyncDeviceInfo.is_new_user);
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={AppColors.DarkGrey} />
      {/* {asyncDeviceInfo == null ? <MainNav /> : <LoginNav />} */}
      {appLoading ? <SplashScreen /> : <MainNav initialScreen={initialScreen}/>}
    </View>
  );
};
