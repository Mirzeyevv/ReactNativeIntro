import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleInput = (text, type) => {
    setFormData(prevState => ({
      ...prevState,
      [type]: text,
    }));
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className='flex-1 justify-center items-center'>
        <Text className='text-2xl font-semibold'>Login</Text>
        <TextInput
          onChangeText={text => {
            handleInput(text, 'email');
          }}
          placeholder='Enter Email'
          className='border border-gray-300 w-[350px] pl-4 mt-4 rounded-md h-12'
        />

        <View className='border border-gray-300 w-[350px] mt-4 relative justify-center rounded-md h-12'>
          <TextInput
            onChangeText={text => {
              handleInput(text, 'password');
            }}
            secureTextEntry={!showPassword}
            placeholder='Enter Password'
            className='pl-4 w-full'
          />
          <TouchableOpacity
            onPress={() => {
              setShowPassword(prevState => !prevState);
            }}
            className='absolute right-4'>
            <Text>{showPassword ? 'Hide' : 'Show'}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            console.log(formData);
          }}
          className='bg-blue-600 w-[350px] px-5 py-3 mt-5 rounded-md'>
          <Text className='text-white text-xl font-medium text-center'>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;
