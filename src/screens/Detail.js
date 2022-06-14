import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Detail = ({ navigation, route }) => {
    const { title, image, price, description } = route.params
    const imageLink = "https://sk1nixo0.directus.app/assets"

    return (
        <View style={styles.container}>
            <View style={styles.data}>
                <View>
                    <Image style={styles.image} source={`${imageLink}/${image}?quality=80`} />
                    <View style={styles.content}>
                        <Text style={styles.text} >{title}</Text>
                        <Text style={styles.textPrice}>₹ {price}</Text>
                        <Text style={styles.description}>{description}</Text>

                    </View>
                </View>

                <View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("PlaceOrderScreen")}>
                        <Text style={styles.buttonText}>
                            Buy Now
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        height: "100%"
    },
    data: {
        flex: 1,
        justifyContent: "space-between"
    },
    image: {
        width: "100%",
        height: undefined,
        aspectRatio: 1,
    },
    text: {
        fontSize: 30,
        color: "green"
    },
    textPrice: {
        fontSize: 18,
        color: "green"
    },
    description: {
        fontSize: 15,
        color: "black"
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
    content: {
        flexDirection: "column",
        justifyContent: "space-between",
    }
});

export default Detail