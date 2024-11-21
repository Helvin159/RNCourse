import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (STORAGE_KEY, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
  } catch (e) {
    console.error('Error storing data:', e);
  }
};

export const getData = async (STORAGE_KEY) => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Error retrieving data:', e);
    return [];
  }
};

export const removeGoal = async (STORAGE_KEY, id, setCourseGoals) => {
  try {
    const storedGoals = await getData(STORAGE_KEY);
    const updatedGoals = storedGoals.filter((goal) => goal.id !== id);
    await storeData(STORAGE_KEY, updatedGoals);
    setCourseGoals(updatedGoals);
  } catch (e) {
    console.error('Error removing goal:', e);
  }
};

export const startAddGoalHandler = (setModalIsVisible) => {
  setTimeout(() => setModalIsVisible(true), 25);
};

export const generateUniqueId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
};
