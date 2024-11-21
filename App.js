import { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Button, Text } from 'react-native';
import ListItem from './components/ListItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisibal, setModalIsVisible] = useState(false);

  function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
  }

  const addGoalHandler = (expectedText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: expectedText, id: generateUniqueId() }
    ]);

    setTimeout(() => setModalIsVisible(false), 25);
  };

  const deleteGoalHandler = (id) => {
    const newArr = courseGoals.filter((i) => i.id !== id);

    setCourseGoals(newArr);
  };

  const startAddGoalHandler = () => {
    setTimeout(() => setModalIsVisible(true), 25);
  };

  const closeAddGoalHandler = () => {
    setTimeout(() => setModalIsVisible(false), 25);
  };

  return (
    <>
      <StatusBar style={'light'} />
      <View style={styles.appContainer}>
        <View>
          <Text
            style={{
              fontSize: 32,
              color: '#fff',
              alignSelf: 'center',
              marginTop: 24,
              marginBottom: 16
            }}
          >
            Manage Your Goals!
          </Text>
        </View>
        {modalIsVisibal && (
          <GoalInput
            addGoalHandler={addGoalHandler}
            showModal={modalIsVisibal}
            closeAddGoalHandler={closeAddGoalHandler}
          />
        )}
        <View style={styles.goalContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(data) => (
              <ListItem
                deleteGoalHandler={deleteGoalHandler}
                text={data.item.text}
                id={data.item.id}
              />
            )}
            alwaysBounceVertical={false}
          />
        </View>
        <Button
          title='Add New Goal'
          color='#ffffff'
          onPress={startAddGoalHandler}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 32,
    color: '#fff'
  },
  goalContainer: {
    flex: 9
  }
});
