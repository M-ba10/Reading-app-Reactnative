import { StyleSheet, Text, View } from 'react-native'

import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'

const Profile = () => {
  return (
    <ThemedView style={styles.container}>

      
      <ThemedText title={true} style={styles.heading}>
         Your Email 
      </ThemedText>
      <Spacer/>

      <ThemedText> Time to start reading some books...</ThemedText>
      <Spacer/>

    </ThemedView>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})