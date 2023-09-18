import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

import AudioPlayer from './AudioPlayer'

const SongOfTheDay = () => {
    return (
        <View>
            <Text style={tw`text-white pt-3 text-center font-bold text-lg`}>Song Of TheDay</Text>
            <Text style={tw`text-[#ea580c] pt-1 text-center font-bold text-lg`}>Orion Blades - Obawale</Text>
            <AudioPlayer />
        </View>
    )
}

export default SongOfTheDay