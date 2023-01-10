import { StyleSheet, View, Pressable, Text } from "react-native";

export default function Button({ label }) {
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

















