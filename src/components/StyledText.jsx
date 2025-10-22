import { Text } from 'react-native';
import { useMMKVBoolean } from 'react-native-mmkv';

const StyledText = ({ className, value }) => {
  const [DarkMode, setDarkMode] = useMMKVBoolean('DarkMode');

  return <Text className={`${className} ${DarkMode ? "text-white" : "text-black"}`}>{value}</Text>;
};

export default StyledText;
