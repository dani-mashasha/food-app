import { useEffect, useState } from "react";
import yelp from "../api/yelp.js";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async (searchTerm) => {
        try {
            const { data } = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: "san jose",
                },
            });
            setResults(data.businesses);
        } catch (error) {
            setErrorMessage("Somting went wrong...");
        }
    };

    useEffect(() => {
        searchApi("pasta");
    }, []);

    return [searchApi, results, errorMessage];
};
