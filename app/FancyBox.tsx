import { Text, View } from "react-native";

type FancyBoxProps = {
  text: string;
  color: string;
  textColor: string;
};

export function FancyBox({ text, color, textColor }: FancyBoxProps) {
  return (
    <View
      style={{
        backgroundColor: color,
        width: 120,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: textColor, textAlign: "center" }}>{text}</Text>
    </View>
  );
}
