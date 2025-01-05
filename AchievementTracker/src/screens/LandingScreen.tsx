import { StyleSheet, View } from "react-native"
import { Text, useTheme } from "react-native-paper"

const LandingScreen = () => {
  const theme = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]} >
      <Text>Dumb Landing Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default LandingScreen
