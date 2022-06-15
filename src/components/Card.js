import React from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native";

const Card = (props) => {
    const { title, image, price, description, navigation, route } = props;
    const imageLink = "https://sk1nixo0.directus.app/assets"
    const source = `${imageLink}/${image}`
    // console.log(source);

    // we can send props in navigation.navigate()
    return (<View style={styles.container} >
        <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', { title: title, price: price, image: image, description: description })}>
            <Image style={styles.image} source={{ uri: source }} />
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.textPrice}>₹ {price}</Text>
        </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: undefined,
        margin: 10,
    },
    image: {
        width: "100%",
        borderRadius: 10,
        // height: 200,
        height: undefined, // used for taking complete height of the view
        aspectRatio: 1,
    },
    text: {
        fontSize: 20,
        color: "green"
    },
    textPrice: {
        fontSize: 15,
        color: "green"
    }
})

export default Card;