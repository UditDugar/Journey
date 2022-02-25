import React from 'react';
import {
  View,
  Modal,
  Alert,
  BackHandler,
  Dimensions,
  Image,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

import { useNavigation } from '@react-navigation/native';
import { AppHeader } from '../../Components/AppHeader';
import { AppColors } from '../../assets/AppColors';

export const ImageViewScreen = ({ route }) => {
  const {
    imageUrl = null,
    imagesList = [],
    clickedImageIndex = 0,
  } = route.params;
  const [visible, setVisible] = React.useState(true);
  const nav = useNavigation();
  const refImageList = React.useRef(null);
  // goNext

  return (
    <View
      style={{
        backgroundColor: '#161616',
        flex: 1,
      }}
    >
      {/* refImageList.current.goNext(); */}
      <AppHeader enableBack colorIcon={AppColors.white} />
      {/* <AppButton onPress={() => refImageList.current.goNext()} /> */}
      <View style={{ flex: 1, backgroundColor: AppColors.white }}>
        <ImageViewer
          ref={refImageList}
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            backgroundColor: AppColors.white,
          }}
          renderIndicator={() => null}
          index={clickedImageIndex}
          backgroundColor={AppColors.white}
          imageUrls={imagesList.length > 0 ? imagesList : [{ url: imageUrl }]}
        />
      </View>
    </View>
  );
};
