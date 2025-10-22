import { View, Text, TouchableOpacity } from 'react-native';
import { useMMKVBoolean } from 'react-native-mmkv';
import StyledView from '../components/StyledView.jsx';
import DarkModeToggle from '../components/DarkModeToggle.jsx';

const Profile = () => {
  const [isAuthenticated, setIsAuthenticated] = useMMKVBoolean('isAuthenticated');

  return (
    <StyledView>
      <View className='flex-1 justify-center items-center'>
        <DarkModeToggle/>
        <TouchableOpacity
          onPress={() => {
            setIsAuthenticated(false);
          }}
          className='bg-blue-600 w-[350px] px-5 py-3 mt-5 rounded-md'>
          <Text className='text-white text-xl font-medium text-center'>Log out</Text>
        </TouchableOpacity>
      </View>
    </StyledView>
  );
};

export default Profile;
