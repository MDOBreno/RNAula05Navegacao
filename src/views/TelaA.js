import React from 'react';
//import {} from 'react-native';
import TextoCentral from '../components/TextoCentral';

export default props => {
    //console.warn(props.navigation != null); //Exibe: true
    // console.warn(props.navigation.navigate != null); //Exibe: true
    props.navigation.navigate("TelaB");

    return (
        <TextoCentral corFundo='#e53935'>
            Tela A
        </TextoCentral>
    )
}