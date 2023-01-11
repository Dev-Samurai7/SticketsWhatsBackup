import { View, Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { styles } from '../style/ButtonStyle'

export default function Button({ label, theme, onPress }) {

  if (theme === "primary") {
    return (
      <View
        style={styles.buttonContainer}
      >
        <Pressable
          style={styles.button}
          onPress={onPress}
        >
          <FontAwesome
            name="picture-o"
            size={15}
            color="#000"
            style={styles.buttonIcon}
          />
          <Text
            style={styles.buttonLabel}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress} >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

















