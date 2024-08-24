import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { images } from "../../constants";
import FormField from "../components/FormField";
import CustomButton from "../components/CustomButton";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onSubmit = async () => {
    if (form.username === "" || form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    try {
      const result = await createUser(form.email, form.password, form.username);
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
          <Text className="text-white text-2xl font-psemibold mt-7">Sign Up to Aora</Text>
          <FormField title="Username" value={form.username} handleChangeText={(e) => setForm({ ...form, username: e })} placeholder="Enter your username" otherStyles={"mt-7"} />
          <FormField title="Email" value={form.email} handleChangeText={(e) => setForm({ ...form, email: e })} placeholder="Enter your email" keyboardType="email-address" otherStyles={"mt-7"} />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            placeholder="Enter your password"
            keyboardType="password"
            otherStyles={"mt-7"}
          />
          <CustomButton title={"Sign Up"} handlePress={onSubmit} contentContainerStyles={"mt-7 w-full"} />
          <View className="mt-4 flex-row items-center justify-center">
            <Text className="text-lg font-pregular text-gray-100">Already have an account?</Text>
            <Link href={"/sign-in"} className="text-secondary-100 text-lg font-semibold ml-2">
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
