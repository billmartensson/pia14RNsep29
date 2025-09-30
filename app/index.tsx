import { StyleSheet, Text, View } from "react-native";
import { FancyBox } from "./FancyBox";

// Fixar med git och ändrar den
// Mera kommentar
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "steelblue",
      }}
    >
      <View style={styles.redbox}>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 20,
          }}
        >
          RUBRIK
        </Text>
      </View>

      <View style={styles.greenbox}>
        <FancyBox text="1" color="black" textColor="white" />
        <FancyBox text="2" color="white" textColor="black" />
      </View>

      <View style={styles.yellowbox}>
        <Text>ABC</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  redbox: {
    flexDirection: "row",
    backgroundColor: "red",
    height: 130,
    width: "100%",
    alignItems: "center",
  },
  greenbox: {
    justifyContent: "space-evenly",
    backgroundColor: "green",
    flexDirection: "row",
    height: 130,
    width: "100%",
    alignItems: "center",
  },
  yellowbox: {
    backgroundColor: "yellow",
    width: 150,
    height: 150,
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
