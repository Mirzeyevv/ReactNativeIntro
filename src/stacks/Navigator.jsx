import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabStack from './TabStack.jsx';
import AuthStack from './AuthStack.jsx';


const Stack = createNativeStackNavigator();

const Navigator = () => {
  const isAuthenticated = true;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stack.Screen name='Index' component={TabStack} />
        ) : (
          <Stack.Screen name='Auth' component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
