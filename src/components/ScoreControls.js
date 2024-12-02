import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ScoreControls = ({ team, score, onIncrement, onDecrement }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.teamName}>Team {team}</Text>
      <Text style={styles.score}>{score}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.incrementButton]}
          onPress={() => onIncrement(team)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.decrementButton]}
          onPress={() => onDecrement(team)}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    marginHorizontal: 10,
  },
  teamName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 10,
  },
  score: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFE66D",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: 50,
  },
  incrementButton: {
    backgroundColor: "#4ECDC4",
  },
  decrementButton: {
    backgroundColor: "#FF6B6B",
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default ScoreControls;
