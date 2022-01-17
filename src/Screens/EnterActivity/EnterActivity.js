import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AppColors} from '../../assets/AppColors';
import {Container, NextButton, SelectableRadioButton} from '../../Components';
import {AppHeader} from '../../Components/AppHeader';
import {AccentButton} from '../../Components/index';
import {FontSize, Spacing, VertSpace} from '../../shared/Global.styles';
import { CancelIcon, EditIcon } from '../../shared/Icon.Comp';
import {Label} from '../Profile/ProfileScreen';

export const YesNoOptions = [
  {
    key: '1',
    text: 'Yes',
  },
  {
    key: '2',
    text: 'No',
  },
];

export const EnterActivity = ({route, navigation}) => {
  const [item, setItem] = useState(null);

  // const {data}=route.params
  // console.log(data);
  const [selector, setSelector] = React.useState({key: 1, text: 'Yes'});
  const [disable, setDisable] = React.useState(true);
  // const navigation = useNavigation();
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <AppHeader colorIcon={AppColors.white} enableBack>
        <AccentButton title="Submit" />
      </AppHeader>
      <Container padding={Spacing.xxlarge} style={{flex: 1}}>
        <VertSpace size={40} />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ActivityListScreen', {
              onReturn: item => {
                setItem(item);
                // alert(item)
              },
            })
          }>
          {item === null ? (
            <Text style={styles.EnterActivity}>Enter Activity ...</Text>
          ) : (
            <View style={{justifyContent:"space-between",flexDirection:"row",alignItems:"center"}}>
            <Text style={[styles.EnterActivity,{color:"white"}]}>{item}</Text>
            <Text onPress={()=> setItem(null)}>
            <EditIcon color='red' size={12}/>

            </Text>
            </View>
          )}
        </TouchableOpacity>

        <VertSpace size={40} />
        <Label title="Date" onPress={() => alert('Abhaya')} />
        <VertSpace size={10} />
        <Text style={{color: 'white', fontSize: FontSize.inputText}}>
          8th Dec, 2021
        </Text>
        <VertSpace size={40} />
        <Label title="Time Duration" onPress={() => alert('Abhaya')} />
        <VertSpace size={10} />
        <Text style={{color: 'white', fontSize: FontSize.inputText}}>
          30 minutes
        </Text>
        <VertSpace size={40} />
        <Text
          style={{
            color: AppColors.MediumGrey,
            fontSize: FontSize.large,
            fontWeight: '900',
          }}>
          What is important
        </Text>
        <SelectableRadioButton
          data={YesNoOptions}
          onSelected={value => {
            setSelector(value), setDisable(false);
          }}
          editable={true}
        />
        <VertSpace size={30} />
        <Text
          style={{
            color: AppColors.MediumGrey,
            fontSize: FontSize.large,
            fontWeight: '900',
          }}>
          Do you like it ?
        </Text>
        <SelectableRadioButton
          data={YesNoOptions}
          onSelected={value => {
            setSelector(value), setDisable(false);
          }}
          editable={true}
        />
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  EnterActivity: {
    fontWeight: '900',
    fontSize: FontSize.xxlarge,
    color: AppColors.MediumGrey,
  },
});
