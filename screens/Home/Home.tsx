import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./StyleHome";

const Home = () => {
    const [name, setName] = useState('Gabriel')
    const [time, setTime] = useState('Vasco da Gama')

    const HandleClear = () => {
        setName('')
        setTime('')
    }

    return (
        <View style={styles.container}>

            <Text style={styles.texto}>Nome:{name}{'\n'}Time:{time}</Text>
            <View style={styles.buttonContainer}>

                {name != '' &&
                    <Button
                        title="Limpar tudo"
                        color='#ff0000'
                        onPress={HandleClear}
                    />
                }
                <Button
                    title="Mudar para Marcos"
                    onPress={() => {
                        setName('Marcos de Paula')
                        setTime('Palmeiras')
                    }}
                />
                <Button
                    title="Carlos"
                    color='#fea501'

                    onPress={() => {
                        setName('Carlos')
                        setTime('Fluminense')
                    }}
                />

                <Button
                    title="Paulo"
                    color='#008081'

                    onPress={() => {
                        setName('Paulo')
                        setTime('Vasco')
                    }}
                />

                <Button
                    title="Vasco"
                    color='#010100'

                    onPress={() => {
                        setName('Benedito')
                        setTime('Vasco')
                    }}
                />
                <Button
                    title="Flamengo"
                    color='#ff0101'

                    onPress={() => {
                        setName('Maior do Mundo')
                        setTime('Flamengo')
                    }}
                />
            </View>
        </View>
    )
}

export default Home