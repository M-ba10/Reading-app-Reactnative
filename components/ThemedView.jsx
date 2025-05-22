import { View, Text, useColorScheme, SafeAreaView } from 'react-native'
import { Colors } from '../constants/Colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


const ThemedView = ({ style, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light // default to light theme

  if (!safe) return (
    <View style={[{  backgroundColor: theme.background }, style]}
      {...props}
    /> // pass the rest of the props to the View
  )
  
  const insets = useSafeAreaInsets()

  return (
    <View style={[{  backgroundColor: theme.background, paddingTop: insets.top, paddingBottom: insets.bottom }, style]}
      {...props}
    /> 

  )
}

export default ThemedView