import React from "react";
import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Keyboard,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <TouchableOpacity
                onPress={() => {
                    onTermSubmit();
                    Keyboard.dismiss();
                }}
            >
                <Feather name="search" style={styles.iconStyle} />
            </TouchableOpacity>

            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "#DFDFDF",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row-reverse",
        marginVertical: 10,
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
        marginLeft: 10,
    },
    iconStyle: {
        fontSize: 35,
        marginVertical: 6,
        marginHorizontal: 15,
    },
});

export default SearchBar;
