import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RootNav} from './src/RootNav/RootNav';
import {Provider as PaperProvider} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

const App = () => {
  const [asyncDeviceInfo, setAsyncDeviceInfo] = React.useState(null);

  React.useEffect(() => {
    retrieveData();
  }, []);
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('is_login');
      setAsyncDeviceInfo(JSON.parse(value));
    } catch (error) {
      console.log(error);
    }
  };
  console.log(asyncDeviceInfo);
  return (
    <PaperProvider>
      <RootNav
        initialScreen={
          asyncDeviceInfo == null
            ? 'LoginScreen'
            : asyncDeviceInfo == true
            ? 'AddListScreen'
            : null
        }
      />
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
