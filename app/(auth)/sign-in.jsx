import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { images } from "../../constants";
import FormField from "../components/FormField";
import CustomButton from "../components/CustomButton";
import { Link, router } from "expo-router";
import { signIn } from "../../lib/appwrite";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const onSubmit = async () => {
    if (form.username === "" || form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    try {
      await signIn(form.email, form.password);
      router.replace("/home");
    } catch (error) {
      Alert.alert("error", error.message);
    }
  };
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex-1 justify-center px-4 my-6 w-full h-full">
          <Image source={images.logo} className="w-[115px] h-[35px]" resizeMode="contain" />
          <Text className="text-white text-2xl font-psemibold mt-7">Sign In to Aora</Text>
          <FormField title="Email" value={form.email} handleChangeText={(e) => setForm({ ...form, email: e })} placeholder="Enter your email" keyboardType="email-address" otherStyles={"mt-7"} />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            placeholder="Enter your password"
            keyboardType="password"
            otherStyles={"mt-7"}
          />
          <CustomButton title={"Sign In"} handlePress={onSubmit} contentContainerStyles={"mt-7 w-full"} />
          <View className="mt-4 flex-row items-center justify-center">
            <Text className="text-lg font-pregular text-gray-100">Don't have an account?</Text>
            <Link href={"/sign-up"} className="text-secondary-100 text-lg font-semibold ml-2">
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
