import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppColors} from '../../assets/AppColors';
import {Container, NextButton, SelectableRadioButton} from '../../Components';
import {AppHeader} from '../../Components/AppHeader';
import {AccentButton} from '../../Components/index';
import {FontSize, Spacing, VertSpace} from '../../shared/Global.styles';
import {Label} from '../Setting/SettingScreen';

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

export const EnterActivity = () => {
  const [selector, setSelector] = React.useState({key: 1, text: 'Yes'});
  const [disable, setDisable] = React.useState(true);
 const navigation=useNavigation()
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <AppHeader colorIcon={AppColors.white} enableBack>
        <AccentButton title="Submit" />
      </AppHeader>
      <Container padding={Spacing.xxlarge} style={{flex: 1}}>
        <VertSpace size={40} />
        <Text onPress={() => navigation.navigate("ActivityListScreen")} style={styles.EnterActivity}>
          Enter Activity
        </Text>
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
