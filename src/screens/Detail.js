import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Detail = ({ route }) => {
    const { title, image, price } = route.params
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.image} source={image} />
                <View style={styles.textContainer}>
                    <Text style={styles.text} >{title}</Text>
                    <Text style={styles.textPrice}>₹ {price}</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: undefined,
        aspectRatio: 1,
    },
    textContainer: {
        paddingLeft: 20,
    },
    text: {
        fontSize: 30,
        color: "green"
    },
    textPrice: {
        fontSize: 18,
        color: "green"
    }
});

export default Detail