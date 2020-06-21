import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalItem = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    return (
        <View style={styles.addContainer}>
            <TextInput
                style={styles.input}
                placeholder="Course Goal"
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button title="Add" onPress={() => props.onAddGoal(enteredGoal)} />
        </View>
    )
}

const styles = StyleSheet.create({
    addContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    
      },
      input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '80%'
      },
})

export default GoalItem;