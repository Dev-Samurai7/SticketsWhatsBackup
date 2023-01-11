import { Image } from 'react-native';

import { styles } from '../style/ImageViewerStyle';


export default function ImageViewer({ iconWhatsSource, selectedImage }) {
  const imageSource = selectedImage !== null
    ? { uri: selectedImage }
    : iconWhatsSource;

  return (
    <Image
      source={imageSource}
      style={styles.image} />
  );
}