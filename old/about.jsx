import { StyleSheet, Text, View, useColorScheme} from 'react-native'
import { Link } from 'expo-router'
import {Colors} from '../constants/Colors'

import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'


const Home = () => {
  const colorSheme = useColorScheme () 
  const theme = Colors[colorSheme] ?? Colors.light // default to light theme  

  return (
    <ThemedView style={[styles.container , {backgroundColor: theme.background}]}>
      <ThemedText style={styles.title}>About App</ThemedText>

      <Link href='/' style={{ marginVertical: 10, marginBottomWidth: 1}}>
        <ThemedText>Home Page</ThemedText>
      </Link>

    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})    