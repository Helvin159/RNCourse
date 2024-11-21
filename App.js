import { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import ListItem from './components/ListItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (expectedText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      expectedText
    ]);
  };

  const deleteGoalHandler = (id) => {
    console.log('delete')
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(data) => <ListItem  deleteGoalHandler={deleteGoalHandler} text={data.item} index={data.index} />}
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
  },
});
