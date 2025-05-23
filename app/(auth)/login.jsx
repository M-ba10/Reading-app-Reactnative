import { StyleSheet,  Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Link } from 'expo-router'
import { useState } from 'react'
import { useUser } from '../../hooks/useUser'


// themed components
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'



const login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const { user, login } = useUser()

  const handleSubmit =  async () => {
      setError(null)

      try {
        await login(email, password)
      } catch (error) {
        setError(error.message)
      }
    console.log('Login button pressed')
  }

  return (
    /*<TouchableWithoutFeedback onPress={Keyboard.dismiss} >*/
      <ThemedView style={styles.container}>

        <Spacer height={20} />

        <ThemedText title={true} style={styles.title}>
          Login to Your Account
        </ThemedText>

        <Spacer height={20} />
        <ThemedTextInput 
          style={{ width: '80%', marginBottom: 20}}
          placeholder='Email'
          keyboardType='email-address'
          onChangeText={setEmail}
          value={email}
        />
        

        <ThemedTextInput 
          style={{ width: '80%', marginBottom: 20}}
          placeholder='Password'
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />
        {/* <Pressable 
            onPress={handleSubmit}
          style={({ pressed }) => [styles.btn, pressed && styles.pressed]}>
          <Text style={{ color: '#f2f2f2'}}>Login</Text>
        </Pressable> */}

        <ThemedButton onPress={handleSubmit}>
            <Text style={{ color: '#f2f2f2'}}>Login</Text>
        </ThemedButton>
        
        <Spacer />
        {error && <Text style={styles.error}>{error}</Text>}

        <Spacer height={30}/>
        <Link href='/register' style={{ marginVertical: 10, marginBottomWidth: 1, backgroundColor: 'primary', fontWeight: 'condensed'}}>
          <ThemedText style={{textAlign: 'center'}}>Don't have an account? Sign up</ThemedText>
        </Link>
      </ThemedView>
    /*</TouchableWithoutFeedback>*/
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
    error: {
        color: Colors.warning,
        backgroundColor: '#f5c1c8',
        textAlign: 'center',
        marginTop: 10,
        borderColor: Colors.warnig,
        borderWidth: 1,
        borderRadius: 6,
        marginHorizontal: 10,
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