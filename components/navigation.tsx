import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/login';
import { NavigationTabs } from './navigationTabs';

export default function Navigation(){

    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='/'>
            <Stack.Screen options={{headerShown:false}}   name="Login" component={Login} />
            <Stack.Screen options={{headerShown:false}} name="/" component={NavigationTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}