import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ title, contentContainerStyles, handlePress, textStyles, isLoading }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={isLoading}
      onPress={handlePress}
      className={`${contentContainerStyles} rounded-xl bg-secondary-100 min-h-[62px] items-center justify-center ${isLoading ? "opacity-50" : ""}`}
    >
      <Text className={`font-psemibold text-[#161622] text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
