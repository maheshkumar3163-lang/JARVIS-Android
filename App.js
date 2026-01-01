import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#000'}}>
      <Text style={{color:'#00e5ff', fontSize:28}}>J.A.R.V.I.S</Text>
      <TouchableOpacity style={{marginTop:20, padding:15, backgroundColor:'#1e3a8a', borderRadius:30}}>
        <Text style={{color:'#fff'}}>ACTIVATE JARVIS</Text>
      </TouchableOpacity>
    </View>
  );
}
