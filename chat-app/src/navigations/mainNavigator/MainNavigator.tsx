import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginScreen from '../../screens/auth/LoginScreen'
import RegisterScreen from '../../screens/auth/RegisterScreen'
import SplashScreen from '../../features/splash/SplashScreen'

const Stack = createNativeStackNavigator()

export default function MainNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Splash' component={SplashScreen} />
        </Stack.Navigator>
    )
}