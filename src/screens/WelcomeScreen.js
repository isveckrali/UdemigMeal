import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const WelcomeScreen = () => {
  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-blue-500">
      <StatusBar style='light' />
    </View>
  )
}

export default WelcomeScreen