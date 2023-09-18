import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

import SongOfTheDay from '../components/SongOfTheDay';

const HomeScreen = () => {
  return (
    <View style={tw`flex-1 bg-slate-900 items-center`}>
      <StatusBar style="light" />
      <SongOfTheDay />
    </View>
  )
}

export default HomeScreen