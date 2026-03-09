import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={{ width: 80, height: 80, backgroundColor: 'purple' }}></View>
      <View style={{ width: 80, height: 80, backgroundColor: 'pink' }}></View>
      <View style={{ width: 80, height: 80, backgroundColor: 'darkred' }}></View>

      <StatusBar style="auto" />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
