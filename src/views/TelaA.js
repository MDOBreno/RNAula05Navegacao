import React from 'react';
import {useState} from "react";
//import {} from 'react-native';
import TextoCentral from '../components/TextoCentral';

// Forma 1: Abstraindo toda a navegacao para fora das telas
export default props => {
            
    return (
        <TextoCentral corFundo='#e53935'>
            Tela A
        </TextoCentral>
    )
}
// Forma 2: Passando as propriedades deste componente atual TelaA para a TelaB
// import PassoStack from '../components/PassoStack';
//
// export default props => {
//     // const {
//     //     navigation
//     // } = props.navigation;
//     //console.warn(props.navigation != null); //Exibe: true
//     // console.warn(props.navigation.navigate != null); //Exibe: true
    
//     // Forma 1: Antes do React V16.3.0
//     // props.navigation.navigate("TelaB");
//     // Forma 2: Depois do React V16.3.0
//     // useState(() => {
//     //     props.navigation.navigate("TelaB");
//     // }, []);

//     return (
//         <PassoStack {...props} avancar="TelaB">
//             <TextoCentral corFundo='#e53935'>
//                 Tela A
//             </TextoCentral>
//         </PassoStack>
//     )
// }