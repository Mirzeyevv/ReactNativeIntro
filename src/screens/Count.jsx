import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useState } from 'react'

const Count = () => {
  const [count, setCount] = useState(0)

  return (
    <View style={{flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
      <Text style={{fontSize: 24, fontWeight: '700'}}>Count: {count}</Text>
      <TouchableOpacity onPress={() => {
        setCount(prevState => prevState + 1)
      }} style={{backgroundColor: 'blue', paddingHorizontal: 20, paddingVertical: 10, marginTop: 20}}>
        <Text style={{color: 'white', fontSize: 20, fontWeight:500}}>Increment</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Count

const styles = StyleSheet.create({})