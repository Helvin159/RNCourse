import { createContext, useEffect, useState } from 'react';
import { getData, removeGoal, storeData } from '../utils/utils';

export const AppContext = createContext({
  STORAGE_KEY: '',
  courseGoals: [],
  modalIsVisible: false,
  setCourseGoals: () => null,
  addGoalHandler: () => null,
  deleteGoalHandler: () => null,
  startAddGoalHandler: () => null,
  closeAddGoalHandler: () => null
});

export const AppProvider = ({ children }) => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const STORAGE_KEY = 'goal-manager-hr';

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

  const value = {
    STORAGE_KEY,
    courseGoals,
    modalIsVisible,
    setCourseGoals,
    setModalIsVisible,
    addGoalHandler,
    deleteGoalHandler,
    startAddGoalHandler,
    closeAddGoalHandler
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
