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
import LoginButton from "../components/LoginButton";
import Facebook from "../assets/facebook.svg";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const LoginScreen = () => {
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
            LOGIN
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
              Login
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
              Use your account credentials to login into the app.
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
            placeholder="Email"
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
            placeholder="Password"
            placeholderTextColor={"#000000"}
          ></TextInput>

          {/* <Button
            title="fjfjfj"
            color="#4FFFB5"
            className="mt-6 mx-6 px-4 rounded-md"
          ></Button> */}

          <View className="flex-row text-center items-center mx-8 pb-4 pt-4 justify-end">
            <Text
              onPress={() => navigation.navigate("ForgotPassword")}
              style={{
                fontFamily: "Montserrat-Medium",
                fontSize: 13,
                color: "#000000",
              }}
            >
              Forgot password?
            </Text>
          </View>

          <View className="pt-2">
            <LoginButton />
          </View>

          <View className="flex-row text-center items-center align-middle mx-8 pb-4 pt-4 justify-center">
            <Text
              style={{
                fontFamily: "Montserrat-Medium",
                fontSize: 13.666,
                color: "#000000",
              }}
              className="justify-items-center"
            >
              Don't have an account?{"  "}
            </Text>
            <Text
              onPress={() => navigation.navigate("Signup")}
              className="justify-items-center"
              style={{
                fontFamily: "Montserrat-Bold",
                fontSize: 14.666,
                color: "#FF844F",
              }}
            >
              Sign Up
            </Text>
          </View>

          <View className="flex-row text-center items-center align-middle mx-8 pb-0 pt-5 justify-center">
            <Text
              style={{
                fontFamily: "Montserrat-Medium",
                fontSize: 13.666,
                color: "#000000",
              }}
              className="justify-items-center"
            >
              Or
            </Text>
          </View>

          <View className="flex-row text-center items-center align-middle mx-8 pb-0 pt-8 justify-center">
            <Text
              style={{
                fontFamily: "Montserrat-Bold",
                fontSize: 18,
                color: "#000000",
              }}
              className="justify-items-center"
            >
              Login with social media
            </Text>
          </View>

          <View className="flex-row text-center items-center align-middle mx-8 pb-0 pt-5 space-x-4 justify-center">
            <View className="bg-[#ce5542] py-2 px-2 rounded-md">
              <TouchableOpacity>
                <Ionicons name="logo-google" size={32} color="#ffffff" />
              </TouchableOpacity>
            </View>
            <View className="bg-[#405992] py-2 px-4 rounded-md">
              <TouchableOpacity>
                {/* <Ionicons name="logo-facebook" size={32} color="#ffffff" /> */}
                {/* <Facebook size={24} fill="#00cebd"></Facebook> */}
                {/* <AntDesign name="leftcircle" size={40} color="black" /> */}
                <FontAwesome name="facebook-f" size={34} color="white" />
              </TouchableOpacity>
            </View>
            <View className="bg-[#03d0fd] items-center align-middle py-2 px-2 rounded-md">
              <TouchableOpacity className="items-center">
                <Ionicons name="logo-twitter" size={32} color="#ffffff" />
              </TouchableOpacity>
            </View>
            <View className="bg-[#000000] py-2 px-2 rounded-md">
              <TouchableOpacity>
                <Ionicons name="logo-instagram" size={32} color="#ffffff" />
              </TouchableOpacity>
            </View>
            <View className="bg-[#016798] py-2 px-2 rounded-md">
              <TouchableOpacity>
                <Ionicons name="logo-linkedin" size={32} color="#ffffff" />
              </TouchableOpacity>
            </View>
          </View>

          {/* <View className="flex-row text-center items-center mx-8 pb-4 pt-11 justify-end">
            <Text
              style={{
                fontFamily: "Montserrat-SemiBold",
                fontSize: 16,
                color: "#000000",
              }}
            >
              Sign up
            </Text>
          </View> */}
        </View>
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;
