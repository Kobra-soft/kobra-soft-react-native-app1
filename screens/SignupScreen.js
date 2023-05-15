import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
  Alert,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { FormProvider } from "react-hook-form";
import SignUpButton from "../components/SignUpButton";

const SignupScreen = () => {
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
            SIGN UP
          </Text>
        </View>

        <View className="h-full w-full pt-10 bg-[#dcdfdd]">
          <View className="text-center items-center p-10">
            <Text
              style={{
                fontFamily: "Montserrat-Bold",
                fontSize: 36,
                color: "#000000",
              }}
            >
              Sign up
            </Text>
          </View>
          <View className="text-center items-center mx-7 bottom-2 pb-4">
            <Text
              style={{
                fontFamily: "Montserrat-Medium",
                fontSize: 13.666,
                color: "#000000",
              }}
            >
              Sign up to experience the full application features.
            </Text>
          </View>
          <TextInput
            name="createUsername"
            style={{
              fontFamily: "Inter-Regular",
              fontSize: 16,
              color: "#000000",
            }}
            className="bg-white mt-0 p-2 mx-8 px-4 rounded-md border border-[#4f4f4f]"
            placeholder="Create Username"
            placeholderTextColor={"#000000"}
          ></TextInput>
          <TextInput
            name="emailAddressSignup"
            style={{
              fontFamily: "Inter-Regular",
              fontSize: 16,
              color: "#000000",
            }}
            className="bg-white p-2 mt-4 mx-8 px-4 rounded-md border border-[#4f4f4f]"
            placeholder="Email Address"
            placeholderTextColor={"#000000"}
          ></TextInput>
          <TextInput
            name="createPassword"
            style={{
              fontFamily: "Inter-Regular",
              fontSize: 16,
              color: "#000000",
            }}
            className="bg-white p-2 mt-4 mx-8 px-4 rounded-md border border-[#4f4f4f]"
            placeholder="Create Password"
            placeholderTextColor={"#000000"}
          ></TextInput>
          <TextInput
            name="confirmPassword"
            style={{
              fontFamily: "Inter-Regular",
              fontSize: 16,
              color: "#000000",
            }}
            className="bg-white p-2 mt-4 mx-8 px-4 rounded-md border border-[#4f4f4f]"
            placeholder="Confirm Password"
            placeholderTextColor={"#000000"}
          ></TextInput>

          {/* <Button
            title="fjfjfj"
            color="#4FFFB5"
            className="mt-6 mx-6 px-4 rounded-md"
          ></Button> */}

          <View className="pt-6">
            <SignUpButton />
          </View>

          <View className="text-center items-center mx-7 pb-4 pt-4">
            <Text
              style={{
                fontFamily: "Montserrat-Medium",
                fontSize: 12,
                color: "#000000",
              }}
            >
              * If you’ve previously used Facebook Login, make sure to use the
              same email address that’s associated with your Facebook account.
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SignupScreen;
