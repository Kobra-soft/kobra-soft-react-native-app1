import "react-native-gesture-handler";
import { Button, StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as SystemUI from "expo-system-ui";

/* import { Poppins_Regular, Poppins_SemiBold } from "@expo-google-fonts/poppins"; */

/* Screens */
import HomeScreen from "./screens/HomeScreen";
import UserScreen from "./screens/UserScreen";
import MenuScreen from "./screens/MenuScreen";
import SignupScreen from "./screens/SignupScreen";
import LoginScreen from "./screens/LoginScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import SearchScreen from "./screens/SearchScreen";
import GridScreen from "./screens/GridScreen";
import SettingsScreen from "./screens/SettingsScreen";

/* Screen names ((BottomTab Navigator)) */
const home = "Home";
const search = "Search";
const grid = "Grid";
const settings = "Settings";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const DrawerNav = createDrawerNavigator();

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import * as Font from "expo-font";

/* SplashScreen.preventAutoHideAsync(); */

function Tab() {
  return (
    <TailwindProvider>
      <BottomTab.Navigator
        initialRouteName={home}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === home) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === search) {
              iconName = focused ? "search" : "search-outline";
            } else if (rn === grid) {
              iconName = focused ? "grid" : "grid-outline";
            } else if (rn === settings) {
              iconName = focused ? "settings" : "settings-outline";
            }

            return <Ionicons name={iconName} size={26} color={color} />;
          },

          tabBarActiveTintColor: "#4FFFB5",
          tabBarInactiveTintColor: "#75787B",
          tabBarInactiveBackgroundColor: "#080808",
          tabBarActiveBackgroundColor: "#080808",
          tabBarLabelStyle: { fontSize: 14, fontFamily: "Montserrat-Medium" },
          tabBarStyle: {
            paddingBottom: 11,
            paddingTop: 9,
            height: 79,
            backgroundColor: "#080808",
            color: "#000000",
            borderTopWidth: 1,
            borderTopColor: "#c4c4c4",
            position: "absolute",
          },
          tabBarHideOnKeyboard: true,
        })}
      >
        <BottomTab.Screen name="Home" component={HomeScreen} />
        <BottomTab.Screen name="Search" component={SearchScreen} />
        <BottomTab.Screen name="Grid" component={GridScreen} />
        <BottomTab.Screen name="Settings" component={SettingsScreen} />
      </BottomTab.Navigator>
    </TailwindProvider>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Thin": require("./assets/fonts/Inter-Thin.ttf"),
    "Inter-ExtraLight": require("./assets/fonts/Inter-ExtraLight.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),

    "BebasNeue-Regular": require("./assets/fonts/BebasNeue-Regular.ttf"),

    "Poppins-Italic": require("./assets/fonts/Poppins-Italic.ttf"),
    "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
    "Poppins-ExtraLight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),

    "Montserrat-Italic": require("./assets/fonts/Montserrat-Italic.ttf"),
    "Montserrat-Thin": require("./assets/fonts/Montserrat-Thin.ttf"),
    "Montserrat-ExtraLight": require("./assets/fonts/Montserrat-ExtraLight.ttf"),
    "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-ExtraBold": require("./assets/fonts/Montserrat-ExtraBold.ttf"),
    "Montserrat-Black": require("./assets/fonts/Montserrat-Black.ttf"),

    "Lato-Italic": require("./assets/fonts/Lato-Italic.ttf"),
    "Lato-Thin": require("./assets/fonts/Lato-Thin.ttf"),
    "Lato-ThinItalic": require("./assets/fonts/Lato-ThinItalic.ttf"),
    "Lato-Light": require("./assets/fonts/Lato-Light.ttf"),
    "Lato-LightItalic": require("./assets/fonts/Lato-LightItalic.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-BoldItalic": require("./assets/fonts/Lato-BoldItalic.ttf"),
    "Lato-Black": require("./assets/fonts/Lato-Black.ttf"),
    "Lato-BlackItalic": require("./assets/fonts/Lato-BlackItalic.ttf"),

    "OpenSans-Italic": require("./assets/fonts/OpenSans-Italic.ttf"),
    "OpenSans-Light": require("./assets/fonts/OpenSans-Light.ttf"),
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-Medium": require("./assets/fonts/OpenSans-Medium.ttf"),
    "OpenSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-ExtraBold": require("./assets/fonts/OpenSans-ExtraBold.ttf"),

    "Oswald-ExtraLight": require("./assets/fonts/Oswald-ExtraLight.ttf"),
    "Oswald-Light": require("./assets/fonts/Oswald-Light.ttf"),
    "Oswald-Regular": require("./assets/fonts/Oswald-Regular.ttf"),
    "Oswald-Medium": require("./assets/fonts/Oswald-Medium.ttf"),
    "Oswald-SemiBold": require("./assets/fonts/Oswald-SemiBold.ttf"),
    "Oswald-Bold": require("./assets/fonts/Oswald-Bold.ttf"),

    "Raleway-Italic": require("./assets/fonts/Raleway-Italic.ttf"),
    "Raleway-Thin": require("./assets/fonts/Raleway-Thin.ttf"),
    "Raleway-ExtraLight": require("./assets/fonts/Raleway-ExtraLight.ttf"),
    "Raleway-Light": require("./assets/fonts/Raleway-Light.ttf"),
    "Raleway-Regular": require("./assets/fonts/Raleway-Regular.ttf"),
    "Raleway-Medium": require("./assets/fonts/Raleway-Medium.ttf"),
    "Raleway-SemiBold": require("./assets/fonts/Raleway-SemiBold.ttf"),
    "Raleway-Bold": require("./assets/fonts/Raleway-Bold.ttf"),
    "Raleway-ExtraBold": require("./assets/fonts/Raleway-ExtraBold.ttf"),
    "Raleway-Black": require("./assets/fonts/Raleway-Black.ttf"),

    "Nunito-Italic": require("./assets/fonts/Nunito-Italic.ttf"),

    "Nunito-ExtraLight": require("./assets/fonts/Nunito-ExtraLight.ttf"),
    "Nunito-Light": require("./assets/fonts/Nunito-Light.ttf"),
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Medium": require("./assets/fonts/Nunito-Medium.ttf"),
    "Nunito-SemiBold": require("./assets/fonts/Nunito-SemiBold.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "Nunito-ExtraBold": require("./assets/fonts/Nunito-ExtraBold.ttf"),
    "Nunito-Black": require("./assets/fonts/Nunito-Black.ttf"),

    "Gotham-XLightItalic": require("./assets/fonts/Gotham-XLightItalic.otf"),
    "Gotham-XLight": require("./assets/fonts/Gotham-XLight.otf"),
    "Gotham-Thin": require("./assets/fonts/Gotham-Thin.otf"),
    "Gotham-Light": require("./assets/fonts/Gotham-Light.otf"),
    "Gotham-Medium": require("./assets/fonts/Gotham-Medium.otf"),
    "Gotham-Bold": require("./assets/fonts/Gotham-Bold.otf"),
    "Gotham-Black": require("./assets/fonts/Gotham-Black.otf"),
    "Gotham-Ultra": require("./assets/fonts/Gotham-Ultra.otf"),
    "Gotham-Book": require("./assets/fonts/Gotham-Book.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Tab" component={Tab} />
          {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
          <Stack.Screen name="Menu" component={MenuScreen} />
          <Stack.Screen name="User" component={UserScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
          />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252525",
    alignItems: "center",
    justifyContent: "center",
  },
});
