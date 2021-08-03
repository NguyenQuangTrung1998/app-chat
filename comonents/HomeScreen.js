import React from 'react'
import SendBird from 'sendbird';
const sb = new SendBird({ appId: '55C32670-FB9E-4C95-B39B-2AA83D09B4F6' });
import { View,Text, Button,StyleSheet,Alert } from 'react-native'
export default function HomeScreen(props){
    const { user }=props;
    function joinChannel(receiveID){
        var params = new sb.GroupChannelParams();
        params.isPublic = false;
        params.isEphemeral = false;
        params.isDistinct = false;
        params.isSuper = false;
        params.addUserIds(['tn660618@gmail.com', 'aaa@gmail.com']);
        params.operatorUserIds = ['Jay'];   
        params.name = 'trung';
        params.channelUrl = 'trung1001'; 
        params.coverImage = null;
        params.data = 'channnel 2';
        params.customType = '';
        
        sb.GroupChannel.createChannel(params, function(groupChannel, error) {
            if (error) {
                Alert.alert('error')
                return;
            }
            console.log('created channel!')

            const channelUrl = groupChannel.channelUrl;
           
        });

      
    }
    return <View>
            <Text>{user.nickName}</Text>
            <Button title="chat" 
            onPress={()=>joinChannel(user.email)}
            style={styles.btn}
            />
        </View>
}
const styles = StyleSheet.create({
    btn:{
        flex:1,
        width:10,
        justifyContent:'center'
    }
})
