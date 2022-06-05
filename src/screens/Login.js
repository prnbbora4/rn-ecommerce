import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'

const Login = ({ navigation }) => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")


    const submit = () => {
        if (username === "pranab" && password === "p@12") {
            Alert.alert("Welcome " + username + " enjoy your shopping")
            // navigation.navigate("ProductScreen")
            navigation.navigate("AllProductDemo")
        }
        else {
            Alert.alert("Invalid Credintials !!! Please Try again..")
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login Here</Text>
            <Text style={styles.description}>Feel free to login and happy shopping</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Enter your username or email"
                    value={username}
                    onChangeText={(data) => { setUserName(data) }}
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.inputStyle}
                    placeholder="Enter your password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(data) => { setPassword(data) }}
                    autoCapitalize="none"
                />
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => submit()}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        marginVertical: 200,
        marginHorizontal: 10,
    },
    heading: {
        fontSize: 30,
        color: "green"
    },
    description: {
        fontSize: 15,
        color: "gray"
    },
    inputContainer: {

    },
    inputStyle: {
        height: 60,
        marginBottom: 12,
        // borderWidth: 1,
        padding: 10,
        borderBottomWidth: 1,
    },
    button: {
        width: "100%",
        height: 60,
        backgroundColor: "blue",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 12,
    },
    buttonText: {
        fontSize: 20,
        color: "white"
    }
})
export default Login