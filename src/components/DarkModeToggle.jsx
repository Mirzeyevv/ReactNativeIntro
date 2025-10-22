import { View, Text, TouchableOpacity } from 'react-native';
import { useMMKVBoolean } from 'react-native-mmkv';

const DarkModeToggle = () => {
  const [DarkMode, setDarkMode] = useMMKVBoolean('DarkMode');

  return (
    <TouchableOpacity
      onPress={() => {
        setDarkMode(prevState => !prevState);
      }}
      className='bg-orange-500 w-[50px] rounded-full'>
      <Text className='font-bold text-center'>{DarkMode ? 'Light' : 'Dark'}</Text>
    </TouchableOpacity>
  );
};

export default DarkModeToggle;
