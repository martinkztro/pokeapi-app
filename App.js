import { StatusBar } from 'expo-status-bar';
import { Text, View, ActivityIndicator } from 'react-native';
import { fetchData } from './fetchData';
import { Suspense, startTransition } from 'react';


const apiData = fetchData("https://pokeapi.co/api/v2/generation/");
const data = apiData.read();
console.log(data.name);
export default function App() {
  startTransition(() => {
    
    return (
      <View >
        <Suspense fallback={<ActivityIndicator />}>
          <Text>{data.results}</Text>
        </Suspense>

      <StatusBar style="auto" />
  </View>
);
});
}