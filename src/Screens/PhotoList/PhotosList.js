import CameraRoll from "@react-native-community/cameraroll";
import { PermissionsAndroid, Platform } from "react-native";
import React, { useEffect } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { AppHeader } from "../../Components/AppHeader";
import { AppColors } from "../../assets/AppColors";
import { Container } from "../../Components";

export const PhotosList = () => {
  const [PhotosList, setPhotosList] = React.useState([]);
  const [albumList, setAlbumList] = React.useState([]);
  const [albumName, setAlbumName] = React.useState('');
//   useEffect(() => {
//     getPhotos('');
//     getAllAlbumData();
//   }, []);

  const [visible, setIsVisible] = React.useState([]);

  useEffect(() => {
    checkPermission().then(() => {
      getPhotos();
    });
  }, []);
  const checkPermission = async () => {
    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
    if (hasPermission) {
      return true;
    }
    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'Image Permission',
        message: 'Images Gallery',
        buttonPositive: 'OK',
      },
    );
    return status === 'granted';
  };
//   const getPhotos = async () => {
//     const photos = await CameraRoll.getPhotos({
//       first: 1000,
//     });
//     console.log('===============Barsa=====================');
//     console.log(photos.edges);
//     console.log('====================================');
//     setPhotosList(photos.edges.map(edge => edge.node));
//   };
const getPhotos =async (albumName) => {
    CameraRoll.getPhotos({
      first: 2000,
      after: '0',
      assetType: 'Photos',
      groupTypes: 'Album',
      groupName: albumName,
    })
      .then((r) => {
        setPhotosList(r.edges.map(edge => edge.node))
          })
      .catch((err) => {
        //Error Loading Images
      });
  };

  const getAllAlbumData = () => {
    CameraRoll.getAlbums({ assetType: 'Photos' }).then((response) => {
      setAlbumList(response);
      console.log(response);
    });
  };


  return (
    <View style={{ flex: 1, backgroundColor: '#161616'}}>
       <AppHeader enableBack colorIcon={AppColors.white}/>
        <Text
          style={{
            fontWeight: '900',
            color: 'white',
            fontSize: 30,
            marginLeft: 30,
            marginBottom:30
          }}>
          Gallery
        </Text>
      <FlatList
      key={'_'}
        keyExtractor={(_, index) => index.toString()}
        data={PhotosList}
        numColumns={3}
        renderItem={({ item, index }) => {
          return (

              <View style={{justifyContent:"center",alignItems:"center",flex:1,margin:10}} >
            
            <Image
              key={index}
              style={{
                  width: 80,
                  height: 80,
                  resizeMode: 'cover',
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: '#1ACA7E',
                }}
              source={{ uri: item.image.uri }}
            />

</View>
          );
        }}
      />
    </View>
  );
};

