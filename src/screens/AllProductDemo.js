import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import ProductScreen from './Product'

const AllProductDemo = ({ navigation }) => {
    return (
        <ScrollView>
            <Text style={styles.textCategory}>Vegetables</Text>
            <ProductScreen navigation={navigation} />
            <Text style={styles.textCategory}>Rice</Text>
            <ProductScreen navigation={navigation} />
            <Text style={styles.textCategory}>Fruits</Text>
            <ProductScreen navigation={navigation} />
            <Text style={styles.textCategory}>Green Vegetables</Text>
            <ProductScreen navigation={navigation} />
            <Text style={styles.textCategory}>Masala</Text>
            <ProductScreen navigation={navigation} />
            <Text style={styles.textCategory}>Rice Flour</Text>
            <ProductScreen navigation={navigation} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    textCategory: {
        fontSize: 30,
        color: "#7007ba"
    }
})

export default AllProductDemo