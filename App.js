import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';

const iconWhats = require('./assets/img/iconWhats.jpg');

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        <ImageViewer iconWhats={iconWhats} />
      </View>

      <Text> Export seu Stickets Whatsapp para fazer o Backup!</Text>
      <Text> Impor seu Stickets Whatsapp para usar no seu dispositivo </Text>

      <View style={styles.footerContainer}>
        <Button label="Import Stickets" />
        <Button label="Export Stickets" />
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
    textShadowColor : "black"
  },
});
