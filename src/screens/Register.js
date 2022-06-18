import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'

const Register = ({ navigation }) => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")


    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Register Here</Text>
            <Text style={styles.description}>Awesome shopping</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Enter your username"
                    value={username}
                    onChangeText={(data) => { setUserName(data) }}
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.inputStyle}
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={(data) => { setEmail(data) }}
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.inputStyle}
                    placeholder="Enter your phone number"
                    value={phone}
                    onChangeText={(data) => { setPhone(data) }}
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
            >
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

            <View>

                <Text style={styles.registerText} >Already have a account ?</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("LoginScreen")}>
                    <Text style={styles.registerBtn}>Click here to Login</Text>
                </TouchableOpacity>
            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        marginVertical: 120,
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
    },
    registerText: {
        fontSize: 15,
        color: "black",
        marginTop: 5,
    },
    registerBtn: {
        fontSize: 20,
        color: "blue",
        marginTop: 5,
    },
})
export default Register