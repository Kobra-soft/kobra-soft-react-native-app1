import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TouchableHighlight,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const MenuScreen = () => {
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
      <SafeAreaView className="h-full bg-[#080808] w-full">
        <View className="flex-row justify-between items-center p-3 bg-[#080808]">
          <TouchableOpacity
            onPress={navigation.goBack}
            className="mx-1"
            TouchHighlight="#000000"
          >
            {/* <AntDesign name="leftcircle" size={40} color="black" /> */}
            {/* <Feather name="menu" size={30} color="#FF844F" /> */}
            {/* <Ionicons name="ios-arrow-back-sharp" size={24} color="#FF844F" /> */}
            <Ionicons name="chevron-back-outline" size={30} color="#4FFFB5" />
            {/* <ion-icon name="chevron-back-outline"></ion-icon> */}
          </TouchableOpacity>

          <Text
            style={{
              fontFamily: "Nunito-SemiBold",
              fontSize: 16,
            }}
            className="text-[#e4e4e4f3] text-center items-center mx-2"
          >
            {/* Kobra-soft */}
            MENU
          </Text>
        </View>

        <TouchableHighlight
          activeOpacity={0.8}
          underlayColor="#000000"
          /* onPress={() => alert("Pressed!")} */
          onPress={() => navigation.navigate("Login")}
        >
          <View className="flex-row items-center space-x-4 pl-5 pt-3 pb-3 bg-[#ededed] border-b border-[#080808]">
            <View className="flex-row pb-0.5 items-center ml-0 space-x-8 pt-0.5">
              {/* <MaterialCommunityIcons
                name="account-details"
                size={24}
                color="#2f3334"
              /> */}
              {/* <Ionicons name="chevron-back-outline" size={24} color="#FF844F" /> */}
              <Ionicons name="person-outline" size={24} color="#2f3334" />
              <View className="">
                <Text
                  style={{
                    fontFamily: "Montserrat-Medium",
                    fontSize: 16.666,
                  }}
                  className=" text-[#1b1b1b]"
                >
                  Account
                </Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          activeOpacity={0.8}
          underlayColor="#000000"
          /* onPress={() => alert("Pressed!")} */
          onPress={() => navigation.navigate("Settings")}
        >
          <View className="flex-row items-center space-x-4 pl-5 pt-3 pb-3 bg-[#ededed] border-b border-[#080808]">
            <View className="flex-row pb-0.5 items-center ml-0 space-x-8 pt-0.5">
              {/* <Feather name="settings" size={24} color="#2f3334" /> */}
              <Ionicons name="settings-outline" size={24} color="#2f3334" />
              {/* <Ionicons name="information-circle-outline" size={24} color="#2f3334" /> */}
              <View className="">
                <Text
                  style={{
                    fontFamily: "Montserrat-Medium",
                    fontSize: 16.666,
                  }}
                  className=" text-[#1b1b1b]"
                >
                  Settings
                </Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          activeOpacity={0.8}
          underlayColor="#000000"
          /* onPress={() => alert("Pressed!")} */
          onPress={() => navigation}
        >
          <View className="flex-row items-center space-x-4 pl-5 pt-3 pb-3 bg-[#ededed] border-b border-[#080808]">
            <View className="flex-row pb-0.5 items-center ml-0 space-x-8 pt-0.5">
              {/* <Octicons name="info" size={24} color="#2f3334" /> */}
              <Ionicons
                name="information-circle-outline"
                size={24}
                color="#2f3334"
              />
              <View className="">
                <Text
                  style={{
                    fontFamily: "Montserrat-Medium",
                    fontSize: 16.666,
                  }}
                  className=" text-[#1b1b1b]"
                >
                  Info
                </Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          activeOpacity={0.8}
          underlayColor="#000000"
          /* onPress={() => alert("Pressed!")} */
          onPress={() => navigation}
        >
          <View className="flex-row items-center space-x-4 pl-5 pt-3 pb-3 bg-[#ededed] border-b border-[#080808]">
            <View className="flex-row pb-0.5 items-center ml-0 space-x-8 pt-0.5">
              {/* <Ionicons name="search" size={24} color="#2f3334" /> */}
              <Ionicons name="search-outline" size={24} color="#2f3334" />
              <View className="">
                <Text
                  style={{
                    fontFamily: "Montserrat-Medium",
                    fontSize: 16.666,
                  }}
                  className=" text-[#1b1b1b]"
                >
                  Search
                </Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          activeOpacity={0.8}
          underlayColor="#000000"
          /* onPress={() => alert("Pressed!")} */
          onPress={() => navigation}
        >
          <View className="flex-row items-center space-x-4 pl-5 pt-3 pb-3 bg-[#ededed] border-b border-[#080808]">
            <View className="flex-row pb-0.5 items-center ml-0 space-x-8 pt-0.5">
              {/* <Ionicons name="ios-notifications" size={24} color="#2f3334" /> */}
              <Ionicons
                name="notifications-outline"
                size={24}
                color="#2f3334"
              />
              <View className="">
                <Text
                  style={{
                    fontFamily: "Montserrat-Medium",
                    fontSize: 16.666,
                  }}
                  className=" text-[#1b1b1b]"
                >
                  Notifications
                </Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          activeOpacity={0.8}
          underlayColor="#000000"
          /* onPress={() => alert("Pressed!")} */
          onPress={() => navigation}
        >
          <View className="flex-row items-center space-x-4 pl-5 pt-3 pb-3 bg-[#ededed] border-b border-[#080808]">
            <View className="flex-row pb-0.5 items-center ml-0 space-x-8 pt-0.5">
              {/* <Feather name="mail" size={24} color="#2f3334" /> */}
              <Ionicons name="mail-outline" size={24} color="#2f3334" />
              <View className="">
                <Text
                  style={{
                    fontFamily: "Montserrat-Medium",
                    fontSize: 16.666,
                  }}
                  className=" text-[#1b1b1b]"
                >
                  Contact
                </Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          activeOpacity={0.8}
          underlayColor="#000000"
          /* onPress={() => alert("Pressed!")} */
          onPress={() => navigation}
        >
          <View className="flex-row items-center space-x-4 pl-5 pt-3 pb-3 bg-[#ededed] border-b border-[#080808]">
            <View className="flex-row pb-0.5 items-center ml-0 space-x-8 pt-0.5">
              {/* <Feather name="star" size={24} color="#2f3334" /> */}
              <Ionicons name="star-outline" size={24} color="#2f3334" />
              <View className="">
                <Text
                  style={{
                    fontFamily: "Montserrat-Medium",
                    fontSize: 16.666,
                  }}
                  className=" text-[#1b1b1b]"
                >
                  Rate Us
                </Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          activeOpacity={0.8}
          underlayColor="#000000"
          /* onPress={() => alert("Pressed!")} */
          onPress={() => navigation}
        >
          <View className="flex-row items-center space-x-4 pl-5 pt-3 pb-3 bg-[#ededed] border-b border-[#080808]">
            <View className="flex-row pb-0.5 items-center ml-0 space-x-8 pt-0.5">
              {/* <FontAwesome5 name="question-circle" size={24} color="#2f3334" /> */}
              <Ionicons name="help-circle-outline" size={24} color="#2f3334" />
              <View className="">
                <Text
                  style={{
                    fontFamily: "Montserrat-Medium",
                    fontSize: 16.666,
                  }}
                  className=" text-[#1b1b1b]"
                >
                  FAQ
                </Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          activeOpacity={0.8}
          underlayColor="#000000"
          onPress={() =>
            alert(
              "You have Signed out! \n\nSign in (to access full app features!)"
            )
          }
        >
          <View className="flex-row items-center space-x-4 pl-5 pt-3 pb-3 bg-[#ededed] border-b border-[#080808]">
            <View className="flex-row pb-0.5 items-center ml-0 space-x-8 pt-0.5">
              {/* <FontAwesome5 name="question-circle" size={24} color="#2f3334" /> */}
              <Ionicons name="log-out-outline" size={24} color="#2f3334" />
              <View className="">
                <Text
                  style={{
                    fontFamily: "Montserrat-Medium",
                    fontSize: 16.666,
                  }}
                  className=" text-[#1b1b1b]"
                >
                  Log Out
                </Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>

        <View className="absolute bottom-0 pl-2 pr-2 pt-3 pb-4 w-full z-50">
          <TouchableOpacity
            onPress={() => navigation.navigate("Tab")}
            className="mx-1.5 rounded-md flex-row items-center justify-center space-x-1"
          >
            <Text
              className="text-black"
              style={{
                fontFamily: "Nunito-SemiBold",
                fontSize: 15.666,
              }}
            >
              App version - 1.0.1
            </Text>
          </TouchableOpacity>
        </View>

        <View className="h-full bg-[#dcdfdd]"></View>
      </SafeAreaView>
    </>
  );
};

export default MenuScreen;
