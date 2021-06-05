import Icon from 'react-native-ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import * as React from 'react';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import AddBottomSheet from '../components/AddBottomSheet';
import { 
  BottomTabParamList, 
  HomeScreenParamList, 
  AboutScreenParamList
} from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ 
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 25, 
          left: 20,
          right: 20,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          ...style.shadow,
          paddingBottom: 5
        }
      }}      
      >
      <BottomTab.Screen
        name="Home"
        component={HomeScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Add"
        component={AddScreenComponent}
        options={{
          tabBarButton: () => <AddBottomSheet />,
        }}
      /> 
      <BottomTab.Screen
        name="About"
        component={ReminderScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="alarm" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: React.ComponentProps<typeof Icon>['name']; color: string }) {
  return <Icon size={30} style={{ marginBottom: -3 }} {...props} />;
}

const HomeScreenStack = createStackNavigator<HomeScreenParamList>();
function HomeScreenNavigator() {
  return (
    <HomeScreenStack.Navigator>
      <HomeScreenStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: true }}
      />
    </HomeScreenStack.Navigator>
  );
}

const AboutScreenStack = createStackNavigator<AboutScreenParamList>();
function ReminderScreenNavigator() {
  return (
    <AboutScreenStack.Navigator>
      <AboutScreenStack.Screen
        name="About"
        component={AboutScreen}
        options={{ headerTitle: 'About' }}
      />
    </AboutScreenStack.Navigator>
  );
}

const AddScreenComponent = () => {
  return null;
}

const style = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0, 
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  }
});