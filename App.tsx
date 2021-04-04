import * as React from 'react';
import { SafeAreaView, TextInput, View, StyleSheet, Button, Text, Dimensions } from 'react-native';
import Container from "./src/component/Container";
import CustomButton from "./src/component/CustomButton";
import { Formik } from "formik";
import { Validators } from "./src/utils/validators";
interface State {
  form: {
    emailInputValue: string;
    passwordInputValue: string;
  },
  orientation: string;
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
      },
      orientation: 'portrait',
    }
  }

  componentDidMount(): void {
    Dimensions.addEventListener('change', data => {
      const isPortrait = data.window.height > data.window.width;
      this.setState({ orientation: isPortrait ? 'portrait' : 'landscape' });
    });
  }
  componentWillUnmount(): void {
    Dimensions.removeEventListener('change', () => {});
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
          onSubmit={() => {
            console.log("On Submit is called");
          }}>
          {(props) => {
            return (
              <View style={{ alignItems: 'center' }}>
                <TextInput
                  onSubmitEditing={() => this.passwordInputRef.focus()}
                  returnKeyType={'next'}
                  style={this.state.orientation === 'portrait'
                    ? portraitStyles.textInput
                    : landScapeStyles.textInput}
                  placeholder={InputType.EMAIL}
                  onChangeText={props.handleChange('emailInputValue')}
                  editable={true}
                  onBlur={() => props.setFieldTouched('emailInputValue')}
                  value={props.values.emailInputValue}
                >
                </TextInput>

                {props.dirty && props.touched.emailInputValue ?
                  (<Text style={{ color: 'red' }}>{props.errors.emailInputValue}</Text>)
                  : null}



                <TextInput
                  onSubmitEditing={() => {
                    if (props.isValid) {
                      console.log("is valid");
                    }
                    else {
                      console.log("form is not valid");
                    }
                  }}
                  ref={ref => this.passwordInputRef = ref}
                  returnKeyType={'done'}
                  style={this.state.orientation === 'portrait'
                    ? portraitStyles.textInput
                    : landScapeStyles.textInput}
                  placeholder={InputType.PASSWORD}
                  onChangeText={props.handleChange('passwordInputValue')}
                  editable={true}
                  value={props.values.passwordInputValue}
                  onBlur={() => props.setFieldTouched('passwordInputValue')}
                >
                </TextInput>

                {props.dirty && props.touched.passwordInputValue ?
                  (<Text style={{ color: 'red' }}>{props.errors.passwordInputValue}</Text>)
                  : null}



                {/* <Button title={'login'} onPress={this.loginButtonClicked}></Button> */}
                <CustomButton
                  disabled={!props.isValid}
                  onPress={() => {
                    if (props.isValid) {
                      console.log("is valid");
                      props.handleSubmit;
                    }
                    else {
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

const portraitStyles = StyleSheet.create({
  textInput: {
    width: 300,
    borderWidth: 1,
    marginBottom: 10,
  },
});

const landScapeStyles = StyleSheet.create({
  textInput: {
    ...portraitStyles.textInput,
    width: 500,
  },
});