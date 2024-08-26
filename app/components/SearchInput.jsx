import { Image, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { icons } from "../../constants";

const SearchInput = () => {
  return (
    <View className="mt-10 rounded-xl w-full border-2 border-black-200 focus:border-secondary-100 space-x-4 h-[60px] bg-black-100 flex-row px-4 items-center">
      <TextInput placeholderTextColor={"#CDCDE0"} placeholder="Search a video topic" className="text-white flex-1  text-base" keyboardType="" />
      <Image source={icons.search} className="w-6 h-6" resizeMode="contain" />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({});
