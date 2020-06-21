import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [addMode, setAddMode] = useState(false);

  const addGoalHandler = goalDescription => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalDescription}]);
    setAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  const cancelGoalAdditionHandler = () => {
    setAddMode(false);
  }

  return (
    <View style={styles.container}>
    <Button title="Add new To-do" onPress={() => setAddMode(true)} />
    <GoalInput onCancel={cancelGoalAdditionHandler} visible={addMode} onAddGoal={addGoalHandler} />
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
