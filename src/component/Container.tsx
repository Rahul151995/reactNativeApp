import * as React from 'react';
import { SafeAreaView, StyleSheet, ViewStyle } from "react-native";

interface Props {
    children: any;
    containerStyle?: ViewStyle | ViewStyle[];
}

const Container = (props: Props) => {
    return <SafeAreaView style={[styles.container, props.containerStyle ]}>{props.children}</SafeAreaView>
}
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'stretch' }
});

export default Container;