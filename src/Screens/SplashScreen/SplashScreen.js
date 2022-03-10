import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {CenterContainer, CenterRowContainer} from '../../Components';

export const SplashScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#161616',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          flex: 3,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',

          borderWidth: 1.5,

          borderTopEndRadius: 200,
          borderTopLeftRadius: 200,
          marginTop: 50,

          borderBottomColor: '#2b448a',
          borderTopColor: 'gray',
          borderLeftColor: 'gray',
          borderRightColor: 'gray',
          borderBottomWidth: 10,
          borderRightWidth: 20,
        }}>
        <Image
          source={require('../../assets/images/SplashIcon.png')}
          style={{borderRadius: 200, width: 260, height: 260}}
        />
        <Text style={{color: '#ffff99', fontWeight: '900', fontSize: 20}}>
          Journey
        </Text>
      </View>

      <CenterRowContainer justifyContent="center">
        <ActivityIndicator size={'small'} />
      </CenterRowContainer>
    </View>
  );
};

export default SplashScreen;
