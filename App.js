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
            cardStyle: {
                backgroundColor: "#EEEEEE",
            },
            headerStyle: {
                backgroundColor: "#655D8A",
            },
            title: "Restaurants Search",
            headerTitleStyle: {
                color: "#ffff",
            },
        },
        screenOptions: { headerStyle: { backgroundColor: "papayawhip" } },
    }
);

export default createAppContainer(navigator);
