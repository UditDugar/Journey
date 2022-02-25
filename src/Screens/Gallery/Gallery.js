import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import {AppHeader} from '../../Components/AppHeader';
import {AppColors} from '../../assets/AppColors';
import {AccentButton, Container, NextButton} from '../../Components';
import {
  AddIcon,
  CalenderIcon,
  CancelIcon,
  DoneFillIcon,
  EditWIcon,
  GalleryIcon,
  GoldIcon,
  ImagePlaceHolder,
  ShareIcon,
  StarUnFilledIcon,
} from '../../shared/Icon.Comp';
import {FontSize, VertSpace} from '../../shared/Global.styles';
import {Pages} from 'react-native-pages';
import Icon from 'react-native-vector-icons/dist/Feather';
import moment from 'moment';
import {MonthString} from '../Journey/JourneyScreen';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
const Gallery = ({route, navigation}) => {
  const [photos, setPhotos] = React.useState([]);
  const CurrentDate = moment().date();
  const CurrentYear = moment().year();
  const CurrentMonthIndex = moment().month();
  const stringValueDate = (date, month, year) => {
    var dateString = `${date}`,
      monthString = `${month}`;

    return `${year}-${monthString}-${dateString}`;
  };
  const [state, setState] = React.useState(
    stringValueDate(CurrentDate, CurrentMonthIndex + 1, CurrentYear),
  );
  const newDate = state.split('-');
  const DeleteImage = id => {
    const newPeople = photos.filter(person => person !== id);

    setPhotos(newPeople);
  };

  const SquareImage = ({
    imgUri = 'http://www.friendlyautosale.net/application/modules/themes/views/default/assets/images/image-placeholder.png',
    image = require('../../assets/images/image-placeholder.png'),
    onPress = () => {},
    disableCross = false,
    placeholder,
  }) => {
    return (
      <View
        style={{
          flex: 1,
        }}>
        {placeholder ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <GalleryIcon color="white" size={150} />
          </View>
        ) : (
          <Image
            source={image}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 30,
            }}
            resizeMode="cover"
          />
        )}

        {/* <View style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}}>
        <ImagePlaceHolder size={150} color={AppColors.LightGrey}/>

        </View> */}
        <View
          style={{
            position: 'absolute',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 16,
            width: '100%',
          }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('PhotosListScreen', {
                onReturn: item => {
                  setPhotos(item);
                },
              })
            }
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: AppColors.DarkGrey,
              borderRadius: 50,
              backgroundColor: AppColors.white,
            }}>
            <AddIcon color={AppColors.DarkGrey} size={20} />
          </TouchableOpacity>
          {disableCross ? null : (
            <TouchableOpacity onPress={onPress}>
              <CancelIcon color="white" size={20} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#161616'}}>
      <AppHeader colorIcon={AppColors.white} enableBack>
        <AccentButton
          title="Post"
          disabled={photos.length === 0 ? true : false}
          onPress={() => {
            route.params.onReturn(photos), navigation.goBack();
          }}
        />
      </AppHeader>
      <VertSpace size={30} />
      <Container>
        <View
          style={{
            width: '100%',
            height: 320,
            backgroundColor: AppColors.DarkGrey,
            borderRadius: 30,
          }}>
          {photos.length === 0 ? (
            <SquareImage placeholder={true} disableCross={true} />
          ) : (
            <Pages indicatorColor={AppColors.white}>
              {photos.map((item, key) => {
                return (
                  <SquareImage
                    // imgUri={item}
                    image={{uri: item}}
                    key={key}
                    onPress={() => DeleteImage(item)}
                  />
                );
              })}
            </Pages>
          )}
        </View>
        <VertSpace size={50} />

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
          <Text onPress={() => navigation.navigate('ContactsList')}>
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
                {newDate[2]}-<MonthString MonthIndex={newDate[1]} />-
                {newDate[0]}
              </Text>
            </View>
          </View>
          <Text
            onPress={() =>
              navigation.navigate('MonthPicker', {
                onReturn: item => setState(item),
              })
            }>
            <EditWIcon />
          </Text>
        </View>
      </Container>
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({});
