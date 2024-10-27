import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import React from "react";
import beachImage from "@/assets/meditation-images/beach.webp";
import { LinearGradient } from "expo-linear-gradient";

const App = () => {
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
          style={{ flex: 1 }}
        >
          <SafeAreaView className="flex-1 px-1 justify-between">
            <View>
              <Text className="text-white text-center font-bold text-4xl">
                Simple Meditation
              </Text>
              <Text className="text-white text-center text-lg">
                A simple meditation app for you
              </Text>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
