import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { icons, images } from "../../constants";

const FormField = ({ title, value, otherStyles, handleChangeText, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-5 ${otherStyles}`}>
      <Text className="text-base font-pmedium text-[#CDCDE0]">{title}</Text>
      <View className=" border-2 border-black-200 h-16 rounded-xl bg-black-100 focus:border-secondary-200 px-4 items-center w-full flex-row">
        <TextInput
          className="w-full flex-1 text-white text-base font-psemibold"
          value={value}
          onChangeText={handleChangeText}
          placeholder={props.placeholder}
          keyboardType={props.keyboardType}
          placeholderTextColor={"#7B7B8B"}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity
            onPress={() => {
              setShowPassword(!showPassword);
            }}
          >
            <Image source={showPassword ? icons.eye : icons.eyeHide} className="w-6 h-6" resizeMode="contain" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({});
