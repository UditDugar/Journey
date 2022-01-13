import React from 'react';
import { ActivityIndicator, Image, View } from 'react-native';
import BioCircle from '../assets/svg/Icons/BioIcon.svg';

export const ImgSourceCheck = (imageSrc) => {
  return imageSrc == '' ? null : imageSrc;
};

export const BioImageView = ({
  imageSize = 50,
  imageSrc = null,
  loadingRequired = true,
}) => {
  const [imageLoading, setImageLoading] = React.useState(true);
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <BioCircle width={parseInt(imageSize)} height={parseInt(imageSize)} />
      {imageLoading && loadingRequired ? (
        <ActivityIndicator color={'black'} style={{ position: 'absolute' }} />
      ) : null}
      <Image
        onError={() => setImageLoading(false)}
        onLoad={() => setImageLoading(false)}
        style={{
          width: imageSize,
          height: imageSize,
          borderRadius: imageSize / 2,
          position: 'absolute',
        }}
        source={{ uri: ImgSourceCheck(imageSrc) }}
      />
    </View>
  );
};
