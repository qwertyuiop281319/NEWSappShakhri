import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsListScreen from './screens/NewsListScreen';
import NewsDetailScreen from './screens/NewsDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="NewsList" 
          component={NewsListScreen} 
          options={{ title: 'Новости' }}
        />
        <Stack.Screen 
          name="NewsDetail" 
          component={NewsDetailScreen} 
          options={{ title: 'Детали' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
