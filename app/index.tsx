import { StyleSheet, Text, View } from "react-native";
import { FancyBox } from "./FancyBox";

// Fixar med git och ändrar den

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "blue"
            }}
        >
            <View style={styles.redbox}>
                <View style={{
                    backgroundColor: "green",
                    width: 70,
                    height: 70,
                    marginLeft: 30
                }}>
                </View>

                <Text style={{
                    flex: 1,
                    textAlign: "center",
                    fontSize: 20
                }}>RUBRIK</Text>
            </View>

            <FancyBox />
            <FancyBox />

            <View
                style={{
                    backgroundColor: "yellow",
                    width: 200,
                    height: 70,
                    marginBottom: 50
                }}>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    redbox: {
        flexDirection: "row",
        backgroundColor: "red",
        height: 120,
        width: "100%",
        alignItems: "center"
    }
})