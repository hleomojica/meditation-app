import { View, Text, FlatList, Pressable, ImageBackground } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { StatusBar } from "expo-status-bar";
import { MEDITATION_DATA } from "@/constants/MeditationData";
import meditationImages from "@/constants/meditation-images";

export default function NatureMeditate() {
  return (
    <View className="flex-1">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View className="mb-6">
          <Text className="text-gray-200 mb-3 font-bold text-4xl text-left">
            Nature Meditate
          </Text>
          <Text className="text-gray-200 text-lg text-left">
            Start your meditation journey today
          </Text>
        </View>
        <FlatList
          data={MEDITATION_DATA}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => console.log("Pressed")}
              className="h-48 my-3 rounded-md overflow-hidden"
            >
              <ImageBackground
                source={meditationImages[item.id - 1]}
                resizeMode="cover"
                className="flex-1 rounded-lg justify-center"
              >
                <Text className="text-gray-100 text-3xl font-bold text-center">
                  {item.title}
                </Text>
              </ImageBackground>
            </Pressable>
          )}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </AppGradient>
      <StatusBar style="light" />
    </View>
  );
}
