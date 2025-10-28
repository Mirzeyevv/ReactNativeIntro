import './global.css';
import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import Homepage from './src/screens/home/Homepage.jsx';
import Navigator from './src/stacks/Navigator.jsx';
import messaging from '@react-native-firebase/messaging';
import notifee, { AndroidImportance } from '@notifee/react-native';
import { useState, useEffect } from 'react';

function App() {
  const [fcmToken, setFcmToken] = useState<string | null>(null);
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    // 1️⃣ Request permissions
    async function requestPermission() {}

    requestPermission();

    // 3️⃣ Foreground message handler
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('📩 Foreground message received:', remoteMessage);

      // Show local notification
      await notifee.displayNotification({
        title: remoteMessage.notification?.title || 'Foreground Notification',
        body: remoteMessage.notification?.body || 'You have a new message!',
        android: {
          channelId: 'default',
          importance: AndroidImportance.HIGH,
        },
      });
    });

    return unsubscribe;
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

const AppContent = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}>
      <Navigator />
    </View>
  );
};

export default App;
