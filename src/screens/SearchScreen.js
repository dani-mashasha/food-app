import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar.js";
import useResults from "../hooks/useResults.js";
import ResultsList from "../components/ResultsList.js";

const SearchScreen = () => {
    const [term, setTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter((result) => result.price === price);
    };
    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList
                    results={filterResultsByPrice("$")}
                    title="Cost Effective"
                />
                <ResultsList
                    results={filterResultsByPrice("$$")}
                    title="Bit Pricier"
                />
                <ResultsList
                    results={filterResultsByPrice("$$$")}
                    title="Big Spender"
                />
            </ScrollView>
        </>
    );
};

const stlyes = StyleSheet.create({});

export default SearchScreen;
