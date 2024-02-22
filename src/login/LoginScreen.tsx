import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

function LoginScreen(): JSX.Element {
    return (
       <View style= {styles.container}>
        <Image resizeMode="contain" source={require('../assets/imagens/user.png')}></Image>
        <View style= {styles.card}>
            <Text>Login</Text>
            <TextInput placeholder="E-mail" placeholderTextColor={"151413"}></TextInput>
            <TextInput placeholder="Senha" placeholderTextColor={"#151413"}></TextInput>
        </View>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e90ff'
    },
    card: {
        backgroundColor: '#FFFFFF',
        width: 300,
        borderRadius: 10,
        padding: 20,
        elevation: 3,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: {width:0, height:2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
    }

});

export default LoginScreen;