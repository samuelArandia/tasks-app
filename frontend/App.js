import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TouchableOpacity } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import TaskFormScreen from './screens/TaskFormScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
            options={({navigation}) => ({
              headerStyle: { backgroundColor: '#222f3e'},
              headerTitleStyle: { color: '#fff' },
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('TaskFormScreen')}>
                  <Text style={{ color: '#fff', fontSize: 16, marginRight: 10 }}>New</Text>
                </TouchableOpacity>
              ),
              title: 'Aplicación de Tareas'
            })}
        />
        <Stack.Screen 
          name="TaskFormScreen" 
          component={TaskFormScreen} 
          options={{
            headerStyle: { backgroundColor: '#222f3e'},
            headerTitleStyle: { color: '#fff' },
            title: 'Nueva Tarea',
            headerTintColor: '#fff'
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
