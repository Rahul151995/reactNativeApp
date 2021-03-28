import * as React from 'react';
import { SafeAreaView, StyleSheet } from "react-native";

interface Props {
    children: any
}

const Container = (props: Props) => {
    return <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>
}
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'stretch' }
});

export default Container;