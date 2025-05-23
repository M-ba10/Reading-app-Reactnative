import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router'

// themed components
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer height={20}/>

      <ThemedText style={styles.title} title={true}>The Number 1</ThemedText>

      < Spacer height={10}/>
      <ThemedText >Reading list</ThemedText>
      <Spacer />

      <Link href='/login' style={{ marginVertical: 10, marginBottomWidth: 1, backgroundColor: 'primary', fontWeight: 'condensed'}}>
        <ThemedText>Login Page</ThemedText>
      </Link>
      <Link href='/register' style={{ marginVertical: 10, marginBottomWidth: 1, backgroundColor: 'primary', fontWeight: 'condensed'}}>
        <ThemedText>Register Page</ThemedText>
      </Link>
      <Link href='/profile' style={{ marginVertical: 10, marginBottomWidth: 1, backgroundColor: 'primary', fontWeight: 'condensed'}}>
        <ThemedText>Profile Page</ThemedText>
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