import React, { useState } from 'react';
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View
} from 'react-native';

import animeJpeg from '../assets/Create_a_dark_and_mystical_anime-style_scene_inspi.jpg';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (value) => {
    setEnteredGoal(value);
  };

  const onAddGoalHandler = () => {
    props.addGoalHandler(enteredGoal);
    setTimeout(() => setEnteredGoal(''), 35);
  };

  return (
    <Modal animationType='slide' visible={props.showModal}>
      <View style={styles.inputContainer}>
        <Image
          source={animeJpeg}
          style={{
            width: 100,
            height: 100,
            alignSelf: 'center',
            marginBottom: 8
          }}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal!'
          value={enteredGoal}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title='Add Goal'
              color={'#fff'}
              onPress={onAddGoalHandler}
            />
          </View>
          <View style={styles.cancelButton}>
            <Button
              title='Cancel'
              color={'#990021'}
              onPress={props.closeAddGoalHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: '#000'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 16,
    borderRadius: 8,
    fontSize: 18,
    backgroundColor: '#ffffff'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    padding: 16,
    width: '79%'
  },
  button: {
    width: '40%',
    alignContent: 'center'
  },
  cancelButton: {
    width: '40%',
    alignContent: 'center'
  }
});
