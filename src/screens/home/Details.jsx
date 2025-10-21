import { View, Text, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Details = () => {
  const route = useRoute();
  const { item } = route.params;
  return (
    <ScrollView className='flex-1 p-4'>
      <Image source={{ uri: item.image }} className=' w-full h-[250px] rounded-lg bg-zinc-200' resizeMode='contain' />
      <Text className='font-semibold text-2xl mt-3'>{item.title}</Text>
      <View className='flex-row gap-3 mt-2'>
        <Text className='bg-yellow-500 p-3 font-semibold rounded-lg'>{item.price}</Text>
        <Text className='bg-zinc-500 p-3 font-semibold text-white rounded-lg'>{item.category}</Text>
      </View>
    </ScrollView>
  );
};

export default Details;
