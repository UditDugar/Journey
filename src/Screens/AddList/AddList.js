import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {CenterContainer, Container, MainContainer, PressableButton} from '../../Components/index';
import {Spacing, VertSpace} from '../../shared/Global.styles';
import {AddCirecleIcon, AddIcon, BioCircleIcon} from '../../shared/Icon.Comp';
import {ApiCall, Testing} from '../../ApiLogic/Auth.Api';
import {API_TYPE, APP_APIS} from '../../ApiLogic/API_URL';
import {Modal} from 'react-native-paper';
import { Gravities, showToast } from '../../shared/Functions/ToastFunctions';


export const AddList = ({route}) => {


  const navigation = useNavigation();
  const [asyncDeviceInfo, setAsyncDeviceInfo] = React.useState('');
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
  const [modalVisible, setModalVisible] = React.useState(false);

  const Logout = async () => {
    console.log(asyncDeviceInfo.user.token);

    ApiCall(APP_APIS.LOGOUT, API_TYPE.POST, asyncDeviceInfo.user.token)
    .then(async data => {
      if (data.status === 1) {
        AsyncStorage.clear();
        showToast("Logged Out Successfully",Gravities.BOTTOM)
        navigation.navigate('LoginScreen');
      } else {
        showToast("Logout Error",Gravities.BOTTOM)

        alert("Logout Error"); 
      
      }
    })
    .catch(error => {
      console.error('Error:', error);
      showToast("Logout Error",Gravities.BOTTOM)
    });
  };

  return (
    <MainContainer>
      <CenterContainer
        padding={Spacing.xxlarge}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('EnterActivityScreen', {
              token: asyncDeviceInfo.token,
            })
          }
          style={styles.circle}>
          <AddIcon color="black" size={80} />
        </TouchableOpacity>
        <VertSpace size={60} />
        <PressableButton
          onPress={() =>
            navigation.navigate('JourneyScreen', {
              token: asyncDeviceInfo.token,
              id: asyncDeviceInfo.id,
            })
          }
        />
        <VertSpace size={30} />
        <PressableButton title="Analytics" />
        <VertSpace size={30} />
        <PressableButton
          title="Log Out"
          onPress={() => setModalVisible(!modalVisible)}
        />
      </CenterContainer>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onDismiss={()=>setModalVisible(!modalVisible)}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Do you want to Logout ?</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width:"100%",
               marginTop:50
              }}>
              <Pressable
                style={[styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={{color:"green",fontSize:20,fontWeight:"900"}}>No</Text>
              </Pressable>

              <Pressable
                style={[styles.buttonClose]}
                onPress={() => {setModalVisible(!modalVisible),Logout()}}>
                <Text style={{color:"red",fontSize:20,fontWeight:"900"}}>Yes</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </MainContainer>
  );
};


const styles = StyleSheet.create({
  circle: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    borderRadius: 100,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'red',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: '#fff',
    height: 200,
    width: 250,
  },

  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    height:30,
    borderRadius:20,
    color:"black"
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
 

  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color:"#111111",
    fontSize:20,
    fontWeight:"900"
  },
});
