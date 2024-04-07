import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./StyleHome";

const Atividade1 = () => {
    const [name, setName] = useState('')
    const [time, setTime] = useState('')

    const HandleClear = () => {
        setName('')
        setTime('')
    }

    return (
        <View style={styles.container}>

            <Text style={styles.texto}>Nome:{name}{'\n'}Time:{time}</Text>
            <View style={styles.buttonContainer}>

                {time != 'Flamengo' &&
                    <Button
                        title="Flamengo"
                        color='#ff0101'

                        onPress={() => {
                            setTime('Flamengo')
                        }}
                    />
                }

                {time != 'Vasco' &&
                    <Button
                        title="Vasco"
                        color='#010100'

                        onPress={() => {

                            setTime('Vasco')
                        }}
                    />
                }

                {name != 'Carlos' &&
                    <Button
                        title="Carlos"
                        color='#fea501'

                        onPress={() => {
                            setName('Carlos')
                        }}
                    />
                }
                {name != 'Paulo' &&
                    <Button
                        title="Paulo"
                        color='#008081'

                        onPress={() => {
                            setName('Paulo')
                        }}
                    />}





            </View>
        </View>
    )
}

export default Atividade1