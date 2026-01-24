import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Menu = () => {
  return (
    <LinearGradient
      className="w-full h-full"
      colors={["#DBD9D9", "#6E8DE0"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaView>
        <View className="w-[90%] bg-[#F6F2F2] self-center mt-10 rounded-xl">
          <View className="p-5">
            <Text className="self-center text-xl font-medium mb-5">
              Profile
            </Text>
            <View className="flex-row gap-10 w-full">
              <View>
                <Text style={style.font}>Name: </Text>
                <Text style={style.font}>Phone Number: </Text>
                <Text style={style.font}>Location: </Text>
              </View>
              {/**profile info */}
              <View>
                <Text style={style.font}>John Doe</Text>
                <Text style={style.font}>09123456789</Text>
                <Text style={style.font}>Malabon City</Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  font: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#393636",
    paddingVertical: 5,
  },
});

export default Menu;
