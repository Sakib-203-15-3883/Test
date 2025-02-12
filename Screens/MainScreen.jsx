// MainScreen.js
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext";

import MessageIcon from '../Assets/icons/messageIcon.svg';

const MainScreen = () => {
  const theme = useTheme(); // Get theme colors

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.textPrimary }]}>Welcome to My App</Text>
      <Button title="Go" color={theme.primary} onPress={() => {}} />
      <View>
      {/* Render the SVG component */}
      <MessageIcon width={50} height={50} />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold" },
});

export default MainScreen;
