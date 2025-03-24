import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Ionicons from '@expo/vector-icons/Ionicons';

// import screens
import Feed from '../screens/Tab/feed';
import Notifications from '../screens/Tab/Notifications';
import Setting from '../screens/Tab/Setting';
import Detalles from '../screens/Stack/Detalles';
import Perfil from '../screens/Drawer/Perfil';

// create Material TopTab Navigator
const TopTab = createMaterialTopTabNavigator();

function TopTabGroup() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Feedtop" component={Feed} />
      <TopTab.Screen name="Notificationstop" component={Notifications} />
      <TopTab.Screen name="Settingstop" component={Setting} />
    </TopTab.Navigator>
  );
}

// craete drawer navigator
const Drawer = createDrawerNavigator();

function DrawerGroup() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackGroup" component={StackGroup} options={{
        headerShown: false
      }} />
      <Drawer.Screen name="Perfil" component={Perfil} />
    </Drawer.Navigator>
  );
}


// craete stack navigator
const Stack = createNativeStackNavigator();

function StackGroup() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabGroup" component={TabGroup} options={{
        headerShown: false
        }} />
      <Stack.Screen name="Detalles" component={Detalles} options={{
        headerTitle: '👀 ',
        presentation: 'modal'
      }} />
    </Stack.Navigator>
  );
}

// create tab navigator
const Tab = createBottomTabNavigator();

function TabGroup() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarShowLabel: false,
      tabBarIcon: ({color, focused, size}) => {
        let iconName;
        if (route.name === 'Feed') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Notifications') {
          iconName = focused ? 'notifications' : 'notifications-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'settings' : 'settings-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      }
    })}>
      <Tab.Screen name="Feed" component={TopTabGroup} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Settings" component={Setting} />
    </Tab.Navigator>
  );
}



export default function Navegation() {
  return (
    <NavigationContainer>
      <DrawerGroup />
    </NavigationContainer>
  )
}