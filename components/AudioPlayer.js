import { View, Text } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { Audio } from 'expo-av'
import tw from 'twrnc'
import { PlayCircleIcon, PauseCircleIcon } from 'react-native-heroicons/outline'
import * as Progress from 'react-native-progress'

const AudioPlayer = () => {
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    

    const audio = new Audio.Sound()

    const playAudio = async () => {
        await audio.loadAsync(require('../assets/audio/sotd-obawale.mp3'))
        // Get the duration of the audio file.
        const durationMillis = await audio.getDurationAsync();
        setDuration(durationMillis)
        console.log(audio.duration)
        await audio.playAsync()
    }

    const stopAudio = async () => {
        await audio.stopAsync()
    }
    

    useEffect(() => {
        audio.setOnPlaybackStatusUpdate((status) => {
            if(!status.didJustFinish){
                setCurrentTime(status.positionMillis)
            }
            if (status.didJustFinish) {
                audio.stopAsync();
            }
        })
    }, [currentTime])

    



    return (
        <View style={tw`px-4 py-3 bg-slate-900`}>
            <View style={tw`flex-row justify-center items-center`}>
                <PlayCircleIcon onPress={playAudio} size="40" color="white" />
                <PauseCircleIcon onPress={stopAudio} size="40" color="white" />

                <Progress.Bar progress={currentTime} size={35} />
                <Text style={tw`text-white px-2 text-lg`}>{currentTime} / </Text>
                <Text style={tw`text-white px-2`}>{duration}</Text>
            </View>
        </View>
    )
}

export default AudioPlayer