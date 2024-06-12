import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text, ToastAndroid } from 'react-native';
import { SearchBar,Card } from '@rneui/themed';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { get_loteos, get_medidor_by_id, get_medidores } from '../redux/actions';
/* import { loteos } from '../data/loteos'; */
import CardMedidor from '../components/card';
/* import { medidor as medidores } from '../data/medidor'; */




export default function Home({ navigation } : any) {
  const [valueSearch,setValueSearch] = useState<string>();
  const [valueMedidor,setValueMedidor] = useState<any>();

  const medidores = useSelector((state : any)=>state.medidores)
  const medidor_detail = useSelector<any>(state=>state.medidor_detail)

  const dispatch = useDispatch<any>()
  const loteos = useSelector((state : any) => state.loteos);

    
    useEffect(()=>{
      
      dispatch(get_loteos());
      dispatch(get_medidores())
    },[])

    const searchMedidor = () =>{
      const findMedidor = medidores.find((cliente : any) => {
        console.log(cliente.medidor);
        
        if(cliente.medidor === valueSearch){
          console.log(cliente);
          dispatch(get_medidor_by_id(valueSearch))
          return cliente;
        }
        else {
          console.log(cliente);
          
        }
      })

      setValueMedidor(medidor_detail);
    }
 

    return (
  
        <View style={styles.container}>

          <View style={{flex:1,width:"90%",marginTop:25,}}>
            <SearchBar
              platform="android"
              onChangeText={(newVal : any) => setValueSearch(newVal)}
              placeholder="Buscar medidor ..."
              placeholderTextColor="#888"
              value={valueSearch}
              onSubmitEditing={() => searchMedidor()}
            />
          </View>

          <View style={{flex:4,width:"80%"}}>

             {
              valueMedidor && <CardMedidor medidorCliente={medidor_detail} status={true}/>
             } 
            


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