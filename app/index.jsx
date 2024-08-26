import { Redirect, router } from "expo-router";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { images } from "../constants";
import CustomButton from "./components/CustomButton";
import { StatusBar } from "expo-status-bar";
import "react-native-url-polyfill/auto";
import { useGlobalContext } from "../context/GlobalProvider";

export default function App() {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if (isLoggedIn && !isLoading) {
    return <Redirect href={"/home"} />;
  }
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex-1 justify-center items-center px-4 w-full min-h-[85vh]">
          <Image source={images.logo} className="w-[130px] h-[84px]" resizeMode="contain" />
          <Image source={images.cards} className="h-[300px] max-w-[380px] w-full" resizeMode="contain" />
          <View className="relative mt-5">
            <Text className="text-white font-psemibold text-3xl text-center">
              Discover Endless Possibilities with <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image source={images.path} className=" absolute w-[136px] h-[15px] -bottom-2 -right-8" resizeMode="contain" />
          </View>
          <Text className="font-pregular text-sm text-center text-[#CDCDE0] mt-7">Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora</Text>
          <CustomButton
            title="Continue with email"
            contentContainerStyles="mt-7 w-full"
            handlePress={() => {
              router.push("/sign-in");
            }}
          />
        </View>
      </ScrollView>
      <StatusBar style="light" backgroundColor="#161622" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
});
