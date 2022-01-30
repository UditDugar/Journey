import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {AppHeader} from '../../Components/AppHeader';
import {AppColors} from '../../assets/AppColors';
import {AccentButton, Container, NextButton} from '../../Components';
import {TextInput} from 'react-native-gesture-handler';
import {FontSize, VertSpace} from '../../shared/Global.styles';
import {CalenderIcon, EditWIcon, ShareIcon} from '../../shared/Icon.Comp';
import { useNavigation } from '@react-navigation/native';

const Notes = ({route, navigation}) => {
  const [noteText, setNoteText] = useState('');
  return (
    <View style={{flex: 1, backgroundColor: '#161616'}}>
      <AppHeader colorIcon={AppColors.white} enableBack>
        <AccentButton
          title="Post"
          onPress={() => {
            route.params.onReturn(noteText), navigation.goBack();
          }}
        />

      </AppHeader>

      <Container>
        <VertSpace size={30} />
        <TextInput
          placeholder="Add for notes for today ..."
          placeholderTextColor={AppColors.MediumGrey}
          style={{color: 'white', fontWeight: '700', fontSize: FontSize.large}}
          multiline
          onChangeText={text => setNoteText(text)}
        />
        <VertSpace size={30} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ShareIcon size={50} />
            <View style={{marginLeft: 20}}>
              <Text style={{fontWeight: '900', color: AppColors.MediumGrey}}>
                Share with ...
              </Text>
              <Text style={{fontWeight: '900', color: AppColors.white}}>
                Public
              </Text>
            </View>
          </View>
          <Text>
            <EditWIcon />
          </Text>
        </View>
        <VertSpace size={30} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CalenderIcon size={50} />
            <View style={{marginLeft: 20}}>
              <Text style={{fontWeight: '900', color: AppColors.MediumGrey}}>
                Date
              </Text>
              <Text style={{fontWeight: '900', color: AppColors.white}}>
                29-Jan-2022
              </Text>
            </View>
          </View>
          <Text>
            <EditWIcon />
          </Text>
        </View>
      </Container>
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({});
