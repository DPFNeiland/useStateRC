import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import styles from './style';

const Atividade4 = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('/');
    const [confirmar, setConfirmar] = useState('');


    const Validar = () => {
        if (senha == '') {
            return <Text style={styles.iguais}></Text>;
        } else if (senha == confirmar) {
            return <Text style={styles.iguais}>Senhas iguais</Text>;
        } else {
            return <Text style={styles.diferentes}>Senhas não conferem</Text>;
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.caixaInput}>
                <Text>Nome</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Digite alguma coisa..."
                    placeholderTextColor="#ccc"
                    onChangeText={(emailUser) => setEmail(emailUser)}
                />

                <Text>Email</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Digite alguma coisa..."
                    placeholderTextColor="#ccc"
                    onChangeText={(senhaUser) => setSenha(senhaUser)}
                />
                <Text>Confirmar Email</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Digite alguma coisa..."
                    placeholderTextColor="#ccc"
                    onChangeText={(confirmarUser) => setConfirmar(confirmarUser)}
                />

                {senha == '' &&
                    <Text style={styles.iguais}></Text>
                }


                {senha == confirmar && senha != ''  &&
                    <Text style={styles.iguais}>Muito bem!</Text>
                }

                {senha != confirmar && senha != '' &&
                    <Text style={styles.diferentes}>Os email precisam ser iguais</Text>

                }
            </View>


        </View>
    );
};


export default Atividade4;