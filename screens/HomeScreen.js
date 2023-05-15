import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
/* import Ionicons from "react-native-vector-icons/Ionicons"; */

const HomeScreen = () => {
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
        <View className="flex-row mx-1 justify-between items-center p-3 bg-[#080808] border-b border-[#c4c4c4]">
          <TouchableOpacity
            onPress={() => navigation.navigate("Menu")}
            className="mx-0"
          >
            {/* <AntDesign name="leftcircle" size={40} color="black" /> */}
            {/* <Feather name="menu" size={30} color="#FF844F" /> */}
            {/* <ion-icon name="menu-outline"></ion-icon> */}
            {/* <Ionicons name="menu-outline" size={30} color="#FF844F" /> */}
            <Ionicons name="menu-outline" size={30} color="#4FFFB5" />
          </TouchableOpacity>

          <Text
            style={{
              fontFamily: "Nunito-SemiBold",
              fontSize: 20,
            }}
            className="text-[#e4e4e4f3] text-center items-center"
          >
            React Native App
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            className="mx-0"
          >
            {/* <AntDesign name="leftcircle" size={40} color="black" /> */}
            {/* <FontAwesome name="user-circle-o" size={24} color="#FF844F" /> */}
            {/* <ion-icon name="person-circle-outline"></ion-icon> */}
            <Ionicons name="person-outline" size={24} color="#4FFFB5" />
          </TouchableOpacity>
        </View>

        <ScrollView className="pt-2 mb-20 bg-[#dcdfdd]">
          <View className="rounded-lg p-6 bg-[#c8cac8] items-center align-middle mb-2 mx-3">
            <View className="p-6 bg-[#252525] rounded-full border-2 border-gray-300">
              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                className="mx-0"
              >
                <Ionicons
                  name="logo-react"
                  size={80}
                  color="#61dafb"
                  className="bg-white"
                />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontFamily: "Nunito-ExtraBold",
                fontSize: 24,
              }}
              className="text-[#000000f3] text-center items-center pt-4"
            >
              React Native
            </Text>
          </View>

          <View className="rounded-lg p-6 bg-[#c8cac8] items-center align-middle mb-2 mx-3">
            <View className="p-6 bg-[#252525] rounded-full border-2 border-gray-300">
              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                className="mx-0"
              >
                <Ionicons name="logo-javascript" size={80} color="#f0db4f" />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontFamily: "Nunito-ExtraBold",
                fontSize: 24,
              }}
              className="text-[#000000f3] text-center items-center pt-4"
            >
              JavaScript
            </Text>
          </View>

          <View className="rounded-lg p-6 bg-[#c8cac8] items-center align-middle mb-2 mx-3">
            <View className="p-6 bg-[#252525] rounded-full border-2 border-gray-300">
              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                className="mx-0"
              >
                <Ionicons name="logo-nodejs" size={80} color="#669f64" />
              </TouchableOpacity>
            </View>

            <Text
              style={{
                fontFamily: "Nunito-ExtraBold",
                fontSize: 24,
              }}
              className="text-[#000000f3] text-center items-center pt-4"
            >
              Node JS
            </Text>
          </View>

          <View className="rounded-lg p-6 bg-[#c8cac8] items-center align-middle mb-2 mx-3">
            <View className="p-6 bg-[#252525] rounded-full border-2 border-gray-300">
              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                className="mx-0"
              >
                <Ionicons name="logo-npm" size={80} color="#d32e2d" />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontFamily: "Nunito-ExtraBold",
                fontSize: 24,
              }}
              className="text-[#000000f3] text-center items-center pt-4"
            >
              NPM
            </Text>
          </View>

          <View className="rounded-lg p-6 bg-[#c8cac8] items-center align-middle mb-2 mx-3">
            <View className="p-6 bg-[#252525] rounded-full border-2 border-gray-300">
              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                className="mx-0"
              >
                <Ionicons name="logo-ionic" size={80} color="#3880ff" />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontFamily: "Nunito-ExtraBold",
                fontSize: 24,
              }}
              className="text-[#000000f3] text-center items-center pt-4"
            >
              Ionic Icons
            </Text>
          </View>

          <View className="rounded-lg p-6 bg-[#c8cac8] items-center align-middle mb-2 mx-3">
            <View className="p-6 bg-[#252525] rounded-full border-2 border-gray-300">
              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                className="mx-0"
              >
                <Ionicons name="logo-apple" size={80} color="#ffffff" />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontFamily: "Nunito-ExtraBold",
                fontSize: 24,
              }}
              className="text-[#000000f3] text-center items-center pt-4"
            >
              Apple
            </Text>
          </View>

          <View className="rounded-lg p-6 bg-[#c8cac8] items-center align-middle mb-2 mx-3">
            <View className="p-6 bg-[#252525] rounded-full border-2 border-gray-300">
              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                className="mx-0"
              >
                <Ionicons
                  name="logo-android"
                  size={80}
                  color="#32de84"
                  className="bg-white"
                />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontFamily: "Nunito-ExtraBold",
                fontSize: 24,
              }}
              className="text-[#000000f3] text-center items-center pt-4"
            >
              Android
            </Text>
          </View>

          <View className="rounded-lg p-6 bg-[#c8cac8] items-center align-middle mb-4 mx-3">
            <View className="p-6 bg-[#252525] rounded-full border-2 border-gray-300">
              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                className="mx-0 items-center align-middle"
              >
                <Ionicons name="logo-github" size={80} color="#ffffff" />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontFamily: "Nunito-ExtraBold",
                fontSize: 24,
              }}
              className="text-[#000000f3] text-center items-center pt-4"
            >
              Github
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
