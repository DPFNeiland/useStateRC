import React, { useState } from "react";
import { View, Text, TextInput, } from 'react-native'
import { styles } from "./StyleCampoTexto";

const CampoTexto = () => {
    const [mensagem, setMensagem] = useState('')

    return(
        <View style={styles.container}>
            <View style={styles.caixaInput}>
                <TextInput
                    style={styles.textinput}
                    placeholder="Digite alguma coisa..."
                    placeholderTextColor="#ccc"
                    onChangeText={(texto)=> setMensagem(texto)}
                />

            </View>

            <View style={styles.caixaMensagem}>
                <Text style={styles.texto}>
                    Você está digitando: 
                </Text>
                <Text style={styles.mensagemDigitada}>{mensagem}</Text>
            </View>
        </View>
    )
}

export default CampoTexto