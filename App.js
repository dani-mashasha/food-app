import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen.js";
import ResultShowScreen from "./src/screens/ResultsShowScreen.js";

const navigator = createStackNavigator(
    {
        Search: SearchScreen,
        ResultsShow: ResultShowScreen,
    },
    {
        initialRouteName: "Search",
        defaultNavigationOptions: {
            title: "Business Search",
        },
    }
);

export default createAppContainer(navigator);
