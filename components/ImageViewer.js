import { StyleSheet, Image } from 'react-native';


export default function ImageViewer({ iconWhatsSource, selectedImage }) {
    const imageSource = selectedImage !== null
        ? { uri: selectedImage }
        : iconWhatsSource;

    return (
        <Image source={imageSource} style={styles.image} />
    );
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 18,
    },
})