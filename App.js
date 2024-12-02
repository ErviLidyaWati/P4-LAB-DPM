import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity } from "react-native";
import MatchInfo from "./src/components/MatchInfo";
import ScoreControls from "./src/components/ScoreControls";

export default function App() {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  // Handler untuk menambah skor
  const handleIncrement = (team) => {
    if (team === "A") {
      const newScore = teamAScore + 1;
      setTeamAScore(newScore);
      if (newScore === 10) Alert.alert("Congratulations!", "Team A Wins!");
    } else {
      const newScore = teamBScore + 1;
      setTeamBScore(newScore);
      if (newScore === 10) Alert.alert("Congratulations!", "Team B Wins!");
    }
  };

  // Handler untuk mengurangi skor
  const handleDecrement = (team) => {
    if (team === "A" && teamAScore > 0) {
      setTeamAScore(teamAScore - 1);
    } else if (team === "B" && teamBScore > 0) {
      setTeamBScore(teamBScore - 1);
    }
  };

  // Reset skor kedua tim
  const resetScores = () => {
    setTeamAScore(0);
    setTeamBScore(0);
  };

  return (
    <View style={styles.container}>
      <MatchInfo teamA="Team A" teamB="Team B" />
      <View style={styles.scoreContainer}>
        <ScoreControls
          team="A"
          score={teamAScore}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
        <ScoreControls
          team="B"
          score={teamBScore}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </View>
      <TouchableOpacity style={styles.resetButton} onPress={resetScores}>
        <Text style={styles.resetText}>Reset Match</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1A535C",
    padding: 20,
  },
  scoreContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    width: "100%",
  },
  resetButton: {
    backgroundColor: "#FF6B6B",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  resetText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
