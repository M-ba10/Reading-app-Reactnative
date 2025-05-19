import { StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'

// themed components
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'



const login = () => {
  const handleSubmit = () => {
        console.log('Register button pressed')
  
   } 
  
  return (
    <ThemedView style={styles.container}>

      <Spacer height={20} />

      <ThemedText title={true} style={styles.title}>
         Register For an Account
      </ThemedText>
    
       <ThemedButton onPress={handleSubmit}>
          <Text style={{ color: '#f2f2f2'}}>Register</Text>
       </ThemedButton>
       
      <Spacer height={30}/>
      <Link href='/login' style={{ marginVertical: 10, marginBottomWidth: 1, backgroundColor: 'primary', fontWeight: 'condensed'}}>
         <ThemedText style={{textAlign: 'center'}}>Already have an account? Sign in</ThemedText>
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

})