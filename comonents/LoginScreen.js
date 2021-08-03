import React from 'react'
import SendBird from 'sendbird';
const sb = new SendBird({ appId: '55C32670-FB9E-4C95-B39B-2AA83D09B4F6' });
import { View, StyleSheet, TextInput, SafeAreaView, Button } from 'react-native'
export default function LoginScreen(props){
    const [text,onChangeText] = React.useState({
        email:'Tn660618@gmail.com',
        nickName:'Trung'
    });
    function onConnect(email,nickName){
        sb.connect(email,function(user,err){
            if(err){
                console.log('login failed!')
            }else{
                sb.updateCurrentUserInfo(nickName,null,(user,error)=>{
                    if(error){
                        console.log('update user failed !');
                    }else{
                        console.log('update success !'+user);
                    }
                })
            }
        })
    }
    return(
       
        <View>
            <SafeAreaView>
            <TextInput
                style={styles.inputEmail}
                onChangeText={onChangeText}
                value={text.email}
                placeholder='email'
             />
               <TextInput
                 style={styles.inputNickName}
                onChangeText={onChangeText}
                value={text.email}
                placeholder='nick name'
             />
            </SafeAreaView>
            <Button style={styles.button}
            onPress={()=>onConnect(text.email,text.nickName)} 
            title='Connect'/>
     
        </View>
    );
}
const styles = StyleSheet.create({
    inputEmail: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius:4,
      width:250
    },
    inputNickName: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:4
      },
    
  });