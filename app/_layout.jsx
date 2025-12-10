import TabBar from '@/components/TabBar';
import '@/global.css';
import { useFonts } from 'expo-font';
import { Tabs } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';

const _layout = () => {
    
    const [fontsLoaded, fontError] = useFonts({
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    });

    React.useEffect(() => {
        if (fontsLoaded || fontError) {
        SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null; 
    }
  return (
    <Tabs 
        tabBar={props => <TabBar {...props}/> }
    >
        <Tabs.Screen 
            name='index' 
            options={{title: "Home", 
                    headerShown: false
                    }}
        />
        <Tabs.Screen 
            name='maps' 
            options={{title: "",
                headerShown: false
            }}
        />
        <Tabs.Screen 
            name='menu' 
            options={{title: "Menu",
                headerShown: false
            }}
        />
    </Tabs>
  )
}

export default _layout