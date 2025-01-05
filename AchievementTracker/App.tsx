import { DarkModeProvider } from './src/context/DarkModeContext';
import LandingScreen from './src/screens/LandingScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <DarkModeProvider>
      <NavigationContainer
          documentTitle={{
          formatter: (options, route) => 
            "Achievement Tracker"
        }}
      >
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Landing"
        >
          <Stack.Screen name="Landing" component={LandingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </DarkModeProvider>
  );
}