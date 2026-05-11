import { StyleSheet, Text, View, StatusBar, ScrollView, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from '../components/categories';
import axios from 'axios';
import Recipes from '../components/recipes';



const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState('Beef')
  const [categories, setCategories] = useState([])
  const [meals, setMeals] = useState([])

  useEffect(() => {
    getCategories()
    getRecipes()
  }, [])

  const handleChangeCategory = category=>{
    getRecipes(category)
    setActiveCategory(category)
    setMeals([])
  }

  const getCategories = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      // console.log('got categories ', response.data)
      if (response && response.data) {
        setCategories(response.data.categories)
      }
    } catch (err) {
      console.log('error', err.message)
    }
  }

  const getRecipes = async (category="Beef") => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
       console.log('got categories ', response.data)
      if (response && response.data) {
        setMeals(response.data.meals)
      }
    } catch (err) {
      console.log('error', err.message)
    }
  }



  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
          paddingTop: hp(6),
          gap: hp(2),
        }}
      >
        {/* Avatar */}
        <View className="mx-4 flex-row justify-between items-center mb-2">
          <Image source={require('../../assets/images/avatar.png')} style={{ height: hp(5), width: hp(5.5) }} />
          <BellIcon size={hp(4)} color="gray" />
        </View>

        {/* greeting */}
        <View className="mx-4 space-y-2 mb-2">
          <Text style={{ fontSize: hp(1.7) }} className="text-neutral-600">Merhaba Memo</Text>
          <View>
            <Text style={{ fontSize: hp(3.8) }} className="font-semibold text-neutral-600">Kendi Yemegini Yap</Text>
          </View>
          <Text style={{ fontSize: hp(3.8) }} className="font-semibold text-neutral-600">
            <Text className="text-amber-400">Evde </Text> Kal
          </Text>
        </View>

        {/*search bar */}
        <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
          <TextInput
            placeholder='Tarif icin ara'
            placeholderTextColor={"gray"}
            style={{ fontSize: hp(1.7) }}
            className="flex-1 text-base mb-1 pl-3 tracking-wider"
          />
          <View className="bg-white rounded-full p-3">
            <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="gray" />
          </View>
        </View>

        {/* categories*/}
        <View>
          {categories.length > 0 && <Categories categories={categories} activeCategory={activeCategory} setActiveCategory={handleChangeCategory} />}
        </View>

        {/*  recipes */}
        <View>
          <Recipes meals={meals} categories={categories}/>
        </View>

      </ScrollView>
    </View>
  )
}

export default HomeScreen
