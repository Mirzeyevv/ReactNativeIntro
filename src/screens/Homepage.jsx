import { Text, View, TouchableOpacity, ScrollView, FlatList, Sectionlist } from 'react-native';
import { useState } from 'react';
import { Image } from 'react-native/types_generated/index';

const categories = [
  {
    id: 1,
    title: 'Tech',
  },
  {
    id: 2,
    title: 'Sports',
  },
  {
    id: 3,
    title: 'Food',
  },
  {
    id: 4,
    title: 'Movies',
  },
  {
    id: 5,
    title: 'All',
  },
  {
    id: 6,
    title: 'Fashioin',
  },
];

const products = [
  {
    id: 1,
    title: 'Macbook pro',
    category: 'Tech',
    image:
      'https://www.google.com/imgres?q=laptop%20photo%20link&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611186871348-b1ce696e52c9%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.1.0%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxhcHRvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Flaptop-computer&docid=6VnAf3suoYvygM&tbnid=Kj4YuirezLXV7M&vet=12ahUKEwitoPvevpCQAxUuAdsEHfuxNlkQM3oECBgQAA..i&w=3000&h=2000&hcb=2&ved=2ahUKEwitoPvevpCQAxUuAdsEHfuxNlkQM3oECBgQAA',
    price: 1999,
  },
  {
    id: 2,
    title: 'Laptop',
    category: 'Tech',
    image:
      'https://www.google.com/imgres?q=laptop&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F41T%2B8Ur8XYL._SR290%2C290_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com.tr%2Fdizustu-bilgisayarlar%2Fb%3Fie%3DUTF8%26node%3D12601898031&docid=0z-JeB0RZ6wh-M&tbnid=pFPgVam43L4wAM&vet=12ahUKEwiLjZK_vZCQAxUD8LsIHVgbGtcQM3oECBcQAA..i&w=290&h=290&hcb=2&ved=2ahUKEwiLjZK_vZCQAxUD8LsIHVgbGtcQM3oECBcQAA',
    price: 100,
  },
  {
    id: 3,
    title: 'Football',
    category: 'Sports',
    image:
      'https://www.google.com/imgres?q=laptop&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F41T%2B8Ur8XYL._SR290%2C290_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com.tr%2Fdizustu-bilgisayarlar%2Fb%3Fie%3DUTF8%26node%3D12601898031&docid=0z-JeB0RZ6wh-M&tbnid=pFPgVam43L4wAM&vet=12ahUKEwiLjZK_vZCQAxUD8LsIHVgbGtcQM3oECBcQAA..i&w=290&h=290&hcb=2&ved=2ahUKEwiLjZK_vZCQAxUD8LsIHVgbGtcQM3oECBcQAA',
    price: 49,
  },
  {
    id: 4,
    title: 'Pizza',
    category: 'Food',
    image:
      'https://www.google.com/imgres?q=laptop&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F41T%2B8Ur8XYL._SR290%2C290_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com.tr%2Fdizustu-bilgisayarlar%2Fb%3Fie%3DUTF8%26node%3D12601898031&docid=0z-JeB0RZ6wh-M&tbnid=pFPgVam43L4wAM&vet=12ahUKEwiLjZK_vZCQAxUD8LsIHVgbGtcQM3oECBcQAA..i&w=290&h=290&hcb=2&ved=2ahUKEwiLjZK_vZCQAxUD8LsIHVgbGtcQM3oECBcQAA',
    price: 60,
  },
];
const Homepage = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <ScrollView horizontal>
        {categories.map(category => (
          <TouchableOpacity
            key={category.id}
            style={{
              padding: 10,
              backgroundColor: 'lightgray',
              margin: 10,
              borderRadius: 10,
            }}>
            <Text>{category.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        ListHeaderComponent={() => <Text style={{ fontSize: 24, fontWeight: '700', marginLeft: 16 }}>Products</Text>}
        ListFooterComponent={() => (
          <View style={{ padding: 16, alignItems: 'center' }}>
            <Text>Loading ... </Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <View>
            <Text>No products found</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        style={{ marginTop: 16 }}
        horizontal
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              marginRight: 16,
              width: 200,
              borderWidth: 1,
              borderColor: 'lightgray',
              borderRadius: 10,
              marginBottom: 16,
            }}>
            <View
              style={{
                width: '100%',
                height: 150,
                backgroundColor: 'lightgray',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            />
            <View style={{ padding: 8 }}>
              <Text style={{ fontSize: 16, fontWeight: '600' }}>{item.title}</Text>
              <Text style={{ fontSize: 14, fontWeight: '400', marginVertical: 8 }}>${item.price}</Text>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default Homepage;
