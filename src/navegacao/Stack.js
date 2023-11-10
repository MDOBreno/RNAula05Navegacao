import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';

const Stack = createStackNavigator();

export default props => (
    <Stack.Navigator 
        initialRouteName='TelaA'
        //Obs: A propriedade abaixo oculta o título
        // screenOptions={{
        //         headerShown: false
        //     }
        // }
    >
        <Stack.Screen name='TelaA' 
            options={{
                    title: 'Informacoes Iniciais'
                }
            }
            component={TelaA}/>
        <Stack.Screen name='TelaB' component={TelaB}/>
        <Stack.Screen name='TelaC' component={TelaC}/>
    </Stack.Navigator>
)