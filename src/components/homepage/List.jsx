import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StyledText from '../StyledText.jsx';

const List = ({ data, title }) => {
  const navigation = useNavigation();

  return (
    <>
      <StyledText value={title} className='text-2xl font-semibold ml-4 mb-2 mt-5'/>
      <FlatList
        ListHeaderComponent={() => <Text className='text-2xl font-bold ml-4'></Text>}
        ListFooterComponent={() => (
          <View className='p-4 items-center'>
            <Text>Loading ... </Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <View>
            <StyledText value={"No products found"} className='text-center mt-5'/>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerClassName='gap-4 px-4'
        className='mt-4'
        horizontal
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('DetailsScreen', { itemId : item.id });
            }}
            className='mr-4 w-[200px] border border-gray-300 rounded-[10px] mb-4'>
            <Image source={{ uri: item.image }} className='w-full h-[150px] rounded-t-[10px]' resizeMode='cover' />

            <View className='p-2'>
              <StyledText value={item.title} className='text-base font-semibold'/>
              <StyledText value={item.price} className='text-sm font-normal my-2'/>
            </View>
          </TouchableOpacity>
        )}
      />
    </>
  );
};

export default List;
