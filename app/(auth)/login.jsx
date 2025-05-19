import { StyleSheet, Pressable, Text } from 'react-native'
import { Link } from 'expo-router'

// themed components
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import { Colors } from '../../constants/Colors'
import ThemedButton from '../../components/ThemedButton'



const login = () => {

  const handleSubmit = () => {
    console.log('Login button pressed')
  }

  return (
    <ThemedView style={styles.container}>

      <Spacer height={20} />

      <ThemedText title={true} style={styles.title}>
         Login to Your Account
      </ThemedText>
      
      {/* <Pressable 
          onPress={handleSubmit}
         style={({ pressed }) => [styles.btn, pressed && styles.pressed]}>
         <Text style={{ color: '#f2f2f2'}}>Login</Text>
      </Pressable> */}

      <ThemedButton onPress={handleSubmit}>
          <Text style={{ color: '#f2f2f2'}}>Login</Text>
      </ThemedButton>


      <Spacer height={30}/>
      <Link href='/register' style={{ marginVertical: 10, marginBottomWidth: 1, backgroundColor: 'primary', fontWeight: 'condensed'}}>
         <ThemedText style={{textAlign: 'center'}}>Don't have an account? Sign up</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    // btn: {
    //     backgroundColor: Colors.primary,
    //     padding: 15,
    //     marginTop: 20,
    //     borderRadius: 5,
    //     width: '80%',
    //     alignItems: 'center',
    // },
    // pressed: {
    //     opacity: 0.8,
    // },

})