import { Button, Card,CheckBox,Icon,Input } from '@rneui/themed';
import { Edit } from 'lucide-react-native';
import { useState } from 'react';
import { Text, View,StyleSheet  } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { put_lectura_by_medidor } from '../redux/actions';
import Toast from 'react-native-root-toast'

export default function CardMedidor({medidorCliente} : any){
    const [valueActual,setValueActual] = useState('');
    const dispatch = useDispatch<any>()
    
    let {medidor,cliente,lote,manzana,lectura_actual,fecha_instalacion,is_modificate,lectura_anterior} = medidorCliente;
    const [modificado, setModificado] = useState(false)

    const handleSubmit = (medidor: any, valueActual: any) =>{

        const value = {
            lectura_actual: valueActual
        }
        if (lectura_actual <= valueActual) {
            dispatch(put_lectura_by_medidor(medidor,value));
            setModificado(true)
            setValueActual('')
            let toast = Toast.show('¡Solicitud enviada con éxito!', {
                duration: Toast.durations.SHORT,
                position: Toast.positions.BOTTOM,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
              });
          
              setTimeout(function hideToast() {
                Toast.hide(toast);
              }, 3000);
        } else {
            return alert('Lectura menor que la anterior!')
        }
        
    }

    return(
        <Card containerStyle={{shadowRadius:3, borderRadius:8,padding:20}}>
            <Card.Title style={{cursor:"pointer"}}>
                <CheckBox 
                title={"Medidor: "+medidor}
                textStyle={{fontSize:22}}
                iconRight
                size={30}
                checked={is_modificate}
                checkedColor='#448c27'
                 />
            </Card.Title>
            <Card.Divider/>

            <View style={{alignItems:"flex-start"}}>
                <Text style={styles.text}>Cliente: <Text style={styles.text2}>{cliente}</Text></Text>
                <Text style={styles.text}>Fecha: <Text style={styles.text2}>{fecha_instalacion}</Text></Text>
                <Text style={styles.text}>Lote: <Text style={styles.text2}>{lote}</Text></Text>
                <Text style={styles.text}>Manzana: <Text style={styles.text2}>{manzana}</Text></Text>
                {
                    modificado ? (
                    <>
                        <Text style={styles.text}>Lectura anterior:  <Text style={styles.text2}>{lectura_anterior}</Text></Text>
                        <Text style={styles.text}>Lectura actual: <Text style={styles.text2}>{lectura_actual}</Text></Text>
                        <View style={{alignSelf:"center",marginTop:30,width:"75%"}}>
                            <Button radius={"sm"} size='md' type="solid" onPress={()=>setModificado(false)}>
                                Editar
                                <Edit style={{marginLeft:8,marginTop:1}} color={"#fff"} size={18}></Edit>
                            </Button>
                        </View>
                        </>
                    ) :
                    (
                    <>
                        <Text style={styles.text}>Lectura anterior: <Text style={styles.text2}>{lectura_anterior}</Text></Text>
                        <Text style={styles.text}>Lectura actual: <Text style={styles.text2}>{lectura_actual}</Text></Text>
                        <Input
                        containerStyle={{width:"80%",marginTop:5}}
                        placeholder='Nueva Lectura'
                        onChangeText={(text:any)=>{
                            setValueActual(text);
                        }}
                        value={valueActual}
                        />
                        <View style={{alignSelf:"center",marginTop:30,width:"75%"}}>
                            <Button radius={"sm"} size='md' type="solid" onPress={()=> handleSubmit(medidor,valueActual)}>
                            Guardar cambios
                                <Icon style={{marginLeft:5}} name="save" color="white" />
                            </Button>
                            
                        </View>
                    </>
                    )

                }
                
            </View>

        </Card>
    )
}

const styles = StyleSheet.create({
    text: {
      fontSize:20,
      marginVertical: 5,
      marginLeft:9,
      color: "#343a40"
    },
    text2: {
        fontSize:20,
        color: "212529",
        fontWeight:"500"
      },
  });  