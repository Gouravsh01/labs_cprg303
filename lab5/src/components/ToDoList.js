import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ToDoList = ({ tasks }) => {
  return (
    <View style={styles.container}>
      {tasks.map((task, index) => (
        <View style={styles.task} key={index}>
          <Text style={styles.taskText}>{task}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
