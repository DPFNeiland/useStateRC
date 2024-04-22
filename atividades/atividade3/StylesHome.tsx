import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    caixaInput: {
        width: 250,
        marginTop: 40,
    },

    textInput: {
        backgroundColor: '#434fff',
        borderRadius: 5,
        height: 40,
        padding: 10,
        color: '#fff',
        fontSize: 12,
        borderWidth: 0,

    },

    mensagemValidacao: {
        display: 'flex',
        justifyContent: 'flex-start',
        width: 250,
        height: 100,
    },

    iguais: {
        color: '#00ff00',
        alignSelf: 'flex-start'
    },

    diferentes: {
        color: '#FF0000',
    }
});
export default styles;




