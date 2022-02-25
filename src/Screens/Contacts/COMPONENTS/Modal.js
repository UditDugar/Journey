import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {AppColors} from '../../../assets/AppColors';

export const ModalView = ({setGroupName=()=>{}}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [Group, setGroup] = useState('');

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              onChangeText={text => setGroup(text)}
              style={{
                borderWidth: 2,
                borderColor: AppColors.DarkGrey,
                width: 180,
                borderRadius: 50,
                height: 50,
                borderTopEndRadius: 50,
                borderTopLeftRadius: 50,
                paddingLeft: 20,
                fontWeight: '900',
              }}
            />

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModalVisible(!modalVisible),setGroupName(Group)}}>
              <Text style={styles.textStyle}>Add</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={[
          {
            width: 150,
            height: 50,
            borderWidth: 2,
            borderColor: AppColors.LightGrey,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
          },
        ]}>
        <Text style={{color: AppColors.white, fontWeight: '900'}}>
          Add Group
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: AppColors.DarkGrey,
    width: 120,
    marginTop: 20,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
