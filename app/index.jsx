import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const rainyLogo = require('../assets/images/rainy-logo.png')
const sunnyLogo = require('../assets/images/sunny-logo.png')
const sunny = require('../assets/images/cloud-blue-sky.jpg')
const rainy = require('../assets/images/rainy-weather.jpg')
const Home = () => {

  return (
    <LinearGradient className='w-full h-full'
      colors={["#DBD9D9","#6E8DE0"]}
      start={{x:0, y:0}}
      end={{x: 1, y:1}}
    >
      <SafeAreaView>
        
        <View className='p-7'>
          <Text className='text-[1.5rem] pb-5' style={{fontFamily: "Poppins-Medium"}}>Today's Weather</Text>
            <ImageBackground source={sunny} style={style.image}>
                <LinearGradient className='absolute' style={StyleSheet.absoluteFill}
                  colors={['rgba(255, 255, 255, 0.70)', 'rgba(191, 186, 186, 0.50)']}>
                    <View className='flex justify-center items-center pt-5'>
                      <Text style={style.location}>Malabon</Text>
                      <Text style={style.temperature}>33 °C</Text>
                      <View className='flex-row items-center'>
                        <Image source={sunnyLogo} style={style.weatherImage}/>
                        <Text style={style.weather}>Sunny</Text>
                      </View>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>

        <View>
            <Text className='text-[1.5rem] py-5 pl-7' style={{fontFamily: "Poppins-Medium"}}>Articles</Text>
        </View>

      </SafeAreaView>
    </LinearGradient>
  )
}

const style = StyleSheet.create({
  shadow: {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.24,
  shadowRadius: 15.38,
  elevation: 19,
  },
  image: {
    width: 280,
    height: 253,
    borderRadius: 10,
    overflow: 'hidden',
    alignSelf: "center",
     shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 12,
    },
    shadowOpacity: 0.24,
   shadowRadius: 15.38,
    elevation: 19,
  },
  location: {
    fontFamily: "Poppins-Medium",
    fontSize: 18,
    color: "#393636"
  },
  temperature: {
    fontFamily: "Poppins-Regular",
    fontSize: 40,
    color: "#393636"
  },
  weather: {
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    color: "#393636"
  },
  weatherImage: {
    width: 30,
    height: 20
  }
})

export default Home