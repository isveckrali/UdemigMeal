import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native'
import React from 'react'

const RecipeDetailScreen = (props) => {
    let iem = props.route.params
  return (
    <ScrollView
        className="bg-white flex-1"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 30}}
    >
      <StatusBar barStyle="light-content" />
      <View className="flew-row justify-center">

      </View>
    </ScrollView>
  )
}

export default RecipeDetailScreen

