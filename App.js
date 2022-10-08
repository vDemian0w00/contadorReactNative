import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [counter, setC] = useState(0);
  const add= () => setC(c => c+1)
  const res = () => setC( c => c-1)

  
  return (
    <View style={styles.container}>
      <Text style={styles.clicks}>Clicks: { counter }</Text>
      <View style={styles.subContainer}>
        <TouchableOpacity style={styles.btn} onPress={add}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={res}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
      </View>
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
  clicks:{
    padding:20
  },
  subContainer:{
    justifyContent: 'center',
    height: 50,
    width: '100%',
    paddingHorizontal:10,
    flexDirection: 'row'

  },
  btn:{
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#5B89A6',
  },
  text:{
    fontSize:40,
    color: 100,
    paddingHorizontal:10,


    
  },

  count:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',

  }
});
