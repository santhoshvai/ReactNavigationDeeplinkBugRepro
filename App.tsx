import React from 'react';
import 'react-native-gesture-handler';
import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './screens/main';
import DetailScreen from './screens/detail';
import {AppStackParamsList} from './app-navigation-types';
import {createDrawerNavigator} from '@react-navigation/drawer';

const DrawerLinking: LinkingOptions = {
  prefixes: ['mychat://'],
  config: {
    screens: {
      MainStack: {
        screens: {
          initialRouteName: 'Main',
          Main: {
            path: 'main',
          },
          Detail: {
            path: 'detail',
          },
        },
      },
    },
  },
};

const StackLinking: LinkingOptions = {
  prefixes: ['mychat://'],
  config: {
    screens: {
      initialRouteName: 'Main',
      Main: {
        path: 'main',
      },
      Detail: {
        path: 'detail',
      },
    },
  },
};

const AppStack = createStackNavigator<AppStackParamsList>();

function AppStackNavigator(): JSX.Element {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Main" component={MainScreen} />
      <AppStack.Screen name="Detail" component={DetailScreen} />
    </AppStack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer linking={DrawerLinking}>
      <Drawer.Navigator>
        <Drawer.Screen name="MainStack" component={AppStackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
