import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { PROVIDER_DEFAULT } from 'react-native-maps';



const App = () => {
  const [location, setLocation] = useState('');


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }
  
      let location = await Location.getCurrentPositionAsync({});
      const local = JSON.stringify(location.coords.longitude)
      setLocation(local)
      
    })();
  }, []);
  console.log(location)
  return (
    <View style={styles.container}>
      <Text>{location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  map:{
    flex:1,
  },
});
export default App