import * as React from 'react';
import { SafeAreaView, TextInput, View, StyleSheet } from 'react-native';

interface State { }
interface Prop { }

export class App extends React.Component<Prop, State>{
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TextInput  style={{width:300, borderWidth:1, alignSelf:'center'}}
        placeholder={'Email'} value={'Rahul'}></TextInput>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
container:{flex:1,justifyContent:'center',alignItems:'stretch'}
})