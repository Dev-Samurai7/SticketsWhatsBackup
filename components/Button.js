import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ label, theme, onPress }) {

    if (theme === "primary") {
        return (
            <View
                style={[styles.buttonContainer, { borderWidth: 6, borderColor: "#ffd33d", borderRadius: 20 }]}
            >
                <Pressable
                    style={[styles.button, { backgroundColor: "#fff" }]}
                    onPress={() => alert('botão acionado')}
                >
                    <FontAwesome
                        name="picture-o"
                        size={15}
                        color="#25292e"
                        style={styles.buttonIcon}
                    />
                    <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
                </Pressable>
            </View>
        );
    }

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert('Você pressionou o botão')}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 70,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 3
    },
})

















