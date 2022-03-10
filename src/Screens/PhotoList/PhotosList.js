import CameraRoll from '@react-native-community/cameraroll';
import {PermissionsAndroid, Platform} from 'react-native';
import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  Text,
  View,
  Pressable,
} from 'react-native';
import {AppHeader, DropdownHeader} from '../../Components/AppHeader';
import {AppColors} from '../../assets/AppColors';
import {AccentButton, Container} from '../../Components';
import {useNavigation} from '@react-navigation/native';
import {VertSpace, AppDimens, GStyles} from '../../shared/Global.styles';


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

export const ImageGridView = ({
  item,
  imageUrl = null,
  size = AppDimens.width * 0.25,
  index,
  onPress = () => {},
  isSelected = false,
  selectIconView = true,
}) => {
  const [checked, setChecked] = React.useState(isSelected);

  return (
    <Pressable
      onPress={() => {
        onPress(), setChecked(!checked);
      }}
      style={{
        width: size,
        height: size,
        backgroundColor: AppColors.Transparent,
        ...GStyles.containView,
        margin: 10,
      }}>
      {selectIconView ? (
        <View
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            zIndex: 20,
            borderRadius: size / 2.9,
            backgroundColor: AppColors.Blackop1,
            borderColor: AppColors.yellowDarkI,
            borderWidth: 1,
          }}>
          <Text
            style={{
              backgroundColor: checked ? AppColors.green : AppColors.white,
              height: 15,
              width: 15,
              borderRadius: 30,
            }}
          />
        </View>
      ) : null}

      <Image
        resizeMode={'cover'}
        key={index}
        style={{
          width: size,
          height: size,
          backgroundColor: AppColors.LightGrey,
          borderRadius: size / 2.9,
        }}
        source={{uri: imageUrl}}
      />
    </Pressable>
  );
};
export const PhotosList = ({route, navigation}) => {
  const {reg} = route.params;

  const [PhotosList, setPhotosList] = React.useState([]);
  const [albumList, setAlbumList] = React.useState([]);
  const [AlbumName, setAlbumName] = React.useState('All');
  const endCursorRef = React.useRef('0');
  const [PhotoCount, setPhotoCount] = React.useState(2000);
  const [GalleryImages, setGalleryImages] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);

  useEffect(() => {
    setToggle(reg);
  },[]);

  useEffect(() => {
    checkPermission().then(() => {
      getAllAlbumData(),
        getPhotos(),
        getPhotosFromAlbum(AlbumName, '0', PhotoCount).then(response => {
          setGalleryImages(response.edges);
          endCursorRef.current = '0';
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
  const selectNum = toggle ? 1 : 25;
  const [SelectedImages, setSelectedImages] = React.useState([]);
  console.log(SelectedImages.length);
  const CollectSelectedImages = (item, index, checkedvalue) => {
    var newSelectedImages = [...SelectedImages];
    if (newSelectedImages.indexOf(item.image.uri) === -1) {
      if (newSelectedImages.length >= selectNum)
        alert(`Cannot select more than ${selectNum}`);
      else newSelectedImages.unshift(item.image.uri);
    } else {
      newSelectedImages.splice(newSelectedImages.indexOf(item.image.uri), 1);
    }
    setSelectedImages(newSelectedImages);
    // crollToItem(at: index, at: .top, animated: true)
  };

  return (
    <View style={{flex: 1, backgroundColor: '#161616'}}>
      <AppHeader enableBack colorIcon={AppColors.white}>
        <AccentButton
          disabled={SelectedImages.length === 0 ? true : false}
          onPress={() => {
            route.params.onReturn(SelectedImages), navigation.goBack();
          }}
        />
      </AppHeader>
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
              <ImageGridView
                imageUrl={item.node.image.uri}
                index={index}
                onPress={() => {
                  reg
                    ? (route.params.onReturn(item.node.image.uri),
                      navigation.goBack())
                    : CollectSelectedImages(item.node);
                }}
              />
            );
          }}
        />
        {AlbumName === 'All' ? (
          <FlatList
            keyExtractor={(index,key) => index.image.uri}
            data={PhotosList}
            numColumns={3}
            renderItem={({item, index}) => {
              return (
                <ImageGridView
                  imageUrl={item.image.uri}
                  index={index}
                  onPress={() => {
                    reg
                      ? (route.params.onReturn(item.image.uri),
                        navigation.goBack())
                      : CollectSelectedImages(item);
                  }}
                />
              );
            }}
          />
        ) : null}
      </Container>
    </View>
  );
};
