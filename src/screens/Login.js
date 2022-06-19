import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    // const submit = () => {
    //     if (username === "p" || password === "p@12") {
    //         Alert.alert("Welcome " + username + " enjoy your shopping")
    //         // navigation.navigate("ProductScreen")
    //         navigation.navigate("AllProductDemo", { username: username })
    //     }
    //     else {
    //         Alert.alert("Invalid Credintials !!! Please Try again..")
    //     }
    // }

    const handleLogin = () => {
        if (email && password) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Log in
                    const user = userCredential.user;
                    // console.log(user);
                    Alert.alert("Welcome enjoy your shopping")
                    navigation.navigate("AllProductDemo")

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error(errorMessage);
                });

        } else {
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
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={(data) => { setEmail(data) }}
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
                onPress={() => handleLogin()}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View>

                <Text style={styles.registerText} >Don't have a account ?</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Register")}>
                    <Text style={styles.registerBtn}>Click here to Register</Text>
                </TouchableOpacity>
            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        justifyContent: "center",
        // marginVertical: 200,
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
export default Login