import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react'; // usa o arquivo a ser selecionado
import CircleButton from './components/homeButton';
import IconButton from './components/IconButton';

import { styles } from './styles';

const iconWhats = require('./assets/img/home.png');


export default function App() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);

  const pickImageAsync = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    })

    if (!result.cancelled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('Você não selecionou uma imagem!')
    }
  }

  return (

    <SafeAreaView style={styles.container}>
      <View >
      <StatusBar style='auto'/>
      <View style={styles.imageContainer}>
        <ImageViewer
          iconWhatsSource={iconWhats}
          selectedImage={selectedImage}
        />
      </View>

      {showAppOptions ? (
        <View />
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Import Stickets" onPress={pickImageAsync} />
          <Text style={styles.textFooterOne}>Import seus Stickets Whatsapp para usar no seu dispositivo </Text>

          <Button theme="primary" label="Export Stickets" />
          <Text style={styles.textFooterTwo}>Export seus Stickets Whatsapp para fazer o Backup!</Text>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>

  );
}
