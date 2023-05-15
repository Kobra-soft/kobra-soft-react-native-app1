import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import React, { useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const UserScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <>
      {
        <StatusBar
          translucent
          backgroundColor={"#080808"}
          barStyle="light-content"
        />
      }
      <SafeAreaView className="h-full bg-[#080808]">
        <View className="flex-row justify-between items-center p-3 bg-[#080808]">
          <TouchableOpacity onPress={navigation.goBack} className="mx-">
            {/* <AntDesign name="leftcircle" size={40} color="#FF844F" /> */}
            {/* <Feather name="menu" size={30} color="#FF844F" /> */}
            {/* <Ionicons name="ios-arrow-back-sharp" size={24} color="#FF844F" /> */}
            <Ionicons name="chevron-back-outline" size={30} color="#4FFFB5" />
          </TouchableOpacity>

          {/*           <Text
            style={{ fontSize: 18 }}
            className="text-white text-center items-center"
          >
            Kobra-soft
          </Text> */}
        </View>

        <View className="h-full bg-[#dcdfdd]"></View>
      </SafeAreaView>
    </>
  );
};

export default UserScreen;
