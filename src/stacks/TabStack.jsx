import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack.jsx';
import ProfileStack from './ProfileStack.jsx';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  )
}

export default TabStack