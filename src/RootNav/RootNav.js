// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../Screens/Login/LoginScreen';
import {Home} from '../Screens/Home/Home';
import { OtpVerification } from '../Screens/Login/OtpVerification';
import { ProfileScreen } from '../Screens/Profile/ProfileScreen';
import {AddList} from '../Screens/AddList/AddList'
import {EnterActivity} from '../Screens/EnterActivity/EnterActivity'
import { JourneyScreen } from '../Screens/Journey/JourneyScreen';
import { ActivityList } from '../Screens/ActivityList/ActivityList';
import { PhotosList } from '../Screens/PhotoList/PhotosList';
import { Calender } from '../Screens/Calender/Calender';
import { YearPicker } from '../Screens/Calender/YearPicker';
import { MonthPicker } from '../Screens/Calender/MonthPicker';
const Stack = createNativeStackNavigator();

export const RootNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ProfileScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OtpVerificationScreen" component={OtpVerification} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="AddListScreen" component={AddList} />
        <Stack.Screen name="EnterActivityScreen" component={EnterActivity} />
        <Stack.Screen name="JourneyScreen" component={JourneyScreen} />
        <Stack.Screen name="ActivityListScreen" component={ActivityList} />
        <Stack.Screen name="PhotosListScreen" component={PhotosList} />
        <Stack.Screen name="CalenderScreen" component={Calender} />
        <Stack.Screen name="YearPicker" component={YearPicker} />
        <Stack.Screen name="MonthPicker" component={MonthPicker} />
              
      </Stack.Navigator>
    </NavigationContainer>
  );
};
