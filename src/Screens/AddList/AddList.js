import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


import {Container} from '../../Components/index';
import {Spacing, VertSpace} from '../../shared/Global.styles';
import {AddCirecleIcon, AddIcon, BioCircleIcon} from '../../shared/Icon.Comp';

export const PressableButton = ({title = 'Journey',onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} >
      <Text
        style={{
          fontSize: 20,
          fontWeight: '900',
          paddingVertical: 10,
          color: 'white',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export const AddList = ({route}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Container
        padding={Spacing.xxlarge}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('EnterActivityScreen')}
          style={styles.circle}>
          <AddIcon color="black" size={80} />
        </TouchableOpacity>
        <VertSpace size={60} />
        <PressableButton onPress={()=> navigation.navigate('JourneyScreen')} />
        <VertSpace size={30} />
        <PressableButton title="Analytics" onPress={()=> navigation.navigate('CalenderScreen')} />
        <VertSpace size={30} />
        <PressableButton title="Log Out" onPress={()=>AsyncStorage.clear()} />
      </Container>
    </View>
  );
};

const size = 150;
const styles = StyleSheet.create({
  circle: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    borderRadius: 100,
  },
  button: {
    width: 170,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'white',
  },
});
