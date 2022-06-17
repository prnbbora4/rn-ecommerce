import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native'
import React from 'react'

const Detail = ({ navigation, route }) => {
    const { title, image, price, description } = route.params
    const [priceQty, setPriceQty] = React.useState(price)
    const imageLink = "https://sk1nixo0.directus.app/assets"
    const source = `${imageLink}/${image}`

    const increase = () => {
        setPriceQty(priceQty + price)
    }
    const decrease = () => {
        setPriceQty(priceQty - price)
    }


    return (
        <View style={styles.container}>
            <View style={styles.data}>
                <View>
                    <Image style={styles.image} source={{ uri: source }} />
                    <View style={styles.content}>
                        <Text style={styles.text} >{title}</Text>
                        <View style={styles.priceWithQty}>
                            <TouchableOpacity style={styles.qtyBtn} onPress={decrease}>
                                <Text style={styles.qtyText}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.textPrice}>₹ {priceQty}</Text>
                            <TouchableOpacity style={styles.qtyBtn} onPress={increase}>
                                <Text style={styles.qtyText}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.description}>{description}</Text>
                    </View>
                </View>

                <View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("PlaceOrderScreen", { price: priceQty })}>
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
        color: "green",
        minWidth: 50
    },
    priceWithQty: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    qtyBtn: {
        width: 35,
        height: 35,
        backgroundColor: "blue",
        borderRadius: 50,
        margin: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    qtyText: {
        fontSize: 20,
        color: "white",
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