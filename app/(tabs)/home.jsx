import { Alert, FlatList, Image, RefreshControl, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { images } from "@/constants";
import SearchInput from "../components/SearchInput";
import EmptyState from "../components/EmptyState";
import useAppwrite from "../../lib/useAppwrite";
import { getAllPosts, getLatestPosts } from "@/lib/appwrite";
import Trending from "../components/Trending";
import VideoCard from "../components/VideoCard";

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    //handle refresh when have data
    await refresh();
    setRefreshing(false);
  };

  const { data: posts, refresh } = useAppwrite(getAllPosts);
  const { data: latestPosts } = useAppwrite(getLatestPosts);
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        // data={[]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="px-4 my-6">
            <View className="flex-row items-center justify-between gap-2">
              <View className="flex-col items-center justify-center gap-2">
                <Text className="font-pmedium text-sm text-[#CDCDE0]">Wellcome Back</Text>
                <Text className="font-semibold text-2xl text-white">VienNguyen</Text>
              </View>
              <Image source={images.logoSmall} className="w-[30px] h-[35px]" resizeMode="contain" />
            </View>
            <SearchInput keyboardType={"text"} />
            {/* Top trending */}
            <View>
              <Text className="text-[#CDCDE0] text-sm font-pregular mt-5 mb-8">Trending Videos</Text>
              <Trending posts={latestPosts ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={<EmptyState title="No videos found" subtitle="No video found for this profile" />}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
