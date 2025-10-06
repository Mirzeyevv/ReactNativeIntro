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
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: '600' }}>Login</Text>
        <TextInput
          onChangeText={text => {
            handleInput(text, 'email');
          }}
          placeholder="Enter Email"
          style={{
            borderWidth: 1,
            borderColor: 'lightgray',
            width: 350,
            paddingLeft: 16,
            marginTop: 16,
          }}
        ></TextInput>

        <View
          style={{
            borderWidth: 1,
            borderColor: 'lightgray',
            width: 350,
            marginTop: 16,
            position: 'relative',
          }}
        >
          <TextInput
            onChangeText={text => {
              handleInput(text, 'password');
            }}
            secureTextEntry={!showPassword}
            placeholder="Enter Password"
            style={{ width: 350, paddingLeft: 16 }}
          ></TextInput>
          <TouchableOpacity
            onPress={() => {
              setShowPassword(prevState => !prevState);
            }}
            style={{ position: 'absolute', right: 16, top: 8 }}
          >
            <Text>X</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            console.log(formData);
          }}
          style={{
            backgroundColor: 'blue',
            width: 350,
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 500,
              textAlign: 'center',
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;
