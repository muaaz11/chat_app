import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigations/RootNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}
