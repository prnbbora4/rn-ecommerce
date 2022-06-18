import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Card from '../components/Card';
import Product from '../../api/Api';

export default function ProductScreen({ navigation }) {
    const [isLoading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    // console.log(data.data);

    const getArticlesFromApi = async () => {
        try {
            let response = await fetch(
                'https://sk1nixo0.directus.app/items/products'
            );
            let json = await response.json();
            setData(json);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    React.useEffect(() => {
        getArticlesFromApi();
    }, [])


    const renderItem = ({ item }) => (
        <Card title={item.product_name} image={item.product_image} price={item.product_price} description={item.description} navigation={navigation} />
    );
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                // data={Product}
                data={data.data}
                renderItem={renderItem}
                // showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                // numColumns={2}
                horizontal={true}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        // borderColor: 'black',
        height: 220,
    },
    list: {
        // borderWidth: 1,
        // borderColor: 'blue',
    }
});