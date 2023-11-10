import React from 'react';
// import { createStackNavigator } from 'react-navigation-stack';
import {createStackNavigator} from '@react-navigation/stack';
import TelaA from '../views/TelaA';

const Stack = createStackNavigator();
// const navigator = createStackNavigator({
//     TelaA:TelaA,
//     }, {
//         initialRouteName: 'TelaA'
//     }
// );
// export default createAppContainer(navigator);

export default props => (
    <Stack.Navigator initialRouteName='TelaA'>
        <Stack.Screen name='TelaA' component={TelaA}/>
    </Stack.Navigator>
)