import { View, Text, TextInput, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { saveTask, getTask, updateTask } from '../api'

const TaskFormScreen = ({ navigation, route }) => {

  const [task, setTask] = useState({
    title: '',
    description: ''
  });

  const [editing, setEditing] = useState(false);

  const handleChange = (name, value) => {
    setTask({
      ...task,
      [name]: value
    })
  };

  const handleSubmit = async () => {
    try { 
      if (!editing) {
        await saveTask(task)
      } else { 
        await updateTask(route.params.id, task)
      }
      navigation.navigate('TasksList')
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    if (route.params && route.params.id) {
      navigation.setOptions({ headerTitle: 'Editar Tarea' })
      setEditing(true);

      ( async () => {
        const task = await getTask(route.params.id)
        setTask({ title: task.title, description: task.description })
      })
    } 
  }, [route.params?.task])


  return (
    <Layout>
      <Text style={styles.title}>Nombre de la tarea</Text>
      <TextInput
        placeholder="Escribe una tarea"
        style={styles.input}
        onChangeText={(text) => handleChange('title', text)}
        value={task.title}
      />
      <Text style={styles.title}>Descripción</Text>
      <TextInput
        placeholder="Escribe una descripción"
        style={styles.input}
        onChangeText={(text) => handleChange('description', text)}
        value={task.description}
      />
      {
        !editing ? (
          <TouchableOpacity
            style={styles.buttonSave}
            disabled={!task.title}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Guardar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.buttonUpdate}
            disabled={!task.title}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Actualizar</Text>
          </TouchableOpacity>
        )
      }
    </Layout>
  )
}

  const styles = StyleSheet.create({
    input:{
      width: '100%',
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#e1e1e1',
      borderRadius: 5,
      height: 50,
      paddingHorizontal: 10,
      marginBottom: 10,
      fontSize: 16,
      color: '#000'
    },
    title:{
      color: '#fff',
      fontSize: 20,
      marginBottom: 10
    },
    buttonSave:{
      padding: 10,
      backgroundColor: '#7f8',
      borderRadius: 5,
      marginBottom: 10,
      width: '100%',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonUpdate:{
      padding: 10,
      backgroundColor: '#e58e26',
      borderRadius: 5,
      marginBottom: 10,
      width: '100%',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText:{
      color: '#000',
    }
  })


export default TaskFormScreen