import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);


  const addGoalHandler = goalDescription => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalDescription}]);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  return (
    <View style={styles.container}>
    <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id} 
        data={courseGoals} 
        renderItem={itemData => 
          <GoalItem onDelete={() => removeGoalHandler(itemData.item.id)} description={itemData.item.value} />} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
});
