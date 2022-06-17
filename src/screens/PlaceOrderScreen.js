import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

const PlaceOrderScreen = ({ navigation, route }) => {
    const { price } = route.params
    const [phone, setPhone] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [pin, setPin] = React.useState('')
    const [state, setState] = React.useState('')

    const order = () => {
        if (phone == "" && address == "" && pin == "" && state == "") {
            Alert.alert("Fill the form correctly..")
        }
        else {
            Alert.alert(`Successfully ordered your item. \nPrice:  ₹ ${price}`)
        }
    }
    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Enter your phone number"
                    value={phone}
                    onChangeText={(data) => { setPhone(data) }}
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.inputStyle}
                    placeholder="Address"
                    value={address}
                    onChangeText={(data) => { setAddress(data) }}
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Pin"
                    value={pin}
                    onChangeText={(data) => { setPin(data) }}
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder="State"
                    value={state}
                    onChangeText={(data) => { setState(data) }}
                    autoCapitalize="none"
                />
                <Text style={styles.textPrice}> ₹ {price}</Text>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => order()}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    inputStyle: {
        height: 60,
        marginBottom: 12,
        // borderWidth: 1,
        padding: 10,
        borderBottomWidth: 1,
    },
    textPrice: {
        fontSize: 30,
        color: "black",
        height: 60,
        marginBottom: 12,
        padding: 10,
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

export default PlaceOrderScreen