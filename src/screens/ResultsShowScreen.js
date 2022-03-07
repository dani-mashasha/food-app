import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import yelp from "../api/yelp.js";

const ResultShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam("id");

    const getResult = async (id) => {
        try {
            const { data } = await yelp.get(`/${id}`);
            setResult(data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{result.name}</Text>
            <Text>{`Address: ${result.location.city} ${result.location.address1}`}</Text>
            <Text>Call Now: {result.phone}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => (
                    <Image style={styles.image} source={{ uri: item }} />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
    },
    infoSection: {
        flexDirection: "column",
        alignItems: "flex-start",
        marginBottom: 5,
        justifyContent: "space-between",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 15,
        marginVertical: 10,
    },
    image: {
        height: 200,
        width: 300,
        borderRadius: 4,

        marginBottom: 5,
    },
});

export default ResultShowScreen;
