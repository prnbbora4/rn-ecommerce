import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Card from '../components/Card';
import Product from '../../api/Api';

export default function ProductScreen({ navigation }) {
    const renderItem = ({ item }) => (
        <Card title={item.name} image={item.image} price={item.price} navigation={navigation} />
    );
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={Product}
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