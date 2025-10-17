import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';


const Banner = () => {
  const items = [
    {
      id: 1,
      message: 'Free Shipping on orders $50!',
      bgColor: 'bg-blue-500',
    },
    {
      id: 2,
      message: 'New Arrivals are here. Check them out!',
      bgColor: 'bg-red-500',
    },
  ];

  return (
    <FlatList 
      showsHorizontalScrollIndicator={false}
      contentContainerClassName='px-4 gap-4 my-5'
      horizontal
      data={items}
      renderItem={({ item }) => (
        <TouchableOpacity className={`${item.bgColor} w-[76%] rounded-lg h-[200px] justify-center items-center`}>
          <Text className='text-center text-white text-2xl font-medium'>{item.message}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default Banner;
