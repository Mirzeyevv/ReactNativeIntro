import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';

const Categories = () => {
  const categories = [
    { id: 1, title: 'Tech' },
    { id: 2, title: 'Sports' },
    { id: 3, title: 'Food' },
    { id: 4, title: 'Movies' },
    { id: 5, title: 'All' },
    { id: 6, title: 'Fashion' },
  ];

  return (
    <FlatList showsHorizontalScrollIndicator={false}
      contentContainerClassName='gap-2'
      horizontal
      data={categories}
      renderItem={({ item }) => (
        <TouchableOpacity key={item.id} className='p-4 m-2 bg-gray-300 rounded-lg'>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default Categories;
