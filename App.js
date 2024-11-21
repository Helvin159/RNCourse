import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ListItem from './components/ListItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
  }

  const addGoalHandler = (expectedText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: expectedText, id: generateUniqueId() }
    ]);
  };

  const deleteGoalHandler = (id) => {
    const newArr = courseGoals.filter((i) => i.id !== id);

    setCourseGoals(newArr);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoalHandler={addGoalHandler} />
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
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 16,
    paddingRight: 16
  },
  goalContainer: {
    flex: 9
  }
});
