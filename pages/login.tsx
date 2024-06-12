import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text } from 'react-native';
import {  Image,Input,Button } from '@rneui/themed';
import { Mail,KeyRound  } from 'lucide-react-native';

export default function Login({navigation} : any) {
    return (
  
        <View style={styles.container}>
          <View style={{flex:1, overflow:'hidden'}}>
            <Image source={{uri:"https://raw.githubusercontent.com/LucianoVelasquez/front-app-agua/6de9c6afd256eaa0136e0ba01a261a609d9b7235/public/img.svg"}} style={{width:380,height:300,objectFit:"contain"}}></Image>
          </View>
          
          <View style={{flex:2,width:"100%",alignItems:'center',marginTop:50}}>
            <Text style={{fontSize:36,fontWeight:'500'}}>Inicia Session</Text>
  
            <View style={{width:"75%",marginTop:50,alignItems:"center"}}>
              <Input
              placeholder='  Email'
              style={{marginBottom:5}}
              leftIcon={
                <Mail
                size={24}
                color='black'
                />
              }
              />
              <Input
              placeholder='  Password'
              style={{marginTop:10}}
              leftIcon={
                <KeyRound
                size={24}
                color='black'
                />
              }
              
              />   
              
              <Button
                    title="LOG IN"
                    buttonStyle={{
                      backgroundColor: 'black',
                      borderWidth: 2,
                      borderColor: 'white',
                      borderRadius: 30,
                      marginTop:10
                    }}
                    containerStyle={{
                      width: 270,
                      marginHorizontal: 10,
                      marginVertical: 10,
                    }}
                    titleStyle={{ fontWeight: 'bold' }}
                    onPress={() => navigation.navigate('/')}
                    />
            </View>
            
          </View>
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