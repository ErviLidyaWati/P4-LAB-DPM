import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MatchInfo = ({ teamA, teamB }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚽ Futsal Match</Text>
      <Text style={styles.team}>🏅 {teamA} vs {teamB} 🏅</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 10,
  },
  team: {
    fontSize: 18,
    color: "#A9D6E5",
  },
});

export default MatchInfo;
