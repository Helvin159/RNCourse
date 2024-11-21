import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native';

const ListItem = (props) => {
  const { text, index } = props;

  const  deleteGoalHandler = () => { props.deleteGoalHandler() }

  return (
    <Pressable onPress={deleteGoalHandler}>
      <View style={styles.listItem} key={index}>
        <Text style={styles.listItemText}>{text}</Text>
      </View>
    </Pressable>
  );
}

export default ListItem


const styles = StyleSheet.create({
  listItem: {
    marginTop: 8,
    marginBottom: 8,
    paddingTop: 16,
    paddingBottom: 20,
    paddingLeft: 16,
    borderRadius: 6,
    backgroundColor: '#530058'
  },
  listItemText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 500
  }
});
