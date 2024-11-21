import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (value) => {
    setEnteredGoal(value);
  };

  const addGoalHandler = () => {
    props.addGoalHandler(enteredGoal)
    setTimeout(() => setEnteredGoal(''), 35)
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder='Your course goal!'
        value={enteredGoal}
        onChangeText={goalInputHandler}
      />
      <Button title='Add Goal' color={'#000'} onPress={addGoalHandler} />
    </View>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
});
