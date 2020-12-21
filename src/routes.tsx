import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/Main';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#8b10ae',
        },
      }}>
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
};

export default Routes;
