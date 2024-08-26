import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";
import { images } from "@/constants";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="flex-col justify-center items-center">
      <Image source={images.empty} className="w-[270px] h-[216px]" resizeMode="contain" />
      <Text className="font-semibold text-2xl text-white capitalize"> {title}</Text>
      <Text className="font-pmedium text-sm text-[#CDCDE0] capitalize mt-2">{subtitle}</Text>
      <CustomButton title={"Create a Video"} contentContainerStyles={"w-full mt-10"} handlePress={() => router.push("/create")} />
    </View>
  );
};

export default EmptyState;

const styles = StyleSheet.create({});
