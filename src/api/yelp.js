import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization:
            "Bearer v_WJ3YZxzYbULjRtvxA7CmqqVQ82fEcWuGZUX5IntD2TLh0jZISWoMr-nGDSKfCS29xfknbT7grpGT4wYUoiBcJ0L2NfTh2WvARArxwMMVt3_wkr0IZHPTbO8NkMYnYx",
    },
});
