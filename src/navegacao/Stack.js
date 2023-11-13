import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import PassoStack from '../components/PassoStack';

const Stack = createStackNavigator();

// Forma 1: Abstraindo toda a navegacao para fora das telas
export default props => (
    <Stack.Navigator 
        initialRouteName='TelaA'
        //Obs: A propriedade abaixo oculta o título
        // screenOptions={{
        //         headerShown: false
        //     }
        // }
    >
        <Stack.Screen 
            name='TelaA' 
            options={{
                    title: 'Informacoes Iniciais'
                }
            }
        >
            {props => (
                    <PassoStack {...props} avancar="TelaB" >
                        <TelaA />
                    </PassoStack>
                )
            }
        </Stack.Screen>
        <Stack.Screen  
            name='TelaB' 
        >
            {props => (
                    <PassoStack {...props} avancar="TelaC" >
                        <TelaB />
                    </PassoStack>
                )
            }

        </Stack.Screen>
        <Stack.Screen name='TelaC' component={TelaC}/>
    </Stack.Navigator>
)

// Forma 2: Passando as propriedades deste componente atual TelaA para a TelaB
// export default props => (
//     <Stack.Navigator 
//         initialRouteName='TelaA'
//         //Obs: A propriedade abaixo oculta o título
//         // screenOptions={{
//         //         headerShown: false
//         //     }
//         // }
//     >
//         <Stack.Screen name='TelaA' 
//             options={{
//                     title: 'Informacoes Iniciais'
//                 }
//             }
//             component={TelaA}/>
//         <Stack.Screen name='TelaB' component={TelaB}/>
//         <Stack.Screen name='TelaC' component={TelaC}/>
//     </Stack.Navigator>
// )