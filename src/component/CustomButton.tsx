import * as React from 'react';
import { StyleSheet,TouchableOpacity, Text, ViewStyle, TextStyle } from "react-native";

interface Props {
    title:string;
    disabled?:boolean;
    bottonStyle?: ViewStyle | ViewStyle[];
    textStyle?: TextStyle | TextStyle[];
    onPress:any;
}

const CustomButton = (props: Props) => {
return(
<TouchableOpacity onPress={props.onPress} disabled={props.disabled} style={[styles.buttonStyle, props.bottonStyle]}>
    <Text style={[styles.textStyle, props.textStyle]}>{props.title}</Text>
</TouchableOpacity>
)
}
const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor:'blue',
        borderRadius:5,
        width:100,
        height:30
    },
    textStyle:{
        color:'white',
        textAlign:'center',
        padding:5
    }
});

CustomButton.defaultProps = {};

export default CustomButton;