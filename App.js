import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { fetchData } from './hooks/fetchData';
import { Suspense, startTransition } from 'react';

const apiData = fetchData("https://pokeapi.co/api/v2/generation/");
export default function App() {
  return (
    <View style={styles.container}>
       
        <Suspense fallback={<Text>Loading...</Text>}>
          <Text> {apiData.results[0].name}  </Text>
        </Suspense>
       
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
