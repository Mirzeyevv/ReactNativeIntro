import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabStack from './TabStack.jsx';
import AuthStack from './AuthStack.jsx';
import { useMMKVBoolean } from 'react-native-mmkv';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useMMKVBoolean('isAuthenticated');

  const linking = {
    prefixes: ['ReactNativeIntro://'],
    config: {
      screens: {
        Tab: {
          path: 'tab',
          initialRouteName: 'Home',
          screens: {
            Home: {
              path: 'home',
              initialRouteName: 'HomeScreen',
              screens: {
                HomeScreen: {
                  path: 'main',
                },
                DetailsScreen: {
                  path: 'details/:itemId?',
                },
              },
            },
            Profile: {
              path: 'profile',
              initialRouteName: 'ProfileScreen',
              screens: {
                ProfileScreen: {
                  path: 'main',
                },
              },
            },
          },
        },
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? <Stack.Screen name='Tab' component={TabStack} /> : <Stack.Screen name='Auth' component={AuthStack} />}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
