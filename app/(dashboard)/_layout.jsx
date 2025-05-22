import { Tabs } from "expo-router"
import { useColorScheme } from "react-native"
import { Colors } from "../../constants/Colors"
import { Ionicons } from "@expo/vector-icons"

const DashboardLayout = () => {
  const colorScheme = useColorScheme()  
  const theme = Colors[colorScheme] ?? Colors.light // default to light theme
  return (
      <Tabs 
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 0,
            backgroundColor: theme.navBackground,
            paddingTop: 10,
            height: 90,
            borderTopWidth: 0,
          },
            tabBarActiveTintColor: theme.iconcolorFocused,
            tabBarInactiveTintColor: theme.iconColor,
        }}
      >
       
        <Tabs.Screen 
          name="profile" 
          options={{
            title: 'Profile', tabBarIcon: ({ focused }) => (
              <Ionicons name= {focused ? "person" : "person-outline"}
               size={24} 
               color={focused ? theme.iconcolorFocused : theme.iconColor}
               />
            )}}
        />
        <Tabs.Screen 
          name="books" 
          options={{
            title: 'Books', tabBarIcon: ({ focused }) => (
                
            <Ionicons name= {focused ? "book" : "book-outline"}
               size={24} 
               color={focused ? theme.iconcolorFocused : theme.iconColor}
            />
            )}}
        />
        <Tabs.Screen 
          name="create" 
          options={{
            title: 'Create', tabBarIcon: ({ focused }) => (
            <Ionicons name= {focused ? "create" : "create-outline"}
               size={24} 
               color={focused ? theme.iconcolorFocused : theme.iconColor}
           />
            )}}
        />
        
      </Tabs> 
  )
}

export default DashboardLayout