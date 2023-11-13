import React from "react";
import { View, Text, Button } from 'react-native'

export default props => (
    <View style={{
        flex: 1,
    }}>
        <View>
            {props.avancar 
                ?   <Button 
                        title="Avançar"
                        onPress={() => {
                                props.navigation.removeListener //Corrige: WARN Sending `onAnimatedValueUpdate` with no listeners
                                props.navigation.navigate(props.avancar)
                            }
                        }
                    />
                : false
            }
        </View>
        <View style={{
                flex: 1,
            }
        }>
            {props.children}
        </View>
    </View>
)
// flexGrow: 1,