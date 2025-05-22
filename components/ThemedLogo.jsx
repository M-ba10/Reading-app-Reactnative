import { Image, useColorScheme} from 'react-native'

import DarkLogo from '../assets/img/logo-dark.jpeg'
import LightLogo from '../assets/img/logo-light.jpeg'

const ThemedLogo = (...props) => {
  const colorScheme = useColorScheme()
    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo // default to light theme  
  return (
    <Image source={logo} {...props}/>
  )
}

export default ThemedLogo