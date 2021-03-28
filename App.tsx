import * as React from 'react';
import { SafeAreaView, TextInput, View, StyleSheet, Button, Text } from 'react-native';
import Container from "./src/component/Container";
import  CustomButton from "./src/component/CustomButton";

interface State {
  emailInputValue: string;
  passwordInputValue: string;
}
interface Prop { }
enum InputType {
  EMAIL = 'Email',
  PASSWORD = 'Password'
}

export class App extends React.Component<Prop, State>{

  private passwordInputRef;

  constructor(props) {
    super(props);
    this.state = {
      emailInputValue: '',
      passwordInputValue: '',
      
    }
  }

  updateTextInput = (val: any, type: any) => {
    if (type == InputType.EMAIL)
      this.setState({ emailInputValue: val });
    else if (type == InputType.PASSWORD)
      this.setState({ passwordInputValue: val });
  }

  loginButtonClicked=()=>{
    console.log(this.state.emailInputValue)
    console.log(this.state.passwordInputValue)
  }

  render() {
    return (
      <Container containerStyle={{ alignItems: 'center' }}>

       <Text  style={{fontSize:36, marginBottom:10, letterSpacing:5}}>Login</Text>

        <TextInput onSubmitEditing = {()=> this.passwordInputRef.focus()} returnKeyType={'next'}  style={{ width: 300, borderWidth: 1, marginBottom: 10 }}
          placeholder={InputType.EMAIL} onChangeText={(val) => this.updateTextInput(val, InputType.EMAIL)} editable={true}></TextInput>

        <TextInput onSubmitEditing = {this.loginButtonClicked} ref={ref => this.passwordInputRef  = ref} returnKeyType={'done'} style={{ width: 300, borderWidth: 1, marginBottom: 10 }}
          placeholder={InputType.PASSWORD} onChangeText={(val) => this.updateTextInput(val, InputType.PASSWORD)} editable={true}></TextInput>

        {/* <Button title={'login'} onPress={this.loginButtonClicked}></Button> */}
        <CustomButton onPress={this.loginButtonClicked} title={'Login'}/>

      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'stretch' }
})