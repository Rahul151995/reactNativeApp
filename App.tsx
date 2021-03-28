import * as React from 'react';
import { SafeAreaView, TextInput, View, StyleSheet } from 'react-native';
import  Container  from "./src/component/Container";

interface State { 
  textInputValue:string;
}
interface Prop { }

export class App extends React.Component<Prop, State>{


  constructor(props){
      super(props);
      this.state = {
        textInputValue:''
      }
  }

updateTextInput=(e:any)=>{
  console.log("Inmput Value :: ",e);
  this.setState({textInputValue:e})
}

  render() {
    return (
      <Container>
        <TextInput  style={{width:300, borderWidth:1, alignSelf:'center'}}
        placeholder={'Email'} onChangeText={this.updateTextInput} editable={true}></TextInput>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
container:{flex:1,justifyContent:'center',alignItems:'stretch'}
})