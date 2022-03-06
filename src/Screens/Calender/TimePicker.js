import React, {useState, useEffect} from 'react';
import ScrollPicker from 'react-native-picker-scrollview';
import {AppColors} from '../../assets/AppColors';
import {WheelPicker} from 'react-native-wheel-picker-android';
import {AppRegistry, StyleSheet, Text, View, Button} from 'react-native';
import {AppHeader} from '../../Components/AppHeader';
import {NextButton} from '../../Components';

const hours = [
  '00',
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
];
const minutes = [
  '00',
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31',
  '32',
  '33',
  '34',
  '35',
  '36',
  '37',
  '38',
  '39',
  '40',
  '41',
  '42',
  '43',
  '44',
  '45',
  '46',
  '47',
  '48',
  '49',
  '50',
  '51',
  '52',
  '53',
  '54',
  '55',
  '56',
  '57',
  '58',
  '59',
];
export const TimePicker = ({route, navigation}) => {
  const [Hour, setHour] = useState(0);
  const [Min, setMin] = useState(0);
  const [combine, setCombine] = useState({hour: 0, min: 0});
  useEffect(() => {
    setCombine({hour: Hour, min: Min});
  }, [Min, Hour]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#161616',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={{position: 'absolute', top: 0, width: '100%'}}>
        <AppHeader colorIcon={'white'} enableBack>
          <NextButton
            title="Done"
            disabled={false}
            onPress={() => {
              route.params.onReturn(combine), navigation.goBack();
            }}
          />
        </AppHeader>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 50,
          flexDirection: 'row',
        }}>
        <View>
          <WheelPicker
            selectedItem={0}
            data={hours}
            onItemSelected={item => setHour(item)}
            itemTextColor="gray"
            hideIndicator={true}
            selectedItemTextColor="white"
            itemTextSize={20}
            selectedItemTextSize={24}
            style={{
              width: 70,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </View>
        <View>
          <WheelPicker
            selectedItem={0}
            data={['hours']}
            // onItemSelected={item => setMin(item)}
            itemTextColor="gray"
            hideIndicator={true}
            selectedItemTextColor="white"
            itemTextSize={20}
            selectedItemTextSize={24}
            style={{width: 65, height: 200}}
          />
        </View>
        <View>
          <WheelPicker
            selectedItem={0}
            data={minutes}
            onItemSelected={item => setMin(item)}
            itemTextColor="gray"
            hideIndicator={true}
            selectedItemTextColor="white"
            itemTextSize={20}
            selectedItemTextSize={24}
            style={{width: 70, height: 200}}
          />
        </View>
        <View>
          <WheelPicker
            selectedItem={0}
            data={['min']}
            // onItemSelected={item => setMin(item)}
            itemTextColor="gray"
            hideIndicator={true}
            selectedItemTextColor="white"
            itemTextSize={20}
            selectedItemTextSize={24}
            style={{width: 40, height: 200}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
