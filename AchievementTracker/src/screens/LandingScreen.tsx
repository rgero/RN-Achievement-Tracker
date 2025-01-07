import { Button, Divider, Surface, Text, useTheme } from "react-native-paper"
import { ImageBackground, StyleSheet } from "react-native"

const LandingScreen = () => {
  const theme = useTheme();
  return (
    <ImageBackground 
      source={require('../../assets/background.jpg')} 
      style={styles.background}
    >
      <Surface style={styles.container} elevation={3}>
        <Text variant="titleLarge" style={{fontWeight: 'bold'}}>The Achievement Tracker</Text>
        <Divider/>
        <Text variant="bodyMedium">Welcome to the Achievement Tracker. This website is meant to track your personal achievements</Text>
        <Button mode="contained" style={{marginTop: 20}} onPress={() => console.log('Pressed')}>Login with Google</Button>
      </Surface>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '80%',
    height: "30%",
    borderRadius: 5,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default LandingScreen
