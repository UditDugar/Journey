import CameraRoll from '@react-native-community/cameraroll';
import {PermissionsAndroid, Platform} from 'react-native';
import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppHeader, DropdownHeader} from '../../Components/AppHeader';
import {AppColors} from '../../assets/AppColors';
import {Container} from '../../Components';
import {useNavigation} from '@react-navigation/native';
import {VertSpace} from '../../shared/Global.styles';

export const getPhotosFromAlbum = (groupname = '', after = '0', first = 20) => {
  return CameraRoll.getPhotos({
    first: first == 0 ? 20 : first,
    after: after,
    assetType: 'Photos',
    groupTypes: 'Album',
    groupName: groupname,
  }).then(response => {
    return response;
  });
};

export const PhotosList = ({route}) => {
  // const {selectedGroup}=route.params

  const [PhotosList, setPhotosList] = React.useState([]);
  const [albumList, setAlbumList] = React.useState([]);
  const [AlbumName, setAlbumName] = React.useState('All');
  const endCursorRef = React.useRef('0');
  const [PhotoCount, setPhotoCount] = React.useState(2000);
  const [GalleryImages, setGalleryImages] = React.useState([]);
  useEffect(() => {
    checkPermission().then(() => {
      getAllAlbumData(),
        getPhotos(),
        getPhotosFromAlbum(AlbumName, '0', PhotoCount).then(response => {
          setGalleryImages(response.edges);
          endCursorRef.current = '0';
          console.log(response.edges);
        });
    });
  }, [PhotoCount]);
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

  const getPhotos = async albumName => {
    CameraRoll.getPhotos({
      first: 2000,
      after: '0',
      assetType: 'Photos',
      groupTypes: 'Album',
      groupName: albumName,
    })
      .then(r => {
        setPhotosList(r.edges.map(edge => edge.node));
      })
      .catch(err => {
        //Error Loading Images
      });
  };

  const getAllAlbumData = () => {
    CameraRoll.getAlbums({assetType: 'Photos'}).then(response => {
      setAlbumList(response);
      // console.log(response);
    });
  };
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: '#161616'}}>
      <AppHeader enableBack colorIcon={AppColors.white} />
      <Container>
        <DropdownHeader
          onHeaderPress={() => {
            navigation.navigate('AlbumList', {
              albumData: albumList,
              onReturn: item => {
                setAlbumName(item.title), setPhotoCount(item.count);
              },
            });
          }}
          title={AlbumName === 'All' ? 'All' : AlbumName}
        />

        <VertSpace size={40} />

        <FlatList
          key={'_'}
          keyExtractor={(_, index) => index.toString()}
          data={GalleryImages}
          numColumns={3}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  route.params.onReturn(item.node.image.uri),
                    navigation.goBack();
                }}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                  margin: 10,
                }}>
                <Image
                  style={{
                    width: 80,
                    height: 80,
                    resizeMode: 'cover',
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: AppColors.green,
                  }}
                  source={{uri: item.node.image.uri}}
                />
              </TouchableOpacity>
            );
          }}
        />
        {AlbumName === 'All' ? (
          <FlatList
            key={'_'}
            keyExtractor={(_, index) => index.toString()}
            data={PhotosList}
            numColumns={3}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    route.params.onReturn(item.image.uri), navigation.goBack();
                  }}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                    margin: 10,
                  }}>
                  <Image
                    key={index}
                    style={{
                      width: 80,
                      height: 80,
                      resizeMode: 'cover',
                      borderRadius: 10,
                      borderWidth: 2,
                      borderColor: AppColors.green,
                    }}
                    source={{uri: item.image.uri}}
                  />
                </TouchableOpacity>
              );
            }}
          />
        ) : null}
      </Container>
    </View>
  );
};
