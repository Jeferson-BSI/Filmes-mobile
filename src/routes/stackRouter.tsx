import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { Detail } from '../pages/Datail';

const Stack = createNativeStackNavigator();

export const stackRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerShown: false,
          title: 'Detail',
        }}
      />
    </Stack.Navigator>
  );
};
