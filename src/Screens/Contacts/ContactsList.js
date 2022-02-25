import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, StyleSheet, Modal, Pressable} from 'react-native';
import Contacts from 'react-native-contacts';
import {Container, NextButton} from '../../Components';
import {AppHeader} from '../../Components/AppHeader';
import {AppRadioButton} from '../../Components/AppRadioButton';
import {EditWIcon} from '../../shared/Icon.Comp';
import {Contact} from './Contact';
import {RadioButton} from 'react-native-paper';
import {FontSize, VertSpace} from '../../shared/Global.styles';
import {AppColors} from '../../assets/AppColors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ModalView} from './COMPONENTS/Modal';

export const ContactsList = () => {
  const [contacts, setContacts] = useState([]);
  const [SelectedGroup, setSelectedGroup] = useState([
    'Public',
    'Contacts',
    'Closeone',
    'None',
  ]);
  const [checked, setChecked] = React.useState('Public');
  const [GroupName, setGroupName] = useState('');
  useEffect(() => {
    Contacts.requestPermission().then((result, err) => {
      Contacts.getAll().then(contacts => {
        setContacts(contacts);
      });
    });
  }, []);

  const keyExtractor = (item, idx) => {
    return item?.recordID?.toString() || idx.toString();
  };
  const renderItem = ({item, index}) => {
    return <Contact contact={item} />;
  };
  return (
    <View style={{flex: 1, backgroundColor: '#161616'}}>
      <AppHeader colorIcon={'white'} enableBack>
        <NextButton title="Done" disabled={false} />
      </AppHeader>
      <VertSpace size={40} />

      <Container>
        {SelectedGroup.map((item, key) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
              key={key}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingTop: 10,
                }}>
                <RadioButton
                  value={item}
                  status={checked === item ? 'checked' : 'unchecked'}
                  onPress={() => setChecked(item)}
                  uncheckedColor={AppColors.LightGrey}
                />
                <Text style={{color: 'white', fontSize: FontSize.large}}>
                  {item}
                </Text>
              </View>
              {item != 'Public' && item != 'Contacts' && item != 'None' ? (
                <Text>
                  <EditWIcon size={16} />
                </Text>
              ) : null}
            </View>
          );
        })}

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 80,
          }}>
          <ModalView setGroupName={(Group)=>setSelectedGroup([...SelectedGroup,Group])}/>
        </View>
      </Container>
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
    backgroundColor: '#2196F3',
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

{
  /* <FlatList
data={contacts}
renderItem={renderItem}
// keyExtractor={keyExtractor}
style={styles.list}
/> */
}
