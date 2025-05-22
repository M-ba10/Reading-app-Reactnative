import { StyleSheet,  useColorScheme } from 'react-native'
import { Slot, Stack } from 'expo-router'
import {Colors} from '../constants/Colors'
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {
  const colorSheme = useColorScheme () 
  const theme = Colors[colorSheme] ?? Colors.light // default to light theme
  return (
    <>
      <StatusBar value='auto'/>
      <Stack screenOptions={{
        headerStyle: {
          backgroundColor: theme.navBackground,
        },
        headerTintColor: theme.title,
        headerTitleStyle: { 
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        
      </Stack>

    </>
  )
}

export default RootLayout

const styles = StyleSheet.create({})