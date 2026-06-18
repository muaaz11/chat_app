import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MainStackParamList, RootStackParamList } from '../shared/type/types'
import { useState } from 'react'
import MainNavigator from './mainNavigator/MainNavigator'
import HomeScreen from '../features/chat/screens/HomeScreen'
import AuthNavigator from './authNavigator/AuthNavigator'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function RootNavigation() {

    const [user, setUser] = useState(null)

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {user ? (
                <Stack.Screen name='Home' component={MainNavigator} /> 
            ) : (
                <Stack.Screen name='Auth' component={AuthNavigator} />
            )}
        </Stack.Navigator>
    )
}