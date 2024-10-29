import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

const AppGradient = ({
  children,
  colors,
}: {
  children: React.ReactNode;
  colors: string[];
}) => {
  return (
    <LinearGradient colors={colors} style={{ flex: 1 }}>
      <SafeAreaView style={[styles.container]} className="mx-5 my-12">
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20, // Approximate conversion of TailwindCSS px-5
    paddingVertical: 12, // Approximate conversion of TailwindCSS py-3
  },
});

export default AppGradient;
