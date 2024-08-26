import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { icons } from "../../constants";
import { ResizeMode, Video } from "expo-av";

const VideoCard = ({
  video: {
    title,
    thumbnail,
    video,
    creator: { username, avatar },
  },
}) => {
  const [play, setPlay] = useState(false);
  return (
    <View className="px-4 my-6">
      <View className="flex-col items-start justify-center">
        <View className="flex-row justify-between gap-2 items-center">
          <Image source={{ uri: avatar }} className="w-[46px] h-[46px] border-secondary-100 rounded-xl" resizeMode="cover" />
          <View className="flex-col items-start justify-center gap-2 flex-1">
            <Text className="text-white font-psemibold text-sm" numberOfLines={1}>
              {title}
            </Text>
            <Text className="text-[#CDCDE0] font-pregular text-xs">{username}</Text>
          </View>
          <TouchableOpacity onPress={() => {}}>
            <Image source={icons.menu} className="w-6 h-6" resizeMode="contain" />
          </TouchableOpacity>
        </View>

        {play ? (
          <>
            <Video
              source={{ uri: video }}
              className="w-full h-60 mt-3 rounded-xl"
              shouldPlay
              resizeMode={ResizeMode.COVER}
              useNativeControls
              onPlaybackStatusUpdate={(status) => {
                if (status.didJustFinish) setPlay(false);
              }}
            />
          </>
        ) : (
          <TouchableOpacity activeOpacity={0.7} onPress={() => setPlay(true)} className="relative mt-7 items-center justify-center w-full">
            <Image source={{ uri: thumbnail }} className="rounded-xl w-full h-60" resizeMode="cover" />
            <Image source={icons.play} className=" absolute w-12 h-12" resizeMode="contain" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default VideoCard;

const styles = StyleSheet.create({});
