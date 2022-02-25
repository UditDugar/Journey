import CameraRoll from '@react-native-community/cameraroll';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppColors} from '../../assets/AppColors';
import {AppFonts} from '../../assets/fonts/AppFonts';
import {AppHeader} from '../../Components/AppHeader';
import {Spacing, VertSpace, WhiteFadeView} from '../../shared/Global.styles';
import {AlbumThumbNail} from './Albums.View';
import { getPhotosFromAlbum } from './PhotosList';

export function AlbumList({route, navigation}) {
  const [Foldernames, setFoldernames] = React.useState([]);
  const {albumData} = route.params;
  const [album, setAlbum] = React.useState([]);
  const endCursorRef = React.useRef('0');

  React.useEffect(() => {
    setFoldernames(albumData);
  }, [albumData]);
  React.useEffect(() => {
    getAllAlbumData();
  });
  const getAllAlbumData = () => {
    getPhotosFromAlbum('', '0', 0).then(response => {
      setAlbum(response.edges);
      endCursorRef.current = '0';
      console.log(response.edges);
    });
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#161616',
        paddingHorizontal: Spacing.xlarge,
      }}>
      <AppHeader padding={0} enableBack colorIcon={AppColors.white}/>
      <View>
        <WhiteFadeView reverse style={Styles.headerView}>
          {/* <VertSpace size={30} /> */}
          <Text style={[Styles.headerTextView, {color: 'white'}]}>
            Select Folder
          </Text>
        </WhiteFadeView>
      </View>

      {/* LIST OF ALBUMS */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* SPACE ADDITION */}
        <VertSpace size={80} />
        {/* LOOPING THROUGH THE ALBUMS RESPONSES */}
        {Foldernames.map((item, index) => (
          <AlbumThumbNail
            key={index.toString()}
            albumData={item}
            onPress={() => {
              route.params.onReturn(item), navigation.goBack();
            }}
          />
        ))}

        <VertSpace size={50} />
      </ScrollView>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  headerView: {
    backgroundColor: AppColors.Transparent,
    width: '100%',
    // height: 100,
    paddingBottom: 40,
    zIndex: 20,
    position: 'absolute',
    top: 0,
  },
  headerTextView: {
    fontFamily: AppFonts.CalibriBold,
    color: AppColors.DarkGrey,
    fontSize: Spacing.xxlarge,
  },
});
