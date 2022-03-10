import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {AppHeader} from '../../Components/AppHeader';
import {AppColors} from '../../assets/AppColors';
import {
  AccentButton,
  CenterContainer,
  CenterRowContainer,
  Container,
  NextButton,
} from '../../Components';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {FontSize, VertSpace} from '../../shared/Global.styles';
import {CalenderIcon, EditWIcon, ShareIcon} from '../../shared/Icon.Comp';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import {MonthString} from '../Journey/JourneyScreen';

const Notes = ({route, navigation}) => {
  const [noteText, setNoteText] = useState('');
  const stringValueDate = (date, month, year) => {
    var dateString = `${date}`,
      monthString = `${month}`;

    return `${year}-${monthString}-${dateString}`;
  };

  const CurrentDate = moment().date();
  const CurrentYear = moment().year();
  const CurrentMonthIndex = moment().month();

  const [state, setState] = React.useState(
    stringValueDate(CurrentDate, CurrentMonthIndex + 1, CurrentYear),
  );
  const newDate = state.split('-');

  return (
    <View style={{flex: 1, backgroundColor: '#161616'}}>
      <AppHeader colorIcon={AppColors.white} enableBack>
        <AccentButton
          title="Post"
          disabled={noteText === '' ? true : false}
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
        <VertSpace size={60} />
        <CenterRowContainer>
          <CenterRowContainer>
            <ShareIcon size={50} />
            <View style={{marginLeft: 20}}>
              <Text style={{fontWeight: '900', color: AppColors.MediumGrey}}>
                Share with ...
              </Text>
              <Text style={{fontWeight: '900', color: AppColors.white}}>
                Public
              </Text>
            </View>
          </CenterRowContainer>
          <Text onPress={() => navigation.navigate('ContactsList')}>
            <EditWIcon />
          </Text>
        </CenterRowContainer>
        <VertSpace size={30} />

        <CenterRowContainer>
          <CenterRowContainer>
            <CalenderIcon size={50} />
            <View style={{marginLeft: 20}}>
              <Text style={{fontWeight: '900', color: AppColors.MediumGrey}}>
                Date
              </Text>
              <Text style={{fontWeight: '900', color: AppColors.white}}>
                {newDate[2]}-<MonthString MonthIndex={newDate[1]} />-
                {newDate[0]}
              </Text>
            </View>
          </CenterRowContainer>
          <Text
            onPress={() =>
              navigation.navigate('MonthPicker', {
                onReturn: item => setState(item),
              })
            }>
            <EditWIcon />
          </Text>
        </CenterRowContainer>
      </Container>
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({});
