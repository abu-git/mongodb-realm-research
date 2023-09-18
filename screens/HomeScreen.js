import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const HomeScreen = () => {
  return (
    <View style={tw`flex-1 bg-slate-900 justify-center items-center`}>
      <StatusBar style="light" />
      <Text style={tw`text-red-500`}>Open up HomeScreen.js to start working on your app!</Text>
    </View>
  )
}

export default HomeScreen