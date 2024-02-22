import React from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function LoginScreen(): JSX.Element {
    return (
       <View style= {styles.container}>
        <Image style= {styles.logo}resizeMode="contain" source={require('../assets/imagens/user.png')}></Image>
        <View style= {styles.card}>
            <Text style= {styles.title}>Login</Text>
            <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor={"#151413"}></TextInput>
            <TextInput style={styles.input} placeholder="Senha" placeholderTextColor={"#151413"}></TextInput>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Não possui conta? Cadastre-se!</Text>
            </TouchableOpacity>
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
    logo: {
        width: 80,
        height: 80, 
        marginBottom: 20,
        marginTop: -150
    },
    card: {
        backgroundColor: '#FFFFFF',
        width: 300,
        borderRadius: 20,
        padding: 20,
        elevation: 3,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: {width:0, height:2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#151413',
        marginBottom: 20,
        textAlign: 'center'
    },
    input: {
        backgroundColor: '#D7D4D1',
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#1e90ff'
    },
    button: {
        backgroundColor: '#1e90ff',
        height: 40,
        borderRadius: 12

    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 40,
    },
    forgotPassword: {
        color: '#1e90ff',
        textAlign: 'center',
        marginTop: 10,
    }

});

export default LoginScreen;