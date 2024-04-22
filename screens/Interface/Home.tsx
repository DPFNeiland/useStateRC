import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native';
import styles

const App = () => {
    const [name, setName] = useState('');
    const [nameField, setNameField] = useState('');

    const handleSendName = () => {
        setName(nameField);
        setNameField('');
    }

    const handleClear = () => {
        setName('');
    }


    return (
        <View style={styles.container}>
            {name == '' &&
                <View style={styles.layout1}>
                    <Text style={styles.texto1}>Qual o seu nome?</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(texto) => setNameField(texto)} />

                    <Button
                        title="Enviar"
                        color='#FFA051'
                        onPress={handleSendName}
                    />
                </View>
            }

            {name != '' &&
                <View style={styles.layout2}>
                    <Text style={styles.texto2}>Olá {name}</Text>
                    <Text style={styles.texto1}>Tudo bem?</Text>
                    <Button
                        title={`Não sou ${name}`}
                        color='#FFA051'
                        onPress={handleClear}
                    />
                </View>
            }


        </View>
    );
};





