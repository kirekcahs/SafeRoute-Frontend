import Feather from "@expo/vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const rainyLogo = require("../assets/images/rainy-logo.png");
const sunnyLogo = require("../assets/images/sunny-logo.png");
const sunny = require("../assets/images/cloud-blue-sky.jpg");
const rainy = require("../assets/images/rainy-weather.jpg");
const Home = () => {
  return (
    <LinearGradient
      className="w-full h-full"
      colors={["#DBD9D9", "#6E8DE0"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollView
        vertical
        contentContainerStyle={{ paddingHorizontal: 5 }}
        showsHorizontalScrollIndicator={false}
      >
        <SafeAreaView>
          <View className="p-7">
            <Text
              className="text-[1.5rem] pb-5"
              style={{ fontFamily: "Poppins-Medium" }}
            >
              Today's Weather
            </Text>

            <ImageBackground source={sunny} style={style.image}>
              <LinearGradient
                className="absolute"
                style={StyleSheet.absoluteFill}
                colors={[
                  "rgba(255, 255, 255, 0.70)",
                  "rgba(191, 186, 186, 0.50)",
                ]}
              >
                {/**weather temp */}
                <View className="flex justify-center items-center pt-5">
                  <Text style={style.location}>Malabon</Text>
                  <Text style={style.temperature}>33 °C</Text>

                  <View className="flex-row items-center">
                    <Image source={sunnyLogo} style={style.weatherImage} />
                    <Text style={style.weather}>Sunny</Text>
                  </View>
                </View>

                {/*other stats */}
                <View className="flex-row justify-evenly mx-4 mt-2">
                  {/**wind speed*/}
                  <View className="flex-row gap-2 items-center ">
                    <Feather name="wind" size={18} color="#393636" />
                    <Text className="text-sm">22km</Text>
                  </View>
                  {/**humidity*/}
                  <View className="flex-row gap-2 items-center ">
                    <Feather name="droplet" size={18} color="#393636" />
                    <Text className="text-sm">23%</Text>
                  </View>
                </View>

                <ScrollView
                  horizontal
                  contentContainerStyle={{ paddingHorizontal: 5 }}
                  showsHorizontalScrollIndicator={false}
                >
                  <View className="bg-[rgba(255,255,255,0.43)] flex justify-center items-center w-24 rounded-3xl p-2 my-5 mx-1 gap-2">
                    <Image source={rainyLogo} style={style.forecastImage} />
                    <Text style={style.forecastFont}>Monday</Text>
                  </View>
                  <View className="bg-[rgba(255,255,255,0.43)] flex justify-center items-center w-24 rounded-3xl p-3 my-5 mx-1 gap-2">
                    <Image source={sunnyLogo} style={style.forecastImage} />
                    <Text style={style.forecastFont}>Tuesday</Text>
                  </View>
                  <View className="bg-[rgba(255,255,255,0.43)] flex justify-center items-center w-24 rounded-3xl p-3 my-5 mx-1 gap-2">
                    <Image source={rainyLogo} style={style.forecastImage} />
                    <Text style={style.forecastFont}>Wednesday</Text>
                  </View>
                  <View className="bg-[rgba(255,255,255,0.43)] flex justify-center items-center w-24 rounded-3xl p-3 my-5 mx-1 gap-2">
                    <Image source={sunnyLogo} style={style.forecastImage} />
                    <Text style={style.forecastFont}>Thusday</Text>
                  </View>
                  <View className="bg-[rgba(255,255,255,0.43)] flex justify-center items-center w-24 rounded-3xl p-3 my-5 mx-1 gap-2">
                    <Image source={rainyLogo} style={style.forecastImage} />
                    <Text style={style.forecastFont}>Friday</Text>
                  </View>
                  <View className="bg-[rgba(255,255,255,0.43)] flex justify-center items-center w-24 rounded-3xl p-3 my-5 mx-1 gap-2">
                    <Image source={rainyLogo} style={style.forecastImage} />
                    <Text style={style.forecastFont}>Saturday</Text>
                  </View>
                  <View className="bg-[rgba(255,255,255,0.43)] flex justify-center items-center w-24 rounded-3xl p-3 my-5 mx-1 gap-2">
                    <Image source={rainyLogo} style={style.forecastImage} />
                    <Text style={style.forecastFont}>Sunday</Text>
                  </View>
                </ScrollView>
              </LinearGradient>
            </ImageBackground>
          </View>

          <View className="mb-5">
            <Text
              className="text-[1.5rem] py-5 pl-7"
              style={{ fontFamily: "Poppins-Medium" }}
            >
              Articles
            </Text>

            <View>
              <ScrollView
                horizontal
                contentContainerStyle={{ paddingHorizontal: 30 }}
                showsHorizontalScrollIndicator={false}
              >
                <View className="w-[9rem] bg-[rgba(255,255,255,0.43)] mr-5 h-[10rem] rounded-xl">
                  <Text></Text>
                </View>

                <View className="w-[9rem] bg-[rgba(255,255,255,0.43)] mr-5 h-[10rem] rounded-xl">
                  <Text></Text>
                </View>

                <View className="w-[9rem] bg-[rgba(255,255,255,0.43)] mr-5 h-[10rem] rounded-xl">
                  <Text></Text>
                </View>

                <View className="w-[9rem] bg-[rgba(255,255,255,0.43)] mr-5 h-[10rem] rounded-xl">
                  <Text></Text>
                </View>
              </ScrollView>
            </View>
          </View>

          <View>
            <Text
              className="text-[1.5rem] py-5 pl-7"
              style={{ fontFamily: "Poppins-Medium" }}
            >
              Things to remember{" "}
            </Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
  );
};

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
    width: 300,
    height: 275,
    borderRadius: 10,
    overflow: "hidden",
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
    color: "#393636",
  },
  temperature: {
    fontFamily: "Poppins-Regular",
    fontSize: 40,
    color: "#393636",
  },
  weather: {
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    color: "#393636",
  },
  weatherImage: {
    width: 30,
    height: 20,
  },
  forecastImage: {
    width: 40,
    height: 30,
  },
  forecastFont: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
  },
});

export default Home;
