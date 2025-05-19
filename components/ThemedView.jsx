import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'


const ThemedView = ({ style, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light // default to light theme
  return (
    <View style={[{  backgroundColor: theme.background }, style]}
      {...props}
    /> // pass the rest of the props to the View
  )
}

export default ThemedView