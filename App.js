import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import * as ImagePicker from 'expo-image-picker';

const iconWhats = require('./assets/img/iconWhats.jpg');


export default function App() {
  const pickImageAsync = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    })

    if (!result.canceled) {
      console.log(result);
    } else {
      alert('Você não selecionou uma imagem!')
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        <ImageViewer iconWhats={iconWhats} />
      </View>

      <Text> Export seus Stickets Whatsapp para fazer o Backup!</Text>
      <Text> Import seus Stickets Whatsapp para usar no seu dispositivo </Text>

      <View style={styles.footerContainer}>
        <Button theme="primary" label="Import Stickets" />
        <Button theme="primary" label="Export Stickets" />
      </View>

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
