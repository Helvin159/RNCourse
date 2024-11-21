import React, { useContext } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { AppContext } from '../context/AppContext';

const ListItem = (props) => {
  const { text, id } = props;
  const { deleteGoalHandler } = useContext(AppContext);

  const onDeleteGoalHandler = () => {
    deleteGoalHandler(id);
  };

  return (
    <View style={styles.listItem} key={id}>
      <Pressable
        android_ripple={{ color: '#dddddd' }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={onDeleteGoalHandler.bind(this, id)}
      >
        <Text style={styles.listItemText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listItem: {
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 6,
    backgroundColor: '#530058'
  },
  pressedItem: {
    opacity: 0.5
  },
  listItemText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 500,
    paddingTop: 16,
    paddingBottom: 20,
    paddingLeft: 16
  }
});
