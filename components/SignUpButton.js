import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SignUpButton = () => {
  const navigation = useNavigation();

  return (
    <View className="w-full">
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        className=" bg-[#1effd6] p-4 mx-8 rounded-full flex-row justify-center"
        style={{
          borderRadius: 10,
          borderColor: "#000000",
          borderWidth: 1,
        }}
      >
        <Text
          className="text-white text-center"
          style={{
            fontFamily: "Montserrat-SemiBold",
            fontSize: 17,
            color: "#000000",
          }}
        >
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpButton;
