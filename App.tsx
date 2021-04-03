import * as React from 'react';
import { SafeAreaView, TextInput, View, StyleSheet, Button, Text } from 'react-native';
import Container from "./src/component/Container";
import CustomButton from "./src/component/CustomButton";
import { Formik } from "formik";
import { Validators } from "./src/utils/validators";
interface State {
  form: {
    emailInputValue: string;
    passwordInputValue: string;
  }
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
      form: {
        emailInputValue: '',
        passwordInputValue: ''
      }

    }
  }

  updateTextInput = (val: any, type: any) => {
    if (type == InputType.EMAIL)
      this.setState({ form: { ...this.state.form, emailInputValue: val } });
    else if (type == InputType.PASSWORD)
      this.setState({ form: { ...this.state.form, passwordInputValue: val } });
  }

  // loginButtonClicked = () => {
  //   console.log(this.state.emailInputValue)
  //   console.log(this.state.passwordInputValue)
  // }

  render() {
    return (
      <Container containerStyle={{ alignItems: 'center' }}>

        <Text style={{ fontSize: 36, marginBottom: 10, letterSpacing: 5, fontFamily: 'cursive' }}>Login</Text>

        <Formik
          initialValues={this.state.form}
          validateOnMount={true}
          validateOnChange={true}
          validationSchema={Validators.loginValidator}
          onSubmit={() => { console.log("On Submit is called");
           }}>
          {(props) => {
            return (
              <View style={{alignItems:'center'}}>
                <TextInput
                  onSubmitEditing={() => this.passwordInputRef.focus()}
                  returnKeyType={'next'}
                  style={{ width: 300, borderWidth: 1, marginBottom: 10 }}
                  placeholder={InputType.EMAIL}
                  onChangeText={props.handleChange('emailInputValue')}
                  editable={true}
                  value={props.values.emailInputValue}
                >
                </TextInput>

                <TextInput
                  onSubmitEditing={()=>{
                    if(props.isValid){
                        console.log("is valid");
                      }
                    else{
                      console.log("form is not valid");                     
                    }
                  }}
                  ref={ref => this.passwordInputRef = ref}
                  returnKeyType={'done'}
                  style={{ width: 300, borderWidth: 1, marginBottom: 10 }}
                  placeholder={InputType.PASSWORD}
                  onChangeText={props.handleChange('passwordInputValue')}
                  editable={true}
                  value={props.values.passwordInputValue}
                >
                </TextInput>

                {/* <Button title={'login'} onPress={this.loginButtonClicked}></Button> */}
                <CustomButton
                  onPress={()=>{
                    if(props.isValid){
                      console.log("is valid");
                      props.handleSubmit;
                    }
                  else{
                    console.log("form is not valid", props.errors);                     
                  }
                  }}
                  title={'Login'} />
              </View>
            )
          }}
        </Formik>

      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'stretch' }
})