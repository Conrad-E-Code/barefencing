import { FlatList, StyleSheet, View, Text } from "react-native"
import PlaceItem from "../PlaceItem"
import {Colors} from "../../constants/colors"

function PlacesList({places}) {
    if (!places || places.length ===0) {
        return (
        <View style={styles.fallbackContainer}>
            <Text style={styles.fallbackText}>Nothing here yet
            </Text>
        </View>
        )
    }

    return (
        <FlatList 
        renderItem={({item}) => <PlaceItem place={item} />} 
        data={places} 
        keyExtractor={(item) => item.id}>

        </FlatList>)
}

export default PlacesList
const styles = StyleSheet.create({
    fallbackContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    },
    fallbackText : {
        fontSize: 16,
        color: Colors.primary200
    }
})