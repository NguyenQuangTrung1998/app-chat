import { StatusBar } from 'expo-status-bar';

import React from 'react';
import SendBird from 'sendbird';
const sb = new SendBird({ appId: '55C32670-FB9E-4C95-B39B-2AA83D09B4F6' });
import { FlatList, ScrollView, StyleSheet, View,Text } from 'react-native';
import HomeScreen from './comonents/HomeScreen';
import LoginScreen from './comonents/LoginScreen';
const users = [
  {
    email:'aaa@gmail.com',
    nickName:'Trinh Tuong Vy'
  },
  {
    email:'bbb@gmail.com',
    nickame:'Nguyen Van Tuan'
  },
  {
    email:'ccc@gmail.com',
    nickName:'Hoang Van Minh'
  },
]
export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
      <StatusBar style="auto" />
     <ScrollView>
       {
         users.map(user=>{
          return <HomeScreen key={user.email} user = {user}/>
         })
       }
     </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30
  },

 
});
