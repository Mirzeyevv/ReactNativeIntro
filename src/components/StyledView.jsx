import { View } from 'react-native';
import { useMMKVBoolean } from 'react-native-mmkv';

const StyledView = ({ children }) => {
  const [DarkMode, setDarkMode] = useMMKVBoolean('DarkMode');
  
  return <View className={`flex-1 ${DarkMode ? 'bg-black' : 'bg-white'}`}>{children}</View>;
};

export default StyledView;
