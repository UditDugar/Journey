import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppHeader} from '../../Components/AppHeader';
import {AppColors} from '../../assets/AppColors';
import {AccentButton, Container, NextButton} from '../../Components';
import {
  AddIcon,
  CalenderIcon,
  CancelIcon,
  DoneFillIcon,
  EditWIcon,
  GoldIcon,
  ShareIcon,
  StarUnFilledIcon,
} from '../../shared/Icon.Comp';
import {FontSize, VertSpace} from '../../shared/Global.styles';
import {Pages} from 'react-native-pages';

const Gallery = ({navigation}) => {
  const [photos, setPhotos] = React.useState();
  return (
    <View style={{flex: 1, backgroundColor: '#161616'}}>
      <AppHeader colorIcon={AppColors.white} enableBack>
        <AccentButton title="Post" />
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
          <Pages indicatorColor={AppColors.white}>
            <View
              style={{
                flex: 1,
              }}>
              <Image
                source={{uri: 'https://reactjs.org/logo-og.png'}}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 30,
                }}
                resizeMode="cover"
              />
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
                        setPhotos(item), alert(item);
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
                <TouchableOpacity>
                  <CancelIcon color="white" size={20} />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{uri: 'https://reactjs.org/logo-og.png'}}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 30,
                }}
                resizeMode="cover"
              />
            </View>
          </Pages>
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

export default Gallery;

const styles = StyleSheet.create({});
