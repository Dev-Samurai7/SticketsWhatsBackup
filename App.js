import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react'; // usa o arquivo a ser selecionado
import CircleButton from './components/homeButton';
import IconButton from './components/IconButton';

const iconWhats = require('./assets/img/iconWhats.jpg');


export default function App() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);

  const pickImageAsync = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    })

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('Você não selecionou uma imagem!')
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        <ImageViewer
          iconWhatsSource={iconWhats}
          selectedImage={selectedImage}
        />
      </View>

      <Text> Export seus Stickets Whatsapp para fazer o Backup!</Text>
      <Text> Import seus Stickets Whatsapp para usar no seu dispositivo </Text>
      {showAppOptions ? (
        <View />
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Import Stickets" onPress={pickImageAsync} />

          <Button theme="primary" label="Export Stickets" />
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    textShadowColor: "black"
  },
});
