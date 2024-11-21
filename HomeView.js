import React, { useContext, useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import GoalInput from './components/GoalInput';
import { generateUniqueId, getData, storeData } from './utils/utils';
import ListItem from './components/ListItem';
import { AppContext } from './context/AppContext';

const HomeView = () => {
  const { courseGoals, STORAGE_KEY, setCourseGoals } = useContext(AppContext);
  const [modalIsVisibal, setModalIsVisible] = useState(false);

  const addGoalHandler = (expectedText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: expectedText, id: generateUniqueId() }
    ]);

    storeData(STORAGE_KEY, courseGoals);
    setTimeout(() => {
      setModalIsVisible(false);
    }, 35);
  };

  const deleteGoalHandler = (id) => {
    const newArr = courseGoals.filter((i) => i.id !== id);

    setCourseGoals(newArr);
    removeGoal(STORAGE_KEY, id, setCourseGoals);
  };

  const startAddGoalHandler = () => {
    setTimeout(() => setModalIsVisible(true), 35);
  };

  const closeAddGoalHandler = () => {
    setTimeout(() => setModalIsVisible(false), 35);
  };

  useEffect(() => {
    const fetchData = async () => {
      const storedData = await getData(STORAGE_KEY);
      if (storeData?.length > 0) {
        setCourseGoals(storedData);
      }
    };

    fetchData();
  }, []);

  return (
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
            <ListItem text={data.item.text} id={data.item.id} />
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
  );
};

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

export default HomeView;
