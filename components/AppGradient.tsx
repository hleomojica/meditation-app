import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const AppGradient = ({
  children,
  colors,
}: {
  children: React.ReactNode;
  colors: string[];
}) => {
  return (
    <LinearGradient colors={colors} style={{ flex: 1 }}>
      <SafeAreaView className="flex-1 px-5 py-3 justify-between">
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AppGradient;
