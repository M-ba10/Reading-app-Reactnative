import { StyleSheet, Pressable } from 'react-native'
import { Colors } from '../constants/Colors'


const ThemedButton = ({ style, ...props}) => {
  return (
    <Pressable
        style={({ pressed }) => [styles.btn, pressed && styles.pressed,
         style]}
         {...props}
    />
    )
}



const styles = StyleSheet.create({
     btn: {
        backgroundColor: Colors.primary,
        padding: 15,
        marginTop: 20,
        borderRadius: 5,
        width: '20%',
        height: 50,
        alignItems: 'center',
    },
    pressed: {
        opacity: 0.8,
    },

})
export default ThemedButton