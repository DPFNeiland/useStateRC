import { StyleSheet, TextInput } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    caixaInput:{
        width: 250,
        marginTop: 40
    },

    textinput: {
        backgroundColor: '#6767cc',
        borderRadius: 5,
        height: 40,
        padding: 10,
        color: '#fff',
        fontSize: 20
    },

    caixaMensagem: {
        marginTop: 15,
        height: 300,
        alignItems: 'center'
    },

    texto: {
        alignSelf: 'center'
    },
    
    mensagemDigitada: {
        alignSelf: 'center',
        marginTop: 15,
        fontWeight: 'bold'
    }
})