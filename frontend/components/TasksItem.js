import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const TasksItem = ({ task, handleDelete }) => {

  const navigation = useNavigation()

  return (
    <View style={styles.itemContainer}>

      <TouchableOpacity onPress={() => navigation.navigate('TaskFormScreen',{ id: task.id })}>
        <Text style={styles.itemTitle}>{task.title}</Text>
        <Text style={styles.itemTitle}>{task.description}</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={{ backgroundColor: '#74b9ff', padding: 8, borderRadius: 5 }}
        onPress={() => navigation.navigate('TaskFormScreen', { task })}>
        <Text style={{ color: '#fff' }}>Editar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ backgroundColor: '#e74c3c', padding: 8, borderRadius: 5 }}
        onPress={() => handleDelete(task.id)}
      >
        <Text style={{ color: '#fff' }}>Borrar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginVertical: 8,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222f3e',
  }

})

export default TasksItem