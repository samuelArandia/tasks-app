import { FlatList, RefreshControl } from 'react-native'
import React, {useEffect, useState} from 'react'
import TasksItem from './TasksItem'
import { getTasks, deleteTask } from '../api'
import { useIsFocused } from '@react-navigation/native'

const TasksList = () => {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  
  const isFocused = useIsFocused()

  const loadTasks = async () => {
    const data = await getTasks()
    setTasks(data)
  }

  useEffect(() => {
    loadTasks()
  }, [isFocused])

  const handleDelete = async (id) => {
    await deleteTask(id)
    await loadTasks()
  }

  const onRefresh = React.useCallback( async () => {
    setRefreshing(true);
    await loadTasks()
    setRefreshing(false);
  }, [])

  const renderItem = ({ item }) => (
    <TasksItem task={item} handleDelete={handleDelete} />
  );

  return (
    <FlatList
      style={{ width: '100%' }}
      data={tasks}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={refreshing}
          colors={['#78e08f']}
          progressBackgroundColor={'#fff'}
        />
      }
    /> 
  )
}

export default TasksList;