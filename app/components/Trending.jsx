import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import { ResizeMode, Video } from "expo-av";
import { icons } from "@/constants";

const zoomIn = {
  0: {
    scale: 0.9,
  },
  1: {
    scale: 1,
  },
};

const zoomOut = {
  0: {
    scale: 1,
  },
  1: {
    scale: 0.9,
  },
};

const TrendingItem = ({ item, activeItem }) => {
  const [play, setPlay] = useState(false);
  // console.log(item.$id);
  // console.log(activeItem);
  return (
    <Animatable.View className="mr-5" duration={500} animation={activeItem === item.$id ? zoomIn : zoomOut}>
      {play ? (
        <>
          <Video
            source={{ uri: item.video }}
            className="w-52 h-72 rounded-[35px]"
            shouldPlay
            resizeMode={ResizeMode.COVER}
            useNativeControls
            onPlaybackStatusUpdate={(status) => {
              if (status.didJustFinish) setPlay(false);
            }}
          />
        </>
      ) : (
        <TouchableOpacity activeOpacity={0.7} className=" relative items-center justify-center " onPress={() => setPlay(true)}>
          <ImageBackground source={{ uri: item.thumbnail }} className="w-52 h-72 overflow-hidden rounded-[35px] shadow-lg shadow-black/40" resizeMode="cover" />
          <Image source={icons.play} className="w-12 h-12 absolute" />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};
const Trending = ({ posts }) => {
  const [activeItem, setActiveItem] = useState(posts[0]);
  const viewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key);
    }
  };
  // console.log(posts[0]);

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => <TrendingItem item={item} activeItem={activeItem} />}
      horizontal
      contentOffset={{ x: 170 }}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={{
        viewAreaCoveragePercentThreshold: 70,
      }}
    />
  );
};

export default Trending;

const styles = StyleSheet.create({});
